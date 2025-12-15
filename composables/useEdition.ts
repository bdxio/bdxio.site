import { EDITION } from "~/services/constants";
import type { Edition } from "~/services/constants";

/**
 * Get the current edition year from the route.
 * Falls back to the default EDITION constant if no year is in the route.
 */
export function useEdition(): Edition {
  const route = useRoute();
  const year = route.params.year as string | undefined;

  // If year is in route params and is a valid edition, use it
  if (year && ["2022", "2023", "2024", "2025"].includes(year)) {
    return year as Edition;
  }

  // Otherwise, use the default edition
  return EDITION;
}
