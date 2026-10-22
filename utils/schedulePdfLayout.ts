import type { Speaker, Talk } from '~/types';
import { buildScheduleGrid } from '~/utils/buildScheduleGrid';
import { sortRooms } from '~/utils/sortRooms';

export const SCHEDULE_PDF_PAGE = { width: 842, height: 595 };

// Template pages, in the order they appear in the template PDF.
const TEMPLATE_PAGES = { morning: 0, afternoon: 1, labs: [2, 3], roundTable: 4 };
const AFTERNOON_START = '14:15';
const LAB_FORMATS = ['Hands on lab', 'Université'];
const ROUND_TABLE_FORMAT = 'Table ronde';

const COLORS = {
  text: '#373739',
  title: '#242457',
  room: '#7d7df8',
  speakerFallback: '#7d7df8',
};

const GRID = {
  left: 73,
  right: 803,
  columnGap: 7.5,
  maxColumnWidth: 140,
  top: 143,
  bottom: 585,
  timeX: 12,
  headerBaseline: 112,
  contiguousGap: 8,
  shortBreakGap: 14,
  mediumBreakGap: 24,
  longBreakGap: 40,
  mediumBreakMinutes: 16,
  longBreakMinutes: 46,
  stackGap: 3.5,
  minScale: 0.55,
  maxScale: 1.15,
};

const TIMELINE = {
  centerX: 421,
  pitch: 235,
  cardWidth: 150,
  minCardHeight: 90,
  headerBaseline: 246,
  roomX: 30,
  roomBaseline: 138,
  // Dash positions of the dashed curve drawn in the template's lab pages, used to thread cards on it.
  curve: [
    [-6, 390], [41, 395], [87, 377], [148, 335], [195, 319], [244, 320], [292, 332], [340, 333], [388, 322],
    [435, 311], [483, 312], [529, 327], [574, 351], [622, 368], [673, 369], [720, 347], [771, 289], [847, 232],
  ] as [number, number][],
};

export type PdfFont = 'regular' | 'bold' | 'italic' | 'title';
export type PdfMeasurer = (text: string, size: number, font: PdfFont) => number;

export type PdfText = {
  text: string;
  x: number;
  baseline: number;
  size: number;
  font: PdfFont;
  color: string;
  align?: 'left' | 'center';
};

export type PdfCard = {
  id: number;
  x: number;
  top: number;
  width: number;
  height: number;
  color: string;
  texts: PdfText[];
  speakers: { speaker: Speaker; x: number; top: number; size: number }[];
};

export type PdfPageLayout = {
  templatePage: number;
  texts: PdfText[];
  cards: PdfCard[];
};

// WinAnsi code points beyond Latin-1 (0xA0-0xFF), which standard PDF fonts can draw.
const WIN_ANSI_EXTRA = new Set([
  0x152, 0x153, 0x160, 0x161, 0x178, 0x17d, 0x17e, 0x192, 0x2c6, 0x2dc, 0x2013, 0x2014, 0x2018, 0x2019, 0x201a, 0x201c,
  0x201d, 0x201e, 0x2020, 0x2021, 0x2022, 0x2026, 0x2030, 0x2039, 0x203a, 0x20ac, 0x2122,
]);
const REPLACEMENTS = new Map([
  [0x2265, '>='],
  [0x2264, '<='],
  [0x2192, '->'],
  [0x202f, ' '],
  [0x2009, ' '],
]);

function toWinAnsiChar(char: string) {
  const code = char.codePointAt(0)!;
  if ((code >= 0x20 && code <= 0x7e) || (code >= 0xa0 && code <= 0xff) || WIN_ANSI_EXTRA.has(code)) return char;
  return REPLACEMENTS.get(code) ?? '';
}

// Standard PDF fonts only cover WinAnsi: emojis and other symbols are dropped.
export function toWinAnsi(text: string) {
  return [...text]
    .map(toWinAnsiChar)
    .join('')
    .replace(/[ \t\r\n]+/g, ' ')
    .trim();
}

function toMinutes(time: string) {
  const [hours = 0, minutes = 0] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

export function formatPdfTime(time: string) {
  const [hours = '0', minutes = '00'] = time.split(':');
  return `${Number(hours)}h${minutes}`;
}

function wrap(text: string, maxWidth: number, size: number, font: PdfFont, measure: PdfMeasurer) {
  const lines: string[] = [];
  let line = '';

  for (const word of toWinAnsi(text).split(' ').filter(Boolean)) {
    const candidate = line ? `${line} ${word}` : word;
    if (measure(candidate, size, font) <= maxWidth) {
      line = candidate;
      continue;
    }
    if (line) lines.push(line);

    let rest = word;
    while (measure(rest, size, font) > maxWidth && rest.length > 1) {
      let cut = rest.length - 1;
      while (cut > 1 && measure(rest.slice(0, cut), size, font) > maxWidth) cut--;
      lines.push(rest.slice(0, cut));
      rest = rest.slice(cut);
    }
    line = rest;
  }

  if (line) lines.push(line);
  return lines;
}

function createStyle(k: number) {
  return {
    k,
    bar: 3,
    padLeft: 4 * k,
    padRight: 4 * k,
    padTop: 3.5 * k,
    padBottom: 3.8 * k,
    titleSize: 6.2 * k,
    titleLine: 7.6 * k,
    metaSize: 5.4 * k,
    metaLine: 6.6 * k,
    speakerSize: 15 * k,
    speakerGap: 3 * k,
    speakerMargin: 4 * k,
    nameGap: 4 * k,
  };
}

type Style = ReturnType<typeof createStyle>;

type MeasuredCard = {
  title: string[];
  level: string[];
  category: string[];
  speakers: { speaker: Speaker; lines: string[]; height: number }[];
  textHeight: number;
  speakersHeight: number;
  height: number;
};

function measureCard(talk: Talk, width: number, style: Style, measure: PdfMeasurer): MeasuredCard {
  const innerWidth = width - style.bar - style.padLeft - style.padRight;

  const title = wrap(talk.title, innerWidth, style.titleSize, 'bold', measure);
  const level = talk.level ? wrap(talk.level, innerWidth, style.metaSize, 'italic', measure) : [];
  const category = talk.category?.name ? wrap(talk.category.name, innerWidth, style.metaSize, 'bold', measure) : [];

  const nameWidth = innerWidth - style.speakerSize - style.nameGap;
  const speakers = (talk.speakers ?? []).map((speaker) => {
    const lines = wrap(speaker.name, nameWidth, style.metaSize, 'regular', measure);
    return { speaker, lines, height: Math.max(style.speakerSize, lines.length * style.metaLine) };
  });

  const textHeight = title.length * style.titleLine + (level.length + category.length) * style.metaLine;
  const speakersHeight = speakers.length
    ? style.speakerMargin +
      speakers.reduce((total, item) => total + item.height, 0) +
      (speakers.length - 1) * style.speakerGap
    : 0;

  return {
    title,
    level,
    category,
    speakers,
    textHeight,
    speakersHeight,
    height: style.padTop + textHeight + speakersHeight + style.padBottom,
  };
}

function placeCard(talk: Talk, measured: MeasuredCard, x: number, top: number, width: number, height: number, style: Style): PdfCard {
  const color = talk.category?.color || '#000000';
  const textX = x + style.bar + style.padLeft;
  const texts: PdfText[] = [];
  let cursor = top + style.padTop;

  const push = (lines: string[], size: number, lineHeight: number, font: PdfFont, fill: string) => {
    for (const text of lines) {
      texts.push({ text, x: textX, baseline: cursor + (lineHeight - size) / 2 + size * 0.82, size, font, color: fill });
      cursor += lineHeight;
    }
  };

  push(measured.title, style.titleSize, style.titleLine, 'bold', COLORS.text);
  push(measured.level, style.metaSize, style.metaLine, 'italic', COLORS.text);
  push(measured.category, style.metaSize, style.metaLine, 'bold', color);

  const speakers: PdfCard['speakers'] = [];
  let speakerTop = top + height - style.padBottom - (measured.speakersHeight - style.speakerMargin);
  for (const item of measured.speakers) {
    speakers.push({ speaker: item.speaker, x: textX, top: speakerTop + (item.height - style.speakerSize) / 2, size: style.speakerSize });

    const nameTop = speakerTop + (item.height - item.lines.length * style.metaLine) / 2;
    item.lines.forEach((text, index) => {
      texts.push({
        text,
        x: textX + style.speakerSize + style.nameGap,
        baseline: nameTop + index * style.metaLine + (style.metaLine - style.metaSize) / 2 + style.metaSize * 0.82,
        size: style.metaSize,
        font: 'regular',
        color: COLORS.text,
      });
    });
    speakerTop += item.height + style.speakerGap;
  }

  return { id: talk.id, x, top, width, height, color, texts, speakers };
}

type GridCell = {
  rowIndex: number;
  rowSpan: number;
  columnIndex: number;
  height: number;
  place: (x: number, top: number, bottom: number, width: number) => PdfCard[];
};

const durationOf = (talk: Talk) => toMinutes(talk.slot!.endSlot) - toMinutes(talk.slot!.startSlot);

// Short talks played in a room while another room hosts one long talk over the same time (e.g. two quickies
// next to a conference) are stacked in the long talk's row instead of getting their own rows and time labels.
function splitNested(talks: Talk[]) {
  const isNested = (talk: Talk) =>
    talks.some(
      (other) =>
        other.room!.id !== talk.room!.id &&
        other.slot!.startSlot <= talk.slot!.startSlot &&
        other.slot!.endSlot >= talk.slot!.endSlot &&
        durationOf(other) > durationOf(talk)
    );
  const nested = talks.filter(isNested);
  return { primary: talks.filter((talk) => !nested.includes(talk)), nested };
}

function layoutGrid(talks: Talk[], measure: PdfMeasurer, style: Style): { page: Omit<PdfPageLayout, 'templatePage'>; height: number } {
  const { primary, nested } = splitNested(talks);
  const grid = buildScheduleGrid(primary);
  // A room that only hosts nested talks still needs its own column.
  const rooms = buildScheduleGrid(talks).rooms;
  const boundaries = [...grid.rows.map((row) => row.time), lastBoundary(primary)];
  const roomCount = rooms.length;
  const columnWidth = Math.min(GRID.maxColumnWidth, (GRID.right - GRID.left - (roomCount - 1) * GRID.columnGap) / roomCount);
  const columnX = (index: number) => GRID.left + index * (columnWidth + GRID.columnGap);

  const cells: GridCell[] = grid.cells.map((cell) => {
    const card = measureCard(cell.talk, columnWidth, style, measure);
    return {
      rowIndex: cell.rowIndex,
      rowSpan: cell.rowSpan,
      columnIndex: rooms.findIndex((room) => room.id === cell.talk.room!.id),
      height: card.height,
      place: (x, top, bottom, width) => [placeCard(cell.talk, card, x, top, width, bottom - top, style)],
    };
  });

  const stacks = new Map<string, { rowIndex: number; rowSpan: number; columnIndex: number; talks: Talk[] }>();
  for (const talk of nested) {
    const columnIndex = rooms.findIndex((room) => room.id === talk.room!.id);
    const rowIndex = boundaries.findLastIndex((time) => time <= talk.slot!.startSlot);
    const endIndex = boundaries.findIndex((time) => time >= talk.slot!.endSlot);
    if (columnIndex === -1 || rowIndex === -1 || endIndex <= rowIndex) continue;

    const key = `${columnIndex}:${rowIndex}:${endIndex}`;
    const stack = stacks.get(key) ?? { rowIndex, rowSpan: endIndex - rowIndex, columnIndex, talks: [] };
    stack.talks.push(talk);
    stacks.set(key, stack);
  }

  for (const stack of stacks.values()) {
    const ordered = stack.talks.sort((a, b) => a.slot!.startSlot.localeCompare(b.slot!.startSlot));
    const cards = ordered.map((talk) => measureCard(talk, columnWidth, style, measure));
    const itemHeight = Math.max(...cards.map((card) => card.height));
    cells.push({
      rowIndex: stack.rowIndex,
      rowSpan: stack.rowSpan,
      columnIndex: stack.columnIndex,
      height: cards.length * itemHeight + (cards.length - 1) * GRID.stackGap,
      place: (x, top, bottom, width) => {
        const height = (bottom - top - (cards.length - 1) * GRID.stackGap) / cards.length;
        return ordered.map((talk, index) =>
          placeCard(talk, cards[index]!, x, top + index * (height + GRID.stackGap), width, height, style)
        );
      },
    });
  }

  const heights = grid.rows.map(() => 0);
  for (const cell of cells.filter((item) => item.rowSpan === 1)) {
    heights[cell.rowIndex] = Math.max(heights[cell.rowIndex] ?? 0, cell.height);
  }

  const positive = () => heights.map((height, index) => ({ height, index })).filter((row) => row.height > 0).map((row) => row.index);
  const gapAfter = (index: number, next: number) => {
    if (next === index + 1) return GRID.contiguousGap;
    const minutes = toMinutes(boundaries[next] ?? '') - toMinutes(boundaries[index + 1] ?? '');
    if (minutes >= GRID.longBreakMinutes) return GRID.longBreakGap;
    return minutes >= GRID.mediumBreakMinutes ? GRID.mediumBreakGap : GRID.shortBreakGap;
  };

  for (const cell of cells.filter((item) => item.rowSpan > 1).sort((a, b) => a.rowSpan - b.rowSpan)) {
    const rows = positive().filter((index) => index >= cell.rowIndex && index < cell.rowIndex + cell.rowSpan);
    const current = rows.reduce(
      (total, index, position) => total + (heights[index] ?? 0) + (position ? gapAfter(rows[position - 1]!, index) : 0),
      0
    );
    const deficit = cell.height - current;
    if (deficit <= 0) continue;
    const targets = rows.length ? rows : [cell.rowIndex];
    for (const index of targets) heights[index] = (heights[index] ?? 0) + deficit / targets.length;
  }

  const tops: number[] = [];
  const rowsWithHeight = positive();
  let cursor = GRID.top;
  rowsWithHeight.forEach((index, position) => {
    tops[index] = cursor;
    const next = rowsWithHeight[position + 1];
    cursor += (heights[index] ?? 0) + (next === undefined ? 0 : gapAfter(index, next));
  });
  const bottomOf = (index: number) => (tops[index] ?? 0) + (heights[index] ?? 0);

  const cards = cells.flatMap((cell) => {
    const rows = rowsWithHeight.filter((index) => index >= cell.rowIndex && index < cell.rowIndex + cell.rowSpan);
    const top = tops[cell.rowIndex] ?? GRID.top;
    const bottom = rows.length ? bottomOf(rows.at(-1)!) : top + cell.height;
    return cell.place(columnX(cell.columnIndex), top, bottom, columnWidth);
  });

  const texts: PdfText[] = rooms.map((room, index) => ({
    text: toWinAnsi(room.name),
    x: columnX(index) + columnWidth / 2,
    baseline: GRID.headerBaseline,
    size: 10,
    font: 'title',
    color: COLORS.room,
    align: 'center',
  }));

  boundaries.forEach((time, index) => {
    if (!time) return;
    const isStart = (heights[index] ?? 0) > 0 && index < grid.rows.length;
    const previous = rowsWithHeight.filter((row) => row < index).at(-1);
    const baseline = isStart ? (tops[index] ?? 0) + 9 : previous === undefined ? undefined : bottomOf(previous) + 2;
    if (baseline === undefined) return;
    texts.push({ text: formatPdfTime(time), x: GRID.timeX, baseline, size: 10, font: 'title', color: COLORS.title });
  });

  return { page: { texts, cards }, height: Math.max(0, cursor - GRID.top) };
}

function lastBoundary(talks: Talk[]) {
  return talks.reduce((latest, talk) => ((talk.slot?.endSlot ?? '') > latest ? talk.slot!.endSlot : latest), '');
}

// Largest text scale for which the rows fit the page, so sparse pages get bigger cards instead of empty space.
function layoutFitted(talks: Talk[], measure: PdfMeasurer, templatePage: number): PdfPageLayout {
  const available = GRID.bottom - GRID.top;
  let low = GRID.minScale;
  let high = GRID.maxScale;
  let best = layoutGrid(talks, measure, createStyle(low));

  for (let i = 0; i < 14; i++) {
    const mid = (low + high) / 2;
    const attempt = layoutGrid(talks, measure, createStyle(mid));
    if (attempt.height <= available) {
      best = attempt;
      low = mid;
    } else {
      high = mid;
    }
  }

  return { templatePage, ...best.page };
}

function curveY(x: number) {
  const points = TIMELINE.curve;
  const first = points[0]!;
  const last = points.at(-1)!;
  if (x <= first[0]) return first[1];
  if (x >= last[0]) return last[1];

  const index = points.findIndex(([px]) => px >= x);
  const [x0, y0] = points[index - 1]!;
  const [x1, y1] = points[index]!;
  return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
}

function layoutTimeline(talks: Talk[], measure: PdfMeasurer, templatePage: number, room: string): PdfPageLayout {
  const style = createStyle(1);
  const sorted = [...talks].sort((a, b) => (a.slot?.startSlot ?? '').localeCompare(b.slot?.startSlot ?? ''));
  const pitch = Math.min(TIMELINE.pitch, (GRID.right - GRID.left) / Math.max(1, sorted.length));
  const width = Math.min(TIMELINE.cardWidth, pitch - 10);

  const texts: PdfText[] = [
    { text: toWinAnsi(room), x: TIMELINE.roomX, baseline: TIMELINE.roomBaseline, size: 24, font: 'title', color: COLORS.room },
  ];

  const cards = sorted.map((talk, index) => {
    const centerX = TIMELINE.centerX + (index - (sorted.length - 1) / 2) * pitch;
    const measured = measureCard(talk, width, style, measure);
    const height = Math.max(TIMELINE.minCardHeight, measured.height);
    const top = curveY(centerX) - height / 2;

    if (talk.slot) {
      texts.push({
        text: `De ${formatPdfTime(talk.slot.startSlot)} à ${formatPdfTime(talk.slot.endSlot)}`,
        x: centerX,
        baseline: TIMELINE.headerBaseline,
        size: 12,
        font: 'title',
        color: COLORS.title,
        align: 'center',
      });
    }

    return placeCard(talk, measured, centerX - width / 2, top, width, height, style);
  });

  return { templatePage, texts, cards };
}

const isLab = (talk: Talk) => LAB_FORMATS.includes(talk.format?.name ?? '');
const isRoundTable = (talk: Talk) => talk.format?.name === ROUND_TABLE_FORMAT;

export function buildSchedulePdfLayouts(dayTalks: Talk[], measure: PdfMeasurer): PdfPageLayout[] {
  const planned = dayTalks.filter((talk) => talk.slot && talk.room);
  const plenary = planned.filter((talk) => !isLab(talk) && !isRoundTable(talk));
  const isMorning = (talk: Talk) => talk.slot!.startSlot < AFTERNOON_START;

  const layouts: PdfPageLayout[] = [];
  const morning = plenary.filter(isMorning);
  const afternoon = plenary.filter((talk) => !isMorning(talk));
  if (morning.length) layouts.push(layoutFitted(morning, measure, TEMPLATE_PAGES.morning));
  if (afternoon.length) layouts.push(layoutFitted(afternoon, measure, TEMPLATE_PAGES.afternoon));

  const labRooms = sortRooms(
    planned.filter(isLab).reduce((rooms, talk) => (rooms.some((room) => room.id === talk.room!.id) ? rooms : [...rooms, talk.room!]), [] as NonNullable<Talk['room']>[])
  );
  labRooms.slice(0, TEMPLATE_PAGES.labs.length).forEach((room, index) => {
    const talks = planned.filter((talk) => isLab(talk) && talk.room!.id === room.id);
    layouts.push(layoutTimeline(talks, measure, TEMPLATE_PAGES.labs[index]!, room.name));
  });

  const roundTables = planned.filter(isRoundTable);
  if (roundTables.length) {
    layouts.push(layoutTimeline(roundTables, measure, TEMPLATE_PAGES.roundTable, roundTables[0]!.room!.name));
  }

  return layouts;
}
