// @ts-nocheck
export function formatStrapiData(data = null) {
  return data?.map(({ id, attributes }) => ({ id, ...attributes })) || [];
}

export function shuffleArray(array) {
  return (
    array
      ?.map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value) || []
  );
}
