import { Box, Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box bgcolor={"#2a3439"}>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}
