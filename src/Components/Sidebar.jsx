import { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";

export const Sidebar = ({
  activePageSide = "Select Skip",
  visitedPagesSide = {},
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

  const pages = [
    { name: "Postcode" },
    { name: "Waste Type" },
    { name: "Select Skip" },
    { name: "Permit Check" },
    { name: "Choose Date" },
    { name: "Payment" },
  ];
  console.log("Visited: ", visitedPages, "Active: ", activePage);
  return (
    <aside className="bg-gray-800 w-80 p-5 ">
      <div>
        <button className="mb-5 text-lg">Back</button>
        <ul className="space-y-1 relative">
          {pages.map((page) => (
            <>
              <div
                className={`w-px h-5 ml-2.5 ${
                  visitedPages[page.name] ? "bg-amber-300" : "bg-amber-100"
                }`}
              ></div>

              <li
                className={`flex items-center gap-5 transition duration-300 ${
                  activePage === page.name
                    ? "text-amber-300 text-3xl font-semibold transform"
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
            </>
          ))}
        </ul>
      </div>
    </aside>
  );
};
