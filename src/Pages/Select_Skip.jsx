import { useSkip } from "../APILogic/api_logic";
import { Card } from "../Components/Card";

export const Select_Skip = () => {
  //Fetch the skip data from the API
  const { data: skipData, isPending, error } = useSkip();

  return (
    <div className="flex-1 p-5">
      <div className="text-lg">Select_Skip</div>
      <div className="grid grid-cols-2">
        {error
          ? "An error occured while fetching the data"
          : isPending
          ? "Loading..."
          : skipData.map((skip) => <Card id={skip.id} size={skip.size} />)}
      </div>
    </div>
  );
};
