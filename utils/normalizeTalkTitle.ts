const NO_BREAK_SPACE = String.fromCharCode(0xa0);

// French typography: the space before ":", "!" and "?" must not wrap onto the next line.
export function normalizeTalkTitle(title: string) {
  return title.trim().replace(/\s+([:!?])/g, `${NO_BREAK_SPACE}$1`);
}

export function normalizeTalkTitles<T extends { title?: string } | { title?: string }[]>(talks: T): T {
  const normalize = <Talk extends { title?: string }>(talk: Talk): Talk =>
    talk?.title ? { ...talk, title: normalizeTalkTitle(talk.title) } : talk;

  return (Array.isArray(talks) ? talks.map(normalize) : normalize(talks)) as T;
}
