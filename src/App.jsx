import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import MainBodyContainer from "./components/MainBodyContainer/MainBodyContainer";
import useFetchApartmentCount from "./hooks/useAppartmentsCount";
import useFetchApartment from "./hooks/useApartmentFetch";
import { useApartmentsContext } from "./context/ApartmentContext";
import useCurrentWing from "./hooks/useCurrentWing";
import MainHeader from "./components/MainHeader/MainHeader";
import { CircularProgress } from "@mui/material";

const App = () => {
  const { fetchApartmentsCount } = useFetchApartmentCount();
  const { apartments } = useApartmentsContext();
  const { fetchApartments } = useFetchApartment();
  const { setInitialValue } = useCurrentWing();

  useEffect(() => {
    fetchApartments();
  }, []);

  useEffect(() => {
    if (apartments) {
      setInitialValue();
    }
  }, [apartments]);

  useEffect(() => {
    fetchApartmentsCount();
  }, []);

  return (
    <>
      {apartments ? (
        <Box
          sx={{
            flexGrow: 1,
          }}
          className="no-scrollbar"
          padding={1.5}
        >
          <Grid container spacing={2}>
            <MainHeader />
            <MainBodyContainer />
          </Grid>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size="3rem" />
        </Box>
      )}
    </>
  );
};

export default App;
