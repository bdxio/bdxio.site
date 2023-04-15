import type { HEX } from "./colors";

export type Category = {
  id: number;
  name: string;
  conferenceHallId?: string;
  description?: string;
  color: HEX;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};

export type Edition = {
  id: number;
  date: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};

export type FAQQuestion = {
  id: number;
  theme?: string;
  title: string;
  answer: string;
  faq_target?: FAQTarget;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};

export type FAQTarget = {
  id: number;
  target?: "speakers" | "sponsors" | "participants";
  description?: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};

export type Format = {
  id: number;
  conferenceHallId?: string;
  name?: string;
  description?: string;
  duration: string;
  slots: Slot[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};

export type Media = {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    small: MediaFormat;
    medium: MediaFormat;
    thumbnail: MediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
};

type MediaFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type Offer = {
  id: number;
  label: string;
  description: string;
  price: string;
  full: boolean;
  sponsors: Sponsor[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};

export type Room = {
  id: number;
  name: string;
  naturalId?: string;
  iframeId?: string;
  slots: Slot[];
  talks: Talk[];
  createdAt: string;
  puslishedAt: string;
  updatedAt: string;
};

export type Slot = {
  id: number;
  startSlot: string;
  endSlot: string;
  name?: string;
  naturalId?: string;
  space?: string;
  talks: Talk[];
  rooms: Room[];
  format?: Format;
  createdAt: string;
  puslishedAt: string;
  updatedAt: string;
};

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
  talk?: Talk;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Sponsor = {
  id: number;
  name: string;
  url?: string;
  logo: Media;
  offer?: Offer;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};

export type Talk = {
  id: number;
  conferenceHallId?: string;
  title?: string;
  level?: string;
  comments?: string;
  language?: string;
  creationDate?: string;
  state?: string;
  abstract?: string;
  backup: boolean;
  openfeedbackUrl?: string;
  youtubeUrl?: string;
  category?: Category;
  slot?: Slot;
  room?: Room;
  speakers: Speaker[];
  format?: Format;
  edition?: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};

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

export type Schedule = ScheduleItem[];

export type ScheduleItem = {
  slot: string;
  formattedSlot: string;
  name: string;
  talks: Talk[];
  space?: boolean;
}