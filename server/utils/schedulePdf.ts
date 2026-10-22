import type { PDFDocument, PDFFont, PDFPage } from 'pdf-lib';
import type { Talk } from '~/types';
import { buildSchedulePdfLayouts, SCHEDULE_PDF_PAGE } from './schedulePdfLayout';
import type { PdfCard, PdfFont, PdfPageLayout, PdfText } from './schedulePdfLayout';

type Options = {
  template: ArrayBuffer;
  titleFont: ArrayBuffer;
  talks: Talk[];
  photos: Record<number, string>;
};

const BAR_WIDTH = 3;
const SHADOW_COLOR = '#242457';
const FALLBACK_COLOR = '#7d7df8';

function hexToRgb(hex: string) {
  const value = hex.replace('#', '');
  const full = value.length === 3 ? [...value].map((char) => char + char).join('') : value;
  const [r = 0, g = 0, b = 0] = [0, 2, 4].map((offset) => parseInt(full.slice(offset, offset + 2), 16) / 255);
  return { r, g, b };
}

function roundedRect(x: number, top: number, width: number, height: number, left: number, right: number) {
  const r = (value: number) => Math.min(value, width / 2, height / 2);
  const [tl, tr, br, bl] = [r(left), r(right), r(right), r(left)];
  return [
    `M ${x + tl} ${top}`,
    `H ${x + width - tr}`,
    `A ${tr} ${tr} 0 0 1 ${x + width} ${top + tr}`,
    `V ${top + height - br}`,
    `A ${br} ${br} 0 0 1 ${x + width - br} ${top + height}`,
    `H ${x + bl}`,
    `A ${bl} ${bl} 0 0 1 ${x} ${top + height - bl}`,
    `V ${top + tl}`,
    `A ${tl} ${tl} 0 0 1 ${x + tl} ${top}`,
    'Z',
  ].join(' ');
}

export async function generateSchedulePdf({ template, titleFont, talks, photos }: Options) {
  const { PDFDocument, StandardFonts, rgb, pushGraphicsState, popGraphicsState, moveTo, appendBezierCurve, closePath, clip, endPath } =
    await import('pdf-lib');
  const fontkit = (await import('@pdf-lib/fontkit')).default;

  const pdf: PDFDocument = await PDFDocument.load(template);
  pdf.registerFontkit(fontkit);

  const fonts: Record<PdfFont, PDFFont> = {
    regular: await pdf.embedFont(StandardFonts.Helvetica),
    bold: await pdf.embedFont(StandardFonts.HelveticaBold),
    italic: await pdf.embedFont(StandardFonts.HelveticaOblique),
    title: await pdf.embedFont(titleFont, { subset: true }),
  };

  const color = (hex: string) => {
    const { r, g, b } = hexToRgb(hex);
    return rgb(r, g, b);
  };

  const layouts = buildSchedulePdfLayouts(talks, (text, size, font) => fonts[font].widthOfTextAtSize(text, size));
  const pageHeight = SCHEDULE_PDF_PAGE.height;
  const images = new Map<number, Awaited<ReturnType<PDFDocument['embedJpg']>> | null>();

  async function photoFor(id: number) {
    if (!images.has(id)) {
      const source = photos[id];
      images.set(id, source?.startsWith('data:image/jpeg') ? await pdf.embedJpg(source) : null);
    }
    return images.get(id) ?? null;
  }

  function drawText(page: PDFPage, item: PdfText) {
    const font = fonts[item.font];
    const width = item.align === 'center' ? font.widthOfTextAtSize(item.text, item.size) : 0;
    page.drawText(item.text, {
      x: item.x - width / 2,
      y: pageHeight - item.baseline,
      size: item.size,
      font,
      color: color(item.color),
    });
  }

  function drawPath(page: PDFPage, path: string, fill: string, opacity = 1) {
    page.drawSvgPath(path, { x: 0, y: pageHeight, color: color(fill), opacity, borderWidth: 0 });
  }

  async function drawSpeaker(page: PDFPage, card: PdfCard, speaker: PdfCard['speakers'][number]) {
    const radius = speaker.size / 2;
    const cx = speaker.x + radius;
    const cy = pageHeight - (speaker.top + radius);
    const image = await photoFor(speaker.speaker.id);

    if (!image) {
      page.drawCircle({ x: cx, y: cy, size: radius, color: color(FALLBACK_COLOR) });
      const words = speaker.speaker.name.split(/\s+/).filter(Boolean);
      const letter = (word?: string) => word?.match(/\p{L}/u)?.[0] ?? '';
      const initials = `${letter(words[0])}${words.length > 1 ? letter(words.at(-1)) : ''}`.toUpperCase();
      const size = speaker.size * 0.375;
      const width = fonts.regular.widthOfTextAtSize(initials, size);
      page.drawText(initials, { x: cx - width / 2, y: cy - size * 0.35, size, font: fonts.regular, color: rgb(1, 1, 1) });
      return;
    }

    const k = 0.5523 * radius;
    page.pushOperators(
      pushGraphicsState(),
      moveTo(cx + radius, cy),
      appendBezierCurve(cx + radius, cy + k, cx + k, cy + radius, cx, cy + radius),
      appendBezierCurve(cx - k, cy + radius, cx - radius, cy + k, cx - radius, cy),
      appendBezierCurve(cx - radius, cy - k, cx - k, cy - radius, cx, cy - radius),
      appendBezierCurve(cx + k, cy - radius, cx + radius, cy - k, cx + radius, cy),
      closePath(),
      clip(),
      endPath()
    );
    page.drawImage(image, { x: cx - radius, y: cy - radius, width: speaker.size, height: speaker.size });
    page.pushOperators(popGraphicsState());
  }

  async function drawCard(page: PDFPage, card: PdfCard) {
    const radius = 3;
    for (const spread of [2.4, 1.6, 0.8]) {
      drawPath(page, roundedRect(card.x - spread, card.top - spread + 1.2, card.width + 2 * spread, card.height + 2 * spread, radius + spread, radius + spread), SHADOW_COLOR, 0.035);
    }
    drawPath(page, roundedRect(card.x, card.top, card.width, card.height, radius, radius), '#ffffff');
    drawPath(page, roundedRect(card.x, card.top, BAR_WIDTH, card.height, radius, 0), card.color);

    for (const item of card.texts) drawText(page, item);
    for (const speaker of card.speakers) await drawSpeaker(page, card, speaker);
  }

  const pages = pdf.getPages();
  const used = new Set<number>();

  for (const layout of layouts as PdfPageLayout[]) {
    const page = pages[layout.templatePage];
    if (!page) continue;
    used.add(layout.templatePage);
    for (const card of layout.cards) await drawCard(page, card);
    for (const item of layout.texts) drawText(page, item);
  }

  for (let index = pages.length - 1; index >= 0; index--) {
    if (!used.has(index)) pdf.removePage(index);
  }

  return pdf.save();
}
