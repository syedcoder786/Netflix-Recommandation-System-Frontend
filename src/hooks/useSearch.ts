import { SEARCH_ENDPOINT } from "@/constants/endpoint";
import ApiClient from "@/services/apiClient";
import { useDebounce } from "use-debounce";
import type { Movie } from "@/entities/Movie";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Movie[]>(SEARCH_ENDPOINT);

const useSearch = (search) => {
  const [debouncedSearch] = useDebounce(search, 300);

  const queryParams = {
    q: debouncedSearch,
  };

  return useQuery<Movie[], Error>({
    queryKey: ["search", debouncedSearch],
    queryFn: ({ signal }) =>
      apiClient.getAll({
        params: queryParams,
        signal,
      }),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

export default useSearch;
