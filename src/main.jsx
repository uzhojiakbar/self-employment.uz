import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./root/root";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Root />
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
