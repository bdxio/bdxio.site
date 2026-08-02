const GRAND_AMPHI = 'Grand Amphi';

export function compareRoomNames(a: string, b: string) {
  if (a === GRAND_AMPHI) return -1;
  if (b === GRAND_AMPHI) return 1;
  return a.localeCompare(b);
}

export function sortRooms<T extends { name: string }>(rooms: T[]) {
  return [...rooms].sort((a, b) => compareRoomNames(a.name, b.name));
}
