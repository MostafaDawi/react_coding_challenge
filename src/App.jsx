import "./App.css";
import { Card } from "./Components/Card";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Select_Skip } from "./Pages/Select_Skip";
import { Sidebar } from "./Components/Sidebar";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen bg-[url(/topo.jpg)] bg-fixed bg-cover">
        <Sidebar />
        <Select_Skip />
      </main>
    </QueryClientProvider>
  );
}

export default App;
