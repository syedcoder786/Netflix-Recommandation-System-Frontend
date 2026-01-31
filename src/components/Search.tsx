import { useEffect, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

export default function Search({
  open,
  setOpen,
  query,
  setQuery,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  query: string;
  setQuery: (v: string) => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const onSearchPage = location.pathname === "/search";
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Autofocus when opened */
  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  return (
    <div ref={containerRef} className="relative flex items-center">
      {/* Search icon button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="text-white bg-[#111] rounded-full hover:bg-[#333] transition"
        >
          <FiSearch size={24} />
        </button>
      )}

      {/* Expandable input */}
      {open && (
        <div className="w-85 max-md:w-60">
          <div className="flex items-center w-full bg-[#111] border rounded-sm overflow-hidden transition-all duration-300">
            {/* Search Icon */}
            <div className="w-10 flex items-center justify-center">
              <FiSearch className="text-gray-400" size={20} />
            </div>

            {/* Input */}
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                const value = e.target.value;

                if (value.length > 0 && !onSearchPage) {
                  navigate("/search");
                }

                setQuery(value);
              }}
              placeholder="Search for movies or TV shows"
              className="flex-1 max-md:w-45 h-10 bg-transparent text-white placeholder-gray-400 px-2 outline-none"
            />

            {/* Close button */}
            <button
              onClick={() => {
                setOpen(false);
                setQuery("");
                navigate("/");
              }}
              className="w-10 flex items-center justify-center text-gray-400 hover:text-white"
            >
              <FiX size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
