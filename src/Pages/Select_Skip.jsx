import { useSkip } from "../APILogic/api_logic";

export const Select_Skip = () => {
  //Fetch the skip data from the API
  const { data: skipData, isPending, error } = useSkip();

  return (
    <>
      <div>Select_Skip</div>
      <div>
        {error
          ? "An error occured while fetching the data"
          : isPending
          ? "Loading..."
          : skipData.map((skip, index) => (
              <div key={index}>
                <h1>ID: {skip.id}</h1>
                <p>Size: {skip.size}</p>
              </div>
            ))}
      </div>
    </>
  );
};
