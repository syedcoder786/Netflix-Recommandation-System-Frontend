export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  tagline: string;

  status: string;

  release_date: string; // ISO date string
  runtime: number;

  adult: boolean;

  popularity: number;
  vote_average: number;
  vote_count: number;

  budget: number;
  revenue: number;

  homepage: string | null;
  imdb_id: string | null;
  original_language: string;

  poster_path: string | null;
  backdrop_path: string | null;

  genres: string[];
  production_companies: string[];
  production_countries: string[];
  spoken_languages: string[];
  keywords: string[];
}
