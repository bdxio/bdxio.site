import type { Talk } from "./Talk";
import type { Slot } from "./Slot";

export type Room = {
  id: number;
  name: string;
  naturalId?: string;
  iframeId?: string;
  slots: Slot[];
  talks: Talk[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
