export const getDuration = (runtime?: number | null): string => {
  if (!runtime || runtime <= 0) return "—";

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (hours === 0) return `${minutes}m`;
  return `${hours}h ${minutes}m`;
};
