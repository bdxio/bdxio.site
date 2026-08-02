import type { Talk } from '~/types';

const weekdayFormatter = new Intl.DateTimeFormat('fr-FR', { weekday: 'long' });

export function getTalkScheduleInfo(editionStartDate: string, talk: Talk) {
  if (!talk.day || !talk.slot) {
    return undefined;
  }

  const weekday = weekdayFormatter.format(getEditionDayDate(editionStartDate, talk.day));
  const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
  const time = `${capitalizedWeekday} ${talk.slot.startSlot.slice(0, 5)}`;

  return talk.room ? `${time}, ${talk.room.name}` : time;
}
