import { useEffect, useState } from "react";
import { FaArrowLeft, FaRegCircle } from "react-icons/fa";

export const Sidebar = ({
  activePageSide = "Select Skip",
  visitedPagesSide = { Postcode: 1, "Waste Type": 1 },
}) => {
  const [activePage, setActivePage] = useState(activePageSide);
  const [visitedPages, setVisitedPages] = useState(visitedPagesSide);

  useEffect(() => {
    if (activePageSide !== activePage) {
      setActivePage(activePageSide);
    }

    // Only update visitedPages if not already marked
    setVisitedPages((prev) => {
      if (prev[activePageSide]) return prev; // Already visited, no update
      return { ...prev, [activePageSide]: 1 };
    });
  }, [activePageSide]);

  // Dummy pages used for this exercise
  const pages = [
    { name: "Postcode" },
    { name: "Waste Type" },
    { name: "Select Skip" },
    { name: "Permit Check" },
    { name: "Choose Date" },
    { name: "Payment" },
  ];

  return (
    <>
      {/* ACTIVE FULLSCREEN SIDEBAR */}
      <aside className="hidden md:block bg-neutral-800/50 backdrop-blur-sm w-60 p-5 overflow-y-auto h-screen fixed border-r border-neutral-600">
        <div>
          <button className="mb-5 text-xl flex items-center justify-center gap-3 cursor-pointer">
            <span className="w-5 h-5">
              <FaArrowLeft />
            </span>
            Back
          </button>
          <ul className="space-y-1 relative">
            {pages.map((page) => (
              <div key={page.name}>
                <div
                  className={`w-px h-5 ml-2.5 ${
                    visitedPages[page.name] ? "bg-amber-300" : "bg-white"
                  }`}
                ></div>

                <li
                  className={`flex cursor-pointer items-center gap-5 transition-all duration-300 ${
                    activePage === page.name
                      ? "text-amber-300 text-2xl font-semibold transform"
                      : visitedPages[page.name]
                      ? "text-amber-300 text-xl"
                      : "text-white text-xl"
                  }`}
                >
                  <span
                    className={`flex w-5 h-5 items-center justify-center transition-transform duration-300 ${
                      activePage === page.name
                        ? "scale-180 transform"
                        : "scale-100"
                    }`}
                  >
                    <FaRegCircle />
                  </span>
                  <span>{page.name}</span>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </aside>
      {/* SMALL SCREEN TOP ACTIVE PAGE */}
      <div className="block md:hidden w-full bg-neutral-800 text-amber-300 text-xl font-semibold p-4 fixed top-0 right-0 z-50 shadow-lg flex items-center justify-center gap-3">
        <FaRegCircle className="scale-125" />
        {activePage}
      </div>
      <div className="block md:hidden h-16"></div>
    </>
  );
};
