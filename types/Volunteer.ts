import type { Media } from "./Media";

export type Volunteer = {
  id: number;
  firstname: string;
  lastname: string;
  jobLabel: string;
  active: boolean;
  jobCompanyName?: string;
  jobCompanyUrl?: string;
  profilePicture?: Media;
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
