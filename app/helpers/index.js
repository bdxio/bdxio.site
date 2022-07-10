export function formatStrapiData(data = null) {
    if (!data) {
    return [];
  }
  return data.map(({ id, attributes }) => ({ id, ...attributes  }));
}