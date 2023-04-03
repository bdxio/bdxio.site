// @ts-nocheck
import { useRuntimeConfig, useFetch, ref, createError } from "#imports";

export default async function useAPI(endpoint, options) {
  const config = useRuntimeConfig();

  if (!config.public.API_TOKEN) {
    console.error("a api token env variable is missing");
    return;
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
