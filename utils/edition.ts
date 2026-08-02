import { LOCATION } from '~/services/constants';
import type { Edition } from '~/types';

export const getEditionLocation = (edition: Edition) =>
  edition.year === '2026' ? LOCATION.ENSEIRB : LOCATION.PALAIS_DES_CONGRES;
