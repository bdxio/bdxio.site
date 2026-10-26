import type { Talk } from '~/types';
import { getTalksPublicationParams } from '../../../services/featureFlags';
import { isTalkOnDay } from '../../../utils/isTalkOnDay';
import { normalizeTalkTitles } from '../../../utils/normalizeTalkTitle';

const FILE_NAME = /^bdxio-(\d{4})-(\d+)\.pdf$/;
const TEMPLATE_NAME = (year: string) => `programme-bdxio-${year}-template.pdf`;
const TITLE_FONT = 'merriweather-latin-700-normal.woff';

function toArrayBuffer(buffer: Buffer) {
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer;
}

export default defineEventHandler(async (event) => {
  const match = FILE_NAME.exec(getRouterParam(event, 'file') ?? '');
  if (!match) throw createError({ statusCode: 404 });

  const [, year = '', dayParam = ''] = match;
  const day = Number(dayParam);
  const { API_URL, API_TOKEN } = useRuntimeConfig(event).public;

  const template = await useStorage('assets:server').getItemRaw<Buffer>(TEMPLATE_NAME(year));
  const titleFont = await useStorage('assets:fonts').getItemRaw<Buffer>(TITLE_FONT);
  if (!template || !titleFont) throw createError({ statusCode: 404, statusMessage: `No PDF template for ${year}` });

  const response = await $fetch<{ data: Talk[] }>(`${API_URL}/talks`, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
    query: {
      populate: '*',
      'pagination[limit]': 100,
      'filters[edition][year][$eq]': year,
      'filters[backup][$eq]': false,
      ...getTalksPublicationParams(),
    },
  });

  const talks = normalizeTalkTitles(response.data).filter((talk) => isTalkOnDay(talk, day));
  if (!talks.length) throw createError({ statusCode: 404, statusMessage: `No talks for day ${day}` });

  const pdf = await generateSchedulePdf({
    template: toArrayBuffer(template),
    titleFont: toArrayBuffer(titleFont),
    talks,
    photos: await fetchSpeakerPhotos(talks),
  });

  setHeader(event, 'content-type', 'application/pdf');
  return Buffer.from(pdf);
});
