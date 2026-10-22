import type { Talk } from "./Talk";

type FormatName =
  | "Quickie"
  | "Conférence"
  | "Hands on lab"
  | "Université"
  | "Table ronde"
  | "Keynote"
  | "Keynote de fermeture"
  | "Keynote d'ouverture";

export type Format = {
  id: number;
  conferenceHallId?: string;
  name: FormatName;
  description?: string;
  duration: string;
  talks: Talk[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
