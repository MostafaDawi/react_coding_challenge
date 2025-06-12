import { useQuery } from "@tanstack/react-query";

// This function can be used for different API endpoints, but since we are working on a single page, we'll leave it as is
const fetchData = async () => {
  const response = await fetch(
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
  );
  const data = response.json();
  if (!response.ok) throw new Error("Failed to fetch skip data");
  return data;
};

export const useSkip = () => {
  return useQuery({ queryKey: ["skipData"], queryFn: fetchData });
};
