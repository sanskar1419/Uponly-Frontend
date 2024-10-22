import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApartmentsContextProvider } from "./components/ApartmentPreview/context/ApartmentContext.jsx";
import { CurrentApartmentsContextProvider } from "./components/ApartmentPreview/context/CurrentApartmentContext.jsx";
import { ApartmentsCountContextProvider } from "./components/ApartmentPreview/context/ApartmentsCountContext.jsx";

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
