import { FiPlus } from "react-icons/fi";
import { getPosterUrl } from "../../services/imageUrl";
import { getRatingOutOf10 } from "../../utlis/getRating";
import { getYearFromDate } from "../../utlis/getYearFromDate";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import MoreLikeThisSkeleton from "../../components/MoreLikeThisSkeleton";
import { useLayoutEffect, useRef } from "react";

const MoreLikeThis = ({
  pages,
  isLoading,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  setShowHeroModal,
}) => {
  const loadMoreRef = useInfiniteScroll(
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  );

  return (
    <div className="px-8 pb-10">
      <h2 className="text-xl font-semibold mb-4">More Like This</h2>

      <div className="grid grid-cols-5 gap-x-2 gap-y-6 max-md:grid-cols-2">
        {pages?.map((page) =>
          page?.data?.map((m) => (
            <div
              key={m.id}
              className="cursor-pointer max-md:h-full rounded-md max-md:w-full overflow-hidden hover:scale-[1.03] transition"
              onClick={() => setShowHeroModal(m)}
            >
              <div className="relative">
                <img
                  src={getPosterUrl(m.poster_path)}
                  alt={m.title}
                  className="w-[210px] h-[260px] max-md:h-[200px]"
                />
                <span className="absolute text-3xl top-2 left-2 text-red-600 font-bold">
                  N
                </span>
              </div>
            </div>
          )),
        )}

        {/* Skeletons while loading */}
        {(isFetchingNextPage || isLoading) &&
          Array.from({ length: 10 }).map((_, i) => (
            <MoreLikeThisSkeleton key={i} />
          ))}
      </div>

      {/* Intersection Observer Target */}
      <div ref={loadMoreRef} className="h-1" />
    </div>
  );
};

export default MoreLikeThis;
