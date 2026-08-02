type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;

export type HEX = `#${string}`;
export type Color = RGB | RGBA | HEX | string;
