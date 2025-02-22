import { Box, Container } from "@mui/material";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

const App = () => {
  console.log({ router });
  return (
    <Box bgcolor={"#2a3439"}>
      <Container maxWidth="xl" style={{ height: "100vh" }}>
        <RouterProvider router={router} />
      </Container>
    </Box>
  );
};

export default App;
