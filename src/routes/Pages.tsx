// import type { Theme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import SignIn from "../sections/Auth/SignIn";
import Home from "../sections/Home";
import NotFound from "../components/NotFound";

function Pages() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="main/*" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Pages;
