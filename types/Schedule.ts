import type { Room } from "./Room";
import type { Talk } from "./Talk";

export type ScheduleItem = {
  time: string;
  name: string;
  talks: Talk[];
  rooms: Room[];
};

export type Schedule = ScheduleItem[];
