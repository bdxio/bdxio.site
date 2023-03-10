import { useRuntimeConfig } from "#imports";

export default function useConfig() {
  return useRuntimeConfig().public;
}
