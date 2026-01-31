import { useQuery } from "@tanstack/react-query";
import { GENRE_ENDPOINT } from "../constants/endpoint";
import type { Movie } from "@/entities/Movie";
import ApiClient from "@/services/apiClient";

const apiClient = new ApiClient<Movie[]>(GENRE_ENDPOINT);

const useGenre = (genre) => {
  const queryParams = {
    genre: genre,
  };
  return useQuery<Movie[], Error>({
    queryKey: ["genre", queryParams],
    queryFn: ({ signal }) =>
      apiClient.getAll({
        params: queryParams,
        signal,
      }),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    enabled: !!queryParams.genre, // optional: only fetch if genre exists
  });
};

export default useGenre;
