import { EDITION, PREVIOUS_EDITIONS } from "~/services/constants";
import type { Edition } from "~/services/constants";

/**
 * Get the current edition year from the route.
 * Falls back to the default EDITION constant if no year is in the route.
 */
export function useEdition(): Edition {
  const route = useRoute("year");
  const year = route.params.year as string | undefined;

  // If year is in route params and is a valid edition, use it
  if (year && PREVIOUS_EDITIONS.includes(year)) {
    return year as Edition;
  }

  // Otherwise, use the default edition
  return EDITION;
}
