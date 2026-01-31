import { FiPlay, FiPlus, FiThumbsUp, FiChevronDown } from "react-icons/fi";
import { getBackdropUrl } from "../../services/imageUrl";
import { calculateMatch } from "../../utlis/getMoviesMatch";

const NetflixCard = ({ cardDimensions, movie }) => {
  return (
    <div
      className={`w-[${cardDimensions.width}px] h-[${cardDimensions.height}px] cursor-pointer rounded-lg overflow-hidden bg-[#181818] text-white shadow-xl`}
    >
      {/* Poster */}
      <div className="relative">
        <img
          src={getBackdropUrl(movie?.backdrop_path)}
          alt="Movie Poster"
          className={`w-full h-[250px] object-cover`}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-300 transition">
              <FiPlay size={18} />
            </button>

            <button className="w-9 h-9 border border-gray-500 rounded-full flex items-center justify-center hover:border-white transition">
              <FiPlus size={18} />
            </button>

            <button className="w-9 h-9 border border-gray-500 rounded-full flex items-center justify-center hover:border-white transition">
              <FiThumbsUp size={18} />
            </button>
          </div>

          <button className="w-9 h-9 border border-gray-500 rounded-full flex items-center justify-center hover:border-white transition">
            <FiChevronDown size={18} />
          </button>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-500 font-semibold">
            {calculateMatch(
              movie.popularity,
              movie.vote_average,
              movie.vote_count,
            )}
            % Match
          </span>{" "}
          <span className="border border-gray-500 px-1 text-xs">U/A 18+</span>
          <span className="border border-gray-500 px-1 text-xs">
            {movie?.spoken_languages?.length}{" "}
            {movie?.spoken_languages?.length === 1 ? "language" : "languages"}
          </span>
          <span className="border border-gray-500 px-1 text-xs">HD</span>
        </div>

        {movie?.keywords?.length > 0 && (
          <p className="text-sm text-gray-300">
            {movie.keywords
              .slice(0, 12)
              .map((k) => k.charAt(0).toUpperCase() + k.slice(1))
              .join(" • ")}
          </p>
        )}
      </div>
    </div>
  );
};

export default NetflixCard;
