import type { Edition, Talk } from '~/types';

const weekdayFormatter = new Intl.DateTimeFormat('fr-FR', { weekday: 'long' });
const listFormatter = new Intl.ListFormat('fr-FR', { style: 'long', type: 'conjunction' });

export function getTalkScheduleInfo(edition: Pick<Edition, 'date' | 'duration'>, talk: Talk) {
  if (!talk.slot) {
    return undefined;
  }

  const days = talk.day ? [talk.day] : Array.from({ length: edition.duration || 1 }, (_, index) => index + 1);
  const weekdays = listFormatter.format(days.map((day) => weekdayFormatter.format(getEditionDayDate(edition.date, day))));
  const capitalizedWeekdays = weekdays.charAt(0).toUpperCase() + weekdays.slice(1);
  const time = `${capitalizedWeekdays} ${talk.slot.startSlot.slice(0, 5)}`;

  return talk.room ? `${time}, ${talk.room.name}` : time;
}
