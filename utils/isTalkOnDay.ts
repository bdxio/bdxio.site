import type { Talk } from '~/types';

// A talk without a day is played on every day of the edition.
export function isTalkOnDay(talk: Pick<Talk, 'day'>, day: number) {
  return !talk.day || talk.day === day;
}
