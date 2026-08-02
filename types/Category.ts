import type { HEX } from "./Color";
import type { Talk } from "./Talk";

type CategoryName =
  | "Design & UX"
  | "Cloud & DevSecOps"
  | "Backend"
  | "Frontend"
  | "Big Data & I.A."
  | "Méthodo & Architecture"
  | "Hors-piste";

export type Category = {
  id: number;
  name: CategoryName;
  conferenceHallId?: string;
  description?: string;
  color: HEX;
  talks: Talk[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
