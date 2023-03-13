// @ts-nocheck
export function shuffleArray(array) {
  return (
    array
      ?.map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value) || []
  );
}
