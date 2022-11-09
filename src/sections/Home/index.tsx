import { Box, Grid, styled } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import ContentSide from "./ContentSide";
import Sidebar from "./Sidebar";

const HomeStyle = styled(Box)(({ theme }) => ({
  height: "calc(100vh - 56px)",
  overflowX: "hidden",
  overflowY: "hidden",
  marginTop: "56px",
}));

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);
  return (
    <HomeStyle>
      <Grid container>
        <Grid item xs={4} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={8} lg={10}>
          <ContentSide />
        </Grid>
      </Grid>
    </HomeStyle>
  );
};

export default Home;
