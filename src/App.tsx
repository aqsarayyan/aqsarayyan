import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>

          {/* Toasts styled to match theme */}
          <Toaster />
          <Sonner theme="dark" />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>

        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;