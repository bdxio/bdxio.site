// @ts-nocheck
import { useRuntimeConfig, useFetch, ref, createError } from "#imports";

export default async function useAPI(endpoint, options) {
  const config = useRuntimeConfig();
  const { data, error } = await useFetch(
    `${config.public.API_URL}${endpoint}`,
    {
      headers: { Authorization: `Bearer ${config.public.API_TOKEN}` },
      ...options,
    }
  );

  if (error.value?.status === 404) {
    throw createError({ statusCode: 404, statusMessage: "Page not found" });
  }

  return {
    data: ref(deep(data.value, flat)),
    meta: ref(data.value?.meta),
  };
}

function deep(data, fn) {
  const payload = flat(data);
  if (!payload) return payload;
  if (Array.isArray(payload)) {
    return payload.map((item) => deep(item, fn));
  }
  if (typeof payload === "object") {
    return Object.keys(payload).reduce((acc, key) => {
      acc[key] = deep(payload[key], fn);
      return acc;
    }, {});
  }
  return payload;
}

function flat(data) {
  const payload = data?.data || data;
  if (!payload) return null;
  if (typeof payload === "object" && !Array.isArray(payload)) {
    const { id, attributes } = payload;
    return attributes ? { id, ...attributes } : payload;
  }
  return payload;
}
