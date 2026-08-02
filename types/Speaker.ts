import type { Talk } from "./Talk";

export type Speaker = {
  id: number;
  name: string;
  bio?: string;
  address?: string;
  photoUrl?: string;
  conferenceHallId?: string;
  github?: string;
  twitter?: string;
  company?: string;
  linkedin?: string;
  website?: string;
  talks: Talk[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
