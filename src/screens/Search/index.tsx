import { useOutletContext } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { createPortal } from "react-dom";
import NetflixCard from "../Home/NetflixCard";
import useSearch from "../../hooks/useSearch";
import { getPosterUrl } from "../../services/imageUrl";
import SearchRowSkeleton from "../../components/SearchRowSkeleton";
import { useHoverPreview } from "../../hooks/useHoverPreview";

const index = () => {
  const { open, query, setQuery, setOpen, showHeroModal, setShowHeroModal } =
    useOutletContext<{
      open: boolean;
      setOpen: (v: boolean) => void;
      query: string;
      setQuery: (v: string) => void;
      showHeroModal: boolean;
      setShowHeroModal: (v: boolean) => void;
    }>();

  const { data: movieRecommandations, isLoading, error } = useSearch(query);

  const cardDimensions = { width: 360, height: 350 };

  const { hovered, pos, isHoveringRef, handleEnter, handleLeave } =
    useHoverPreview(cardDimensions);

  return (
    <div>
      <Navbar open={open} setOpen={setOpen} query={query} setQuery={setQuery} />

      <div className="relative mt-15 mb-20 flex flex-col items-center overflow-hidden img-container w-full max-md:w-full">
        <div className="flex flex-col items-center overflow-hidden img-container w-full max-md:w-full">
          <div className="grid grid-cols-7 max-md:grid-cols-2 justify-items-center gap-x-2 gap-y-14 w-[92%] max-md:w-[95%]">
            {isLoading ? (
              <SearchRowSkeleton count={24} />
            ) : (
              movieRecommandations?.map((movie, index) => (
                <img
                  key={index}
                  src={getPosterUrl(movie?.poster_path)}
                  alt={`Slide ${index}`}
                  className="h-[250px] w-[200px] max-md:w-full rounded-[8px] cursor-pointer"
                  onMouseEnter={(e) => handleEnter(e, movie)}
                  onClick={() => setShowHeroModal(hovered)}
                  onMouseLeave={handleLeave}
                />
              ))
            )}
          </div>

          {hovered &&
            createPortal(
              <div
                className="absolute z-[1] bg-black/90 rounded flex flex-col justify-center gap-2
        transition-all duration-500 ease-out
        opacity-0 scale-95 translate-y-2
        animate-[popup_0.3s_ease-out_forwards]"
                style={{ top: pos.y, left: pos.x }}
                onMouseEnter={() => (isHoveringRef.current = true)}
                onMouseLeave={handleLeave}
                onClick={() => setShowHeroModal(hovered)}
              >
                <NetflixCard movie={hovered} cardDimensions={cardDimensions} />
              </div>,
              document.body,
            )}
        </div>
      </div>
    </div>
  );
};

export default index;
