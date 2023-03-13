// @ts-nocheck
import { useRuntimeConfig, useFetch } from "#imports";

export default function useAPI(endpoint, options) {
  const config = useRuntimeConfig();
  return useFetch(`${config.public.API_URL}${endpoint}`, {
    headers: { Authorization: `Bearer ${config.API_TOKEN}` },
    ...options,
  });
}
