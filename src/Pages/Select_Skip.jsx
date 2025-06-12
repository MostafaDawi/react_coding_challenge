import { FaBoxes, FaColumns } from "react-icons/fa";
import { useSkip } from "../APILogic/api_logic";
import { Card } from "../Components/Card";
import "../App.css";

export const Select_Skip = () => {
  //Fetch the skip data from the API
  const { data: skipData, isPending, error } = useSkip();

  return (
    <div className="flex-1 p-4 mt-12 sm:mt-12 sm:p-6 md:p-8 ml-0 md:ml-60 md:mt-0 lg:mt-0 bg-neutral-800 min-h-screen">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl text-white font-semibold">
            Choose Your Skip Size
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Select the skip size that best suits your needs
          </p>
        </div>
        <div className="hidden md:block lg:block flex justify-center w-10 h-10 items-center text-white text-2xl">
          <span className="scale-150">
            <FaColumns aria-label="Change View" />
          </span>
        </div>
      </header>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {error
          ? "An error occured while fetching the data"
          : isPending
          ? "Loading..."
          : skipData.map((skip) => <Card data={skip} />)}
      </div>
    </div>
  );
};
