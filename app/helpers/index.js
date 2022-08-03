export function formatStrapiData(data = null) {
    if (!data) {
    return [];
    }
  
  return data.map(({ id, attributes }) => ({ id, ...attributes  }));
}

export function shuffleArray(array) {
  if (!array || !array.length) {
    return [];
  }
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}