export type RGB = `rgb(${number}, ${number}, ${number})`;

export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;

export type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX | string;

export interface IconProps {
  color?: Color;
  width?: number;
  height?: number;
}

export type TalkLevel = "Débutant" | "Intermédiaire" | "Avancé";

export type TalkFormatName = "Quickie" | "Conférence" | "Hands on lab";

export type TalkDuration = "15min" | "45min" | "100min";

export type RoomName = "Amphi A" | "Amphi B" | "Amphi C" | "Salle 1" | "Salle 2" | "Salle 3"

export type SlotName = "Conférence" | "Pause";

export type TalkCategoryName = "Frontend" | "Backend" | "Big Data & I.A." | "Design & UX" | "Cloud & DevSecOps" | "Méthodo & Architecture" | "Hors-piste";

export interface TalkCategory {
  id: number;
  name: TalkCategoryName;
  conferenceHallId: string;
  description: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
  color: HEX;
}

export interface TalkFormat {
  id: number;
  name: TalkFormatName;
  description: string;
  duration: TalkDuration;
  conferenceHallId: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Talk {
  id: number;
  title: string;
  level: TalkLevel;
  category: TalkCategory;
  format: TalkFormat;
  speakers: Speaker[];
  language: string;
  openfeedbackUrl: string;
  youtubeUrl: string;
  abstract: string;
}

export interface Speaker {
  id: number;
  name: string;
  bio: string;
  address: string;
  photoUrl: string;
  conferenceHallId: string;
  github?: string;
  twitter?: string;
  company?: string;
  linkedin?: string;
  website?: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Slot {
  id: number;
  startSlot: string;
  endSlot: string;
  name: SlotName;
  space: null; // @TODO : Remove it ?
  naturalId: string;
  createdAt: string;
  puslishedAt: string;
  updatedAt: string;
}

export interface Room {
  id: number;
  name: RoomName;
  iframeId: string;
  naturalId: string;
  createdAt: string;
  puslishedAt: string;
  updatedAt: string;
}