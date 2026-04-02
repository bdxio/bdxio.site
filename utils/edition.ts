import { LOCATION } from '~/services/constants';
import type { Edition } from '@bdxio/bdxio.types';

export const getEditionDuration = (edition: Edition) => (edition.year === '2026' ? 2 : 1);

export const getEditionLocation = (edition: Edition) =>
  edition.year === '2026' ? LOCATION.ENSEIRB : LOCATION.PALAIS_DES_CONGRES;
