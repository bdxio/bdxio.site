import type { Talk } from "./Talk";
import type { Slot } from "./Slot";
import type { Offer } from "./Offer";

export type Edition = {
  id: number;
  date: string;
  year: string;
  talks: Talk[];
  slots: Slot[];
  offers: Offer[];
  duration?: number;
  youtubePlaylistUrl?: string;
  picturesGalleryUrl?: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
