export const formatDate = (date: string): string => {
  const _date = new Date(date);
  const formattedDate = _date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};
