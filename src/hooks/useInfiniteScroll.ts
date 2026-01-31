import { useEffect, useRef } from "react";

export const useInfiniteScroll = (
  fetchNextPage: () => void,
  hasNextPage?: boolean,
  isFetching?: boolean,
) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage || isFetching) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      },
      { rootMargin: "200px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetching]);

  return ref;
};
