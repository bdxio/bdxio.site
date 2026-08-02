import type { Media } from "./Media";
import type { Offer } from "./Offer";

export type Sponsor = {
  id: number;
  name: string;
  url?: string;
  logo: Media;
  offers: Offer[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
