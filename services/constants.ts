export type Edition = "2022" | "2023" | "2024" | "2025" | "2026";

export const ASSOCIATION_NAME = "BDX I/O";

export const EDITION: Edition = "2026";
export const PREVIOUS_EDITION = (Number(EDITION) - 1).toString() as Edition;

export const STANDARD_TALK_TYPE = "standard";

export const OPENING_TALK_TYPE = "opening";

export const CLOSING_TALK_TYPE = "closing";

export const KEYNOTES = [];
