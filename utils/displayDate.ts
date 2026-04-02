export const displayDate = (date: string, duration: number = 1) => {
  const startDate = new Date(date);
  if (duration <= 1) {
    return startDate.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  }

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + duration - 1);

  const startDay = startDate.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    day: '2-digit',
  });
  const endDay = endDate.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    day: '2-digit',
  });
  const month = startDate.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    month: 'long',
  });
  const year = startDate.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
  });

  return `${startDay} & ${endDay} ${month} ${year}`;
};
