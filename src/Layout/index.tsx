import { Box } from "@mui/material";
import { Outlet } from "react-router";

import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
        }}
      >
        <Header />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
