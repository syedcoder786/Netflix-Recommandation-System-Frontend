import { useQuery } from "@tanstack/react-query";
import ApiClient, { type FetchDataResponse } from "@/services/apiClient";
import type { Movie } from "@/entities/Game";
import { TRENDING_ENDPOINT } from "../constants/endpoint";

const apiClient = new ApiClient<Movie>(TRENDING_ENDPOINT);

const useTrendingData = () => {
  return useQuery<FetchDataResponse<Movie>, Error>({
    queryKey: ["trending"],
    queryFn: ({ signal }) => apiClient.getAll({ signal }),
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export default useTrendingData;
