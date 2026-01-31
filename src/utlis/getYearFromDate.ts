export const getYearFromDate = (date?: string | null): string => {
  if (!date) return "—";
  return new Date(date).getFullYear().toString();
};
