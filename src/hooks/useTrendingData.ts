import { useQuery } from "@tanstack/react-query";
import ApiClient from "@/services/apiClient";
import { TRENDING_ENDPOINT } from "../constants/endpoint";
import type { Movie } from "@/entities/Movie";

const apiClient = new ApiClient<Movie[]>(TRENDING_ENDPOINT);

const useTrendingData = () => {
  return useQuery<Movie[], Error>({
    queryKey: ["trending"],
    queryFn: ({ signal }) => apiClient.getAll({ signal }),
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export default useTrendingData;
