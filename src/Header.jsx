import React, { useEffect, useState } from "react";

export const Header = ({ section, listOfSections, handleSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="header">
      <h1 className="lg:text-5xl md:text-xl sm:text-base">Charles Hodgins</h1>
      <div className="w-1/2 flex h-full items-center justify-evenly">
        {listOfSections.map((sect) => (
          <button
            key={sect}
            className={
              (section === sect
                ? " border-green-400"
                : "border-slate-900 hover:border-slate-950") +
              ` sm:text-xs text-xs p-2 border-b-4 lg:p-4 lg:text-lg duration-200 bg-slate-900 hover:bg-slate-950  ease-in-out`
            }
            onClick={() => handleSection(sect)}
          >
            {sect}
          </button>
        ))}
      </div>
    </div>
  );
};
