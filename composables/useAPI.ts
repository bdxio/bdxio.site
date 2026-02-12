// @ts-nocheck
import { createError, ref, useFetch, useRuntimeConfig } from "#imports";

export default async function useAPI(endpoint, options = {}) {
  const config = useRuntimeConfig();

  if (!config.public.API_TOKEN) {
    console.error("Missing API_TOKEN environment variable");

    return {
      data: ref(null),
      meta: ref(null),
    };
  }

  if (!config.public.API_URL) {
    console.error("Missing API_URL environment variable");

    return {
      data: ref(null),
      meta: ref(null),
    };
  }

  const { data, error } = await useFetch(
    `${config.public.API_URL}${endpoint}`,
    {
      headers: { Authorization: `Bearer ${config.public.API_TOKEN}` },
      ...options,
    },
  );

  if (error.value?.status === 404) {
    throw createError({ statusCode: 404, statusMessage: "Page not found" });
  }

  return {
    data: ref(data.value?.data || data.value),
    meta: ref(data.value?.meta || null),
  };
}
