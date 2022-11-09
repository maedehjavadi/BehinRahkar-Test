/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, styled } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import ContentSide from "./Content/ContentSide";
import Sidebar from "./SideBar/Sidebar";

const HomeStyle = styled(Box)(({ theme }) => ({
  height: "calc(100vh - 56px)",
  marginTop: "56px",
  overflowX: "hidden",
  // overflowY: "hidden",
}));

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    }
  }, [isAuthenticated]);

  return (
    <HomeStyle>
      <Grid container>
        <Grid item xs={3} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} lg={10}>
          <ContentSide />
        </Grid>
      </Grid>
    </HomeStyle>
  );
};

export default Home;
