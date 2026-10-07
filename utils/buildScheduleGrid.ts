import type { Room, Talk } from '~/types';

const BREAK_MIN_DURATION = 60;

function toMinutes(time: string) {
  const [hours = 0, minutes = 0] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

export function buildScheduleGrid(dayTalks: Talk[]) {
  const rooms = sortRooms(
    dayTalks.reduce((result, talk) => {
      if (talk.room && !result.some((room) => room.id === talk.room?.id)) {
        result.push(talk.room);
      }
      return result;
    }, [] as Room[])
  );

  const boundaries = [
    ...new Set(dayTalks.filter((talk) => talk.slot).flatMap((talk) => [talk.slot!.startSlot, talk.slot!.endSlot])),
  ].sort();

  const startTimes = new Set(dayTalks.filter((talk) => talk.slot).map((talk) => talk.slot!.startSlot));

  const cells = dayTalks
    .filter((talk) => talk.slot && talk.room)
    .map((talk) => {
      const rowIndex = boundaries.indexOf(talk.slot!.startSlot);
      const endIndex = boundaries.indexOf(talk.slot!.endSlot);
      const rowSpan = endIndex > rowIndex ? endIndex - rowIndex : 1;
      const columnIndex = rooms.findIndex((room) => room.id === talk.room?.id);

      return { talk, rowIndex, rowSpan, columnIndex };
    })
    .filter((cell) => cell.columnIndex !== -1)
    .sort((a, b) => a.rowIndex - b.rowIndex || a.columnIndex - b.columnIndex);

  const rows = boundaries.slice(0, -1).map((time, index) => {
    const isCovered = cells.some((cell) => index >= cell.rowIndex && index < cell.rowIndex + cell.rowSpan);
    const duration = toMinutes(boundaries[index + 1] ?? time) - toMinutes(time);

    return { time, hasStart: startTimes.has(time), isBreak: !isCovered && duration >= BREAK_MIN_DURATION };
  });

  return { rooms, rows, cells };
}
