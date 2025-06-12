import "./App.css";
import { Card } from "./Components/Card";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Select_Skip } from "./Pages/Select_Skip";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Select_Skip />
    </QueryClientProvider>
  );
}

export default App;
