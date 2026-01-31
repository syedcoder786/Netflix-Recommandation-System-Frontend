export function getRatingOutOf10(
  popularity: number,
  voteAverage: number,
  voteCount: number,
) {
  const voteWeight = Math.min(1, Math.log10(voteCount + 1) / 4); // 0 → 1
  const popularityBoost = Math.min(1, popularity / 500); // cap boost

  const rating =
    voteAverage * 0.7 + // quality
    voteWeight * 2 + // trust
    popularityBoost * 1; // trend

  return Math.min(10, Number(rating.toFixed(1)));
}
