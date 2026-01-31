export const calculateMatch = (
  popularity: number,
  voteAverage: number,
  voteCount: number,
) => {
  // normalize values
  const popularityScore = Math.min(popularity / 100, 1); // popularity usually spikes
  const ratingScore = voteAverage / 10; // out of 10
  const voteCountScore = Math.min(voteCount / 5000, 1); // cap influence

  // weighted score (tweakable)
  const score =
    popularityScore * 0.4 + ratingScore * 0.4 + voteCountScore * 0.2;

  return Math.round(score * 100);
};
