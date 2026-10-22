import type { Speaker, Talk } from '~/types';

export const SCHEDULE_SVG_PAGE = { width: 1122.52, height: 793.7 };

const MARGIN = { top: 26, right: 28, bottom: 24, left: 28 };
const HEADER_HEIGHT = 38;
const ROOM_HEADER_HEIGHT = 22;
const FOOTER_HEIGHT = 14;
const TIME_COLUMN_WIDTH = 34;
const COLUMN_GAP = 8;
const MIN_SCALE = 0.3;

export type FontVariant = 'regular' | 'bold' | 'italic';
export type TextMeasurer = (text: string, size: number, variant: FontVariant) => number;

type PlacedText = { text: string; x: number; y: number };

export type ScheduleSvgCard = {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  title: PlacedText[];
  level: PlacedText[];
  category: PlacedText[];
  speakers: { speaker: Speaker; x: number; y: number; name: PlacedText[] }[];
};

export type ScheduleSvgLayout = {
  scale: number;
  border: number;
  speakerSize: number;
  fontSizes: { title: number; meta: number; speaker: number; room: number; time: number };
  rooms: { id: number; name: string; x: number; y: number }[];
  times: { time: string; x: number; y: number }[];
  cards: ScheduleSvgCard[];
};

function createStyle(k: number) {
  return {
    k,
    padding: 10 * k,
    border: 3,
    titleSize: 16 * k,
    metaSize: 14 * k,
    lineHeight: 1.22,
    speakerSize: Math.max(15, 26 * k),
    speakerGap: 4,
    speakerItemGap: 10 * k,
    speakerNameGap: 5 * k,
    speakerFontSize: 12 * k,
    speakerMargin: 6 * k,
    roomSize: 20 * k,
    timeSize: 18 * k,
    gap: 9 * k,
    breakHeight: 16 * k,
  };
}

type Style = ReturnType<typeof createStyle>;

function wrapText(text: string, maxWidth: number, size: number, variant: FontVariant, measure: TextMeasurer) {
  const lines: string[] = [];
  let line = '';

  for (const word of text.split(/\s+/).filter(Boolean)) {
    const candidate = line ? `${line} ${word}` : word;
    if (measure(candidate, size, variant) <= maxWidth) {
      line = candidate;
      continue;
    }

    if (line) lines.push(line);

    let rest = word;
    while (measure(rest, size, variant) > maxWidth && rest.length > 1) {
      let cut = rest.length - 1;
      while (cut > 1 && measure(rest.slice(0, cut), size, variant) > maxWidth) cut--;
      lines.push(rest.slice(0, cut));
      rest = rest.slice(cut);
    }
    line = rest;
  }

  if (line) lines.push(line);
  return lines;
}

function baseline(top: number, size: number, lineHeight: number) {
  return top + (lineHeight * size - 1.117 * size) / 2 + 0.905 * size;
}

type Grid = ReturnType<typeof buildScheduleGrid>;

function measureSpeakers(speakers: Speaker[], innerWidth: number, style: Style, measure: TextMeasurer) {
  const nameMaxWidth = innerWidth - style.speakerSize - style.speakerNameGap;

  const items = speakers.map((speaker) => {
    const lines = wrapText(speaker.name, nameMaxWidth, style.speakerFontSize, 'regular', measure);
    const textWidth = Math.max(0, ...lines.map((line) => measure(line, style.speakerFontSize, 'regular')));
    const textHeight = lines.length * style.speakerFontSize * style.lineHeight;
    return {
      speaker,
      lines,
      textHeight,
      width: style.speakerSize + style.speakerNameGap + textWidth,
      height: Math.max(style.speakerSize, textHeight),
      x: 0,
      rowTop: 0,
      rowHeight: 0,
    };
  });

  const rows: (typeof items)[] = [];
  let cursor = 0;
  for (const item of items) {
    const row = rows.at(-1);
    if (!row || cursor + item.width > innerWidth) {
      rows.push([item]);
      item.x = 0;
    } else {
      row.push(item);
      item.x = cursor;
    }
    cursor = item.x + item.width + style.speakerItemGap;
  }

  let top = 0;
  for (const row of rows) {
    const rowHeight = Math.max(...row.map((item) => item.height));
    for (const item of row) Object.assign(item, { rowTop: top, rowHeight });
    top += rowHeight + style.speakerGap;
  }

  return { items, height: rows.length ? top - style.speakerGap : 0 };
}

function measureCard(talk: Talk, width: number, style: Style, measure: TextMeasurer) {
  const innerWidth = width - style.border - 2 * style.padding;

  const title = wrapText(talk.title, innerWidth, style.titleSize, 'bold', measure);
  const level = talk.level ? wrapText(talk.level, innerWidth, style.metaSize, 'italic', measure) : [];
  const category = talk.category?.name ? wrapText(talk.category.name, innerWidth, style.metaSize, 'bold', measure) : [];

  const textHeight =
    title.length * style.titleSize * style.lineHeight +
    (level.length + category.length) * style.metaSize * style.lineHeight;

  const speakers = measureSpeakers(talk.speakers ?? [], innerWidth, style, measure);
  const speakersHeight = speakers.items.length ? style.speakerMargin + speakers.height : 0;

  return { title, level, category, speakers, speakersHeight, height: 2 * style.padding + textHeight + speakersHeight };
}

function layoutRows(grid: Grid, columnWidth: number, style: Style, measure: TextMeasurer) {
  const measured = grid.cells.map((cell) => ({ ...cell, card: measureCard(cell.talk, columnWidth, style, measure) }));

  const rowHeights = grid.rows.map((row) =>
    row.isBreak ? style.breakHeight : row.hasStart ? style.timeSize * 1.4 : 0
  );
  for (const cell of measured.filter((item) => item.rowSpan === 1)) {
    rowHeights[cell.rowIndex] = Math.max(rowHeights[cell.rowIndex] ?? 0, cell.card.height);
  }

  const spans = (cell: { rowIndex: number; rowSpan: number }) =>
    Array.from({ length: cell.rowSpan }, (_, offset) => cell.rowIndex + offset);
  const filledRows = (cell: { rowIndex: number; rowSpan: number }) =>
    spans(cell).filter((index) => (rowHeights[index] ?? 0) > 0);

  for (const cell of measured.filter((item) => item.rowSpan > 1).sort((a, b) => a.rowSpan - b.rowSpan)) {
    const filled = filledRows(cell);
    const current =
      filled.reduce((total, index) => total + (rowHeights[index] ?? 0), 0) + Math.max(0, filled.length - 1) * style.gap;
    const deficit = cell.card.height - current;
    if (deficit <= 0) continue;

    const targets = filled.length ? filled : [cell.rowIndex];
    for (const index of targets) rowHeights[index] = (rowHeights[index] ?? 0) + deficit / targets.length;
  }

  const tops: number[] = [];
  let cursor = 0;
  for (const [index, height] of rowHeights.entries()) {
    tops[index] = cursor;
    if (height > 0) cursor += height + style.gap;
  }

  const placed = measured.map((cell) => {
    const last = filledRows(cell).at(-1);
    const top = tops[cell.rowIndex] ?? 0;
    const bottom = last === undefined ? top + cell.card.height : (tops[last] ?? 0) + (rowHeights[last] ?? 0);
    return { ...cell, top, height: bottom - top };
  });

  return { placed, tops, totalHeight: Math.max(0, cursor - style.gap) };
}

function fitRows(grid: Grid, columnWidth: number, availableHeight: number, measure: TextMeasurer) {
  let low = MIN_SCALE;
  let high = 1;
  let best = createStyle(low);

  for (let i = 0; i < 24; i++) {
    const mid = (low + high) / 2;
    const style = createStyle(mid);
    if (layoutRows(grid, columnWidth, style, measure).totalHeight <= availableHeight) {
      best = style;
      low = mid;
    } else {
      high = mid;
    }
  }

  return { style: best, ...layoutRows(grid, columnWidth, best, measure) };
}

export function buildScheduleSvgLayout(dayTalks: Talk[], measure: TextMeasurer): ScheduleSvgLayout | undefined {
  const grid = buildScheduleGrid(dayTalks);
  if (!grid.cells.length) return undefined;

  const { width, height } = SCHEDULE_SVG_PAGE;
  const innerWidth = width - MARGIN.left - MARGIN.right - TIME_COLUMN_WIDTH - COLUMN_GAP;
  const columnWidth = (innerWidth - (grid.rooms.length - 1) * COLUMN_GAP) / grid.rooms.length;
  const gridLeft = MARGIN.left + TIME_COLUMN_WIDTH + COLUMN_GAP;
  const gridTop = MARGIN.top + HEADER_HEIGHT + ROOM_HEADER_HEIGHT;
  const availableHeight = height - MARGIN.bottom - FOOTER_HEIGHT - gridTop;

  const { style, placed, tops } = fitRows(grid, columnWidth, availableHeight, measure);
  const columnX = (index: number) => gridLeft + index * (columnWidth + COLUMN_GAP);

  const cards = placed
    .filter((cell) => cell.columnIndex !== -1)
    .sort((a, b) => a.rowIndex - b.rowIndex || a.columnIndex - b.columnIndex)
    .map((cell) => {
      const x = columnX(cell.columnIndex);
      const y = gridTop + cell.top;
      const textX = x + style.border + style.padding;
      let cursor = y + style.padding;

      const place = (lines: string[], size: number) =>
        lines.map((text) => {
          const line = { text, x: textX, y: baseline(cursor, size, style.lineHeight) };
          cursor += size * style.lineHeight;
          return line;
        });

      const title = place(cell.card.title, style.titleSize);
      const level = place(cell.card.level, style.metaSize);
      const category = place(cell.card.category, style.metaSize);

      const speakersTop = y + cell.height - style.padding - (cell.card.speakersHeight - style.speakerMargin);
      const speakers = cell.card.speakers.items.map((item) => {
        const itemTop = speakersTop + item.rowTop + (item.rowHeight - item.height) / 2;
        const textTop = itemTop + (item.height - item.textHeight) / 2;
        const lineHeight = style.speakerFontSize * style.lineHeight;
        return {
          speaker: item.speaker,
          x: textX + item.x,
          y: itemTop + (item.height - style.speakerSize) / 2,
          name: item.lines.map((text, index) => ({
            text,
            x: textX + item.x + style.speakerSize + style.speakerNameGap,
            y: baseline(textTop + index * lineHeight, style.speakerFontSize, style.lineHeight),
          })),
        };
      });

      return {
        id: cell.talk.id,
        x,
        y,
        width: columnWidth,
        height: cell.height,
        color: cell.talk.category?.color || 'black',
        title,
        level,
        category,
        speakers,
      };
    });

  return {
    scale: style.k,
    border: style.border,
    speakerSize: style.speakerSize,
    fontSizes: {
      title: style.titleSize,
      meta: style.metaSize,
      speaker: style.speakerFontSize,
      room: style.roomSize,
      time: style.timeSize,
    },
    rooms: grid.rooms.map((room, index) => ({
      id: room.id,
      name: room.name,
      x: columnX(index) + columnWidth / 2,
      y: gridTop - style.roomSize * 0.5,
    })),
    times: grid.rows
      .map((row, index) => ({ row, index }))
      .filter(({ row }) => row.hasStart)
      .map(({ row, index }) => ({
        time: row.time.slice(0, 5),
        x: MARGIN.left + TIME_COLUMN_WIDTH,
        y: baseline(gridTop + (tops[index] ?? 0), style.timeSize, 1.4),
      })),
    cards,
  };
}

export const SCHEDULE_SVG_MARGIN = MARGIN;
export const SCHEDULE_SVG_HEADER_HEIGHT = HEADER_HEIGHT;
