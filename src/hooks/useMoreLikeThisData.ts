import { MOVIES_LIKE_THIS_ENDPOINT } from "@/constants/endpoint";
import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "@/services/apiClient";
import type { Movie } from "@/entities/Movie";

type MoreLikeThisResponse = {
  page: number;
  limit: number;
  total: number;
  data: Movie[];
};

const useMoreLikeThisData = (movieId: number, limit = 12) => {
  const apiClient = new ApiClient<Movie>(`/moviesLikeThis/${movieId}`);

  return useInfiniteQuery<MoreLikeThisResponse, Error>({
    queryKey: ["movies", "more-like-this", movieId, limit],

    queryFn: ({ pageParam = 1, signal }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
          limit,
        },
        signal,
      }),

    getNextPageParam: (lastPage) => {
      const loaded = lastPage.page * lastPage.limit;
      return loaded < lastPage.total ? lastPage.page + 1 : undefined;
    },

    initialPageParam: 1,
    staleTime: 1000 * 60 * 60 * 24,
  });
};

export default useMoreLikeThisData;
