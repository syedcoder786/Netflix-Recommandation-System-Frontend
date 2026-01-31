import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import NetflixCard from "./NetflixCard";
import { createPortal } from "react-dom";
import { getPosterUrl } from "../../services/imageUrl";
import { useHoverPreview } from "../../hooks/useHoverPreview";

const NetflixSlider = ({ setShowHeroModal, movieRow }) => {
  const sliderRef = useRef(null);

  const [showRightArrow, setShowRightArrow] = useState(false);

  const cardDimensions = { width: 360, height: 350 };

  const { hovered, pos, isHoveringRef, handleEnter, handleLeave } =
    useHoverPreview(cardDimensions);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const { scrollLeft, clientWidth } = sliderRef.current;

    const OFFSET = 200; // tweak: 60–120 depending on card width/gap
    const scrollAmount = clientWidth - OFFSET;

    sliderRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative flex flex-col items-end overflow-hidden img-container w-full max-md:w-full"
      onMouseLeave={() => setShowRightArrow(false)}
    >
      {/* Slider */}
      <div
        ref={sliderRef}
        className="slide flex overflow-x-auto gap-4 scroll-smooth hide-scrollbar w-[95%] rounded pr-10 max-md:w-full"
        onMouseEnter={() => setShowRightArrow(true)}
      >
        {movieRow?.map((movieRow, index) => (
          <img
            key={index}
            src={getPosterUrl(movieRow?.poster_path)}
            alt={`Slide ${index}`}
            className="flex-shrink-0 rounded"
            onMouseEnter={(e) => handleEnter(e, movieRow)}
            onClick={() => setShowHeroModal(movieRow)}
            onMouseLeave={handleLeave}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute max-md:left-0 left-8 h-full top-1/2 -translate-y-1/2 text-white p-2 z-2 cursor-pointer"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className={`
    absolute right-0 top-1/2 -translate-y-1/2
    h-full bg-black/50 hover:bg-black/70
    text-white p-2 rounded cursor-pointer
    z-20
    items-center justify-center
    ${showRightArrow ? "hidden md:flex" : "hidden md:hidden"}
    max-md:flex
  `}
      >
        <FiChevronRight size={24} />
      </button>

      {hovered &&
        createPortal(
          <div
            className="absolute z-[20] bg-black/90 rounded flex flex-col justify-center gap-2
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
  );
};

export default NetflixSlider;
