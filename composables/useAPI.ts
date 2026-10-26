// @ts-nocheck
import { createError, ref, useFetch, useRuntimeConfig } from '#imports';
import { getTalksPublicationParams } from '~/services/featureFlags';
import { normalizeTalkTitles } from '~/utils/normalizeTalkTitle';

export default async function useAPI(endpoint, options = {}) {
  const config = useRuntimeConfig();

  if (!config.public.API_TOKEN) {
    console.error('Missing API_TOKEN environment variable');

    return {
      data: ref(null),
      meta: ref(null),
    };
  }

  if (!config.public.API_URL) {
    console.error('Missing API_URL environment variable');

    return {
      data: ref(null),
      meta: ref(null),
    };
  }

  const params = endpoint.startsWith('/talks') ? { ...getTalksPublicationParams(), ...options.params } : options.params;

  const { data, error } = await useFetch(`${config.public.API_URL}${endpoint}`, {
    headers: { Authorization: `Bearer ${config.public.API_TOKEN}` },
    ...options,
    params,
  });

  if (error.value?.status === 404) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' });
  }

  const result = data.value?.data || data.value;

  return {
    data: ref(endpoint.startsWith('/talks') && result ? normalizeTalkTitles(result) : result),
    meta: ref(data.value?.meta || null),
  };
}
