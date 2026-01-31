import { useState } from "react";

export default function LanguageScroller({ languages }) {
  const [active, setActive] = useState("English");

  return (
    <div className="w-full px-8 py-4">
      <div
        className="
          flex gap-6 py-3
          overflow-x-auto scroll-smooth
          whitespace-nowrap
          hide-scrollbar
        "
      >
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setActive(lang)}
            className={`
              relative text-sm font-medium transition-colors
              ${
                active === lang
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }
            `}
          >
            {lang}

            {/* Active underline */}
            {active === lang && (
              <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-red-600" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
