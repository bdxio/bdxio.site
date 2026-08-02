import type { Category, Talk } from '~/types';

export function getTalksCategories(talks: Talk[]) {
  const categories = talks.reduce((result, talk) => {
    if (talk.category && !result.some((category) => category.id === talk.category?.id)) {
      result.push(talk.category);
    }
    return result;
  }, [] as Category[]);

  return categories.sort((a, b) => a.name.localeCompare(b.name));
}
