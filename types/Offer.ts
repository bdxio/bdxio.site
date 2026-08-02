import type { Edition } from "./Edition";
import type { Sponsor } from "./Sponsor";

export type Offer = {
  id: number;
  label: string;
  listLabel: string;
  description: string;
  price: string;
  full: boolean;
  edition: Edition;
  sponsors: Sponsor[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
