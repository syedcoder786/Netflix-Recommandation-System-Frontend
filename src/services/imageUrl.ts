const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const getPosterUrl = (
  path: string | null,
  size: "w342" | "w500" | "original" = "w500",
) => {
  if (!path) return "/src/assets/images/Logonetflix.png"; // fallback image
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
};

export const getBackdropUrl = (
  path: string | null,
  size: "w780" | "original" = "w780",
) => {
  if (!path) return "/src/assets/images/Logonetflix.png"; // fallback image
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
};
