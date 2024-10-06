import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CurrentApartmentsContextProvider } from "./context/CurrentApartmentContext.jsx";
import { ApartmentsContextProvider } from "./context/ApartmentContext.jsx";
import { ApartmentsCountContextProvider } from "./context/ApartmentsCountContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApartmentsContextProvider>
      <CurrentApartmentsContextProvider>
        <ApartmentsCountContextProvider>
          <App />
        </ApartmentsCountContextProvider>
      </CurrentApartmentsContextProvider>
    </ApartmentsContextProvider>
  </StrictMode>
);
