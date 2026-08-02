import type { Room } from "./Room";
import type { Talk } from "./Talk";
import type { Edition } from "./Edition";

export type Slot = {
  id: number;
  startSlot: string;
  endSlot: string;
  name: string;
  naturalId?: string;
  rooms: Room[];
  talks: Talk[];
  editions: Edition[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
