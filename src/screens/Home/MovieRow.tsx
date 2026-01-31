import React, { useEffect } from "react";
import NetflixSlider from "./NetflixSlider";
import useGenre from "../../hooks/useGenre";
import MovieRowSkeleton from "../../components/MovieRowSkeleton";

const MovieRow = ({ setShowHeroModal, title, genre }) => {
  const { data: movieRow, error, isLoading } = useGenre(genre);

  return (
    <div className="flex items-center flex-col w-full max-md:w-[95%] mb-12">
      <div className="w-[90%] max-md:w-full pb-2">
        <h3 className="text-white text-2xl">{title}</h3>
      </div>
      {isLoading ? (
        <MovieRowSkeleton />
      ) : (
        <NetflixSlider
          setShowHeroModal={setShowHeroModal}
          movieRow={movieRow}
        />
      )}
    </div>
  );
};

export default React.memo(MovieRow);
