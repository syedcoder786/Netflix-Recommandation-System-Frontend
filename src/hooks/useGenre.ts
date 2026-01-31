import { useQuery } from "@tanstack/react-query";
import ApiClient, { type FetchDataResponse } from "@/services/apiClient";
import type { Movie } from "@/entities/Game";
import { GENRE_ENDPOINT } from "../constants/endpoint";

const apiClient = new ApiClient<Movie>(GENRE_ENDPOINT);

const useGenre = (genre) => {
  const queryParams = {
    genre: genre,
  };
  return useQuery<FetchDataResponse<Movie>, Error>({
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
