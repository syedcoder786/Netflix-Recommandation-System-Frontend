import { FiPlay, FiPlus, FiThumbsUp, FiX } from "react-icons/fi";
import MoreLikeThis from "./MoreLikeThis";
import { getBackdropUrl } from "../../services/imageUrl";
import { calculateMatch } from "../../utlis/getMoviesMatch";
import LanguageScroller from "./LanguageScroller";
import useMoreLikeThisData from "../../hooks/useMoreLikeThisData";
import { getDuration } from "../../utlis/getDuration";
import { getYearFromDate } from "../../utlis/getYearFromDate";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function NetflixHeroModal({ movie, onClose, setShowHeroModal }) {
  const {
    data: moviesLikeThis,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useMoreLikeThisData(movie?.id, 10);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalRef.current) return;

    requestAnimationFrame(() => {
      modalRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }, [movie?.id]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center
               animate-[fadeIn_400ms_ease-out_forwards]"
    >
      <div
        ref={modalRef}
        className="relative w-[85%] max-w-6xl bg-[#141414] rounded overflow-hidden
                 max-h-[90vh] overflow-y-auto hide-scrollbar
                 [overflow-anchor:none]
                 animate-[modalPop_580ms_cubic-bezier(0.2,0,0,1)_forwards]"
      >
        {/* Close Button */}
        <div className="sticky top-4 w-[98%] flex justify-end z-10">
          <button
            onClick={onClose}
            className="cursor-pointer bg-black/50 p-2 rounded-full
                   hover:bg-black transition"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Backdrop Header */}
        <div
          className="relative min-h-[65vh] -mt-10 bg-cover"
          style={{
            backgroundImage: `url(${getBackdropUrl(movie?.backdrop_path)})`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/40 to-transparent" />

          {/* Header Content */}
          <div className="absolute bottom-10 left-10 max-w-2xl">
            <h1 className="text-4xl font-bold mb-4 text-white">
              {movie?.title}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300 transition">
                <FiPlay /> Play
              </button>

              <button className="p-2 border border-gray-400 rounded-full hover:bg-gray-700 transition">
                <FiPlus size={18} />
              </button>

              <button className="p-2 border border-gray-400 rounded-full hover:bg-gray-700 transition">
                <FiThumbsUp size={18} />
              </button>
            </div>

            <div className="flex items-center gap-3 text-sm mb-3">
              <span className="text-green-400 font-semibold">
                {calculateMatch(
                  movie.popularity,
                  movie.vote_average,
                  movie.vote_count,
                )}
                % match
              </span>
              <span>{getYearFromDate(movie?.release_date)}</span>
              <span>{getDuration(movie?.runtime)}</span>
              <span className="border px-1 text-xs">HD</span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              {movie?.overview}
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="px-8 py-4 grid grid-cols-3 gap-6 text-sm text-gray-300">
          <div className="col-span-2">
            <p className="mb-2 font-bold">{movie?.tagline}</p>

            <p className="mb-2">
              <span className="text-gray-500">This movie is:</span>{" "}
              {movie?.keywords
                ?.map((k) => k.charAt(0).toUpperCase() + k.slice(1))
                .join(", ")}
            </p>

            <p>
              <span className="text-gray-500">Genres:</span>{" "}
              {movie?.genres.join(", ")}
            </p>
          </div>

          <div>
            <p className="mb-2">
              <span className="text-gray-500">Production Companies:</span>{" "}
              {movie?.production_companies.join(", ")}
            </p>

            <p>
              <span className="text-gray-500">Production Countries:</span>{" "}
              {movie?.production_countries.join(", ")}
            </p>
          </div>
        </div>

        <LanguageScroller languages={movie?.spoken_languages} />

        <MoreLikeThis
          pages={moviesLikeThis?.pages || []}
          isLoading={isLoading}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          setShowHeroModal={setShowHeroModal}
        />
      </div>
    </div>
  );
}
