import { useEffect, useMemo, useRef, useState } from "react";
import { FiInfo } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import { useOutletContext } from "react-router-dom";
import MovieRow from "./MovieRow";
import { HOME_ROWS } from "../../constants/Home_Rows";
import useTrendingData from "../../hooks/useTrendingData";
import { getBackdropUrl } from "../../services/imageUrl";

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

  const { data: trendingMovies, isLoading, error } = useTrendingData();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!trendingMovies || trendingMovies.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % trendingMovies.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [trendingMovies]);

  const shuffledRows = useMemo(() => {
    return [...HOME_ROWS].sort(() => Math.random() - 0.5);
  }, []); // 🔥 runs ONLY once

  const ROWS_PER_PAGE = 4;

  const [page, setPage] = useState(1);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const paginatedRows = useMemo(() => {
    return shuffledRows.slice(0, page * ROWS_PER_PAGE);
  }, [shuffledRows, page]);

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        rootMargin: "200px", // preload before reaching bottom
      },
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, []);

  const currentMovie = trendingMovies?.[index] || null;

  return (
    <>
      <header
        style={{
          backgroundImage: `url(${getBackdropUrl(currentMovie?.backdrop_path)})`,
        }}
      >
        <Navbar
          open={open}
          setOpen={setOpen}
          query={query}
          setQuery={setQuery}
        />
        <div
          className="absolute z-2 mt-60 ml-35 w-150
                  flex flex-col text-white max-md:w-[90%] max-md:mx-5 max-md:mt-40"
        >
          <div className="flex flex-col gap-4 max-md:w-[80%]">
            <h3 className="text-4xl">{currentMovie?.title}</h3>
            <p>{currentMovie?.tagline}</p>

            <div className="flex gap-4">
              <button
                className="cursor-pointer w-30 h-11 bg-white text-black rounded font-bold hover:bg-gray-300 transition"
                onClick={() => setShowHeroModal(currentMovie)}
              >
                ▶ Play
              </button>

              <button
                className="flex justify-center gap-2 items-center cursor-pointer w-40 h-11
                   bg-gray-700/70 text-white rounded font-100
                   hover:bg-gray-600/80 transition"
                onClick={() => setShowHeroModal(currentMovie)}
              >
                <FiInfo size={25} />
                More Info
              </button>
            </div>
          </div>
        </div>
        <main className="relative overflow-y-auto mt-115 w-full z-1 flex items-center flex-col max-md:mt-100">
          {paginatedRows.map((row) => (
            <MovieRow
              key={row.name}
              title={row.name}
              genre={row.genre}
              setShowHeroModal={setShowHeroModal}
            />
          ))}

          {paginatedRows.length < shuffledRows.length && (
            <div ref={loadMoreRef} className="h-10 w-full" />
          )}
        </main>
        <br />
        <br />
      </header>
    </>
  );
};

export default index;
