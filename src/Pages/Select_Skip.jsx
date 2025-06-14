import { FaBoxes, FaColumns, FaSpinner } from "react-icons/fa";
import { useSkip } from "../APILogic/api_logic";
import { Card } from "../Components/Card";
import "../App.css";
import { useState } from "react";
import { ErrorAlert } from "../Components/ErrorAlert";

export const Select_Skip = () => {
  //Fetch the skip data from the API
  const { data: skipData, isPending, error } = useSkip();
  const [openedCardId, setOpenCard] = useState(null);
  const viewClick = {
    0: "xl:grid-cols-1",
    1: "xl:grid-cols-2",
  };
  const [activeView, setActiveView] = useState(1);

  const handleViewClick = () => {
    setActiveView((activeView + 1) % Object.keys(viewClick).length);
  };
  console.log(activeView);

  return (
    <div className="flex-1 p-8 mt-12 sm:mt-12 sm:p-6 md:p-6 ml-0 md:ml-60 md:mt-0 lg:mt-0 bg-neutral-700/50 backdrop-blur-sm min-h-screen">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl text-white font-semibold">
            Choose Your Skip Size
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Select the skip size that best suits your needs
          </p>
        </div>
        <div
          className="hidden md:block lg:block flex justify-center w-10 h-10 items-center text-white text-2xl cursor-pointer"
          onClick={handleViewClick}
        >
          <span className="scale-150">
            <FaColumns aria-label="Change View" />
          </span>
        </div>
      </header>
      <div
        className={`grid grid-cols-1 ${viewClick[activeView]} gap-5 relative`}
      >
        {error ? (
          <ErrorAlert errorMessage={error} />
        ) : isPending ? (
          <FaSpinner
            className="animate-spin text-6xl text-amber-300 absolute top-60 right-1/2"
            aria-label="Loading"
            role="status"
          />
        ) : (
          skipData.map((skip) => (
            <Card
              key={skip.id}
              data={skip}
              isOpen={openedCardId === skip.id}
              onCardClick={() => {
                setOpenCard(openedCardId === skip.id ? null : skip.id);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};
