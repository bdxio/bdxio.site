export function getEditionDayDate(editionStartDate: string, day: number) {
  const date = new Date(editionStartDate);
  date.setDate(date.getDate() + (day - 1));
  return date;
}
