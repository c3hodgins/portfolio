import React, { useEffect, useState } from "react";

export const Header = ({ section, sections, handleSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="sticky items-center m-0 px-10 w-full h-24 flex justify-between border-b-4 text-white border-slate-700 bg-slate-600">
      <h1 className="lg:text-2xl sm:text-md">Charles Hodgins</h1>
      <div className="w-1/2 flex h-full items-center justify-evenly">
        {sections.map((sect) => (
          <button
            key={sect}
            className={
              (section === sect ? " bg-slate-700 " : "bg-slate-600 ") +
              `sm:text-sm p-4 lg:text-lg duration-300 hover:bg-slate-800  ease-in-out`
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
