import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ProfileButton from "../components/ProfileButton";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.grey[900],
        px: 2,
        position: "fixed",
        width: "98vw",
        borderBottom: `2px solid #CECECE`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1.3,
          pt: 0.5,
        }}
      >
        <Typography
          variant="h4"
          color={(theme) => theme.palette.common.white}
          sx={{ fontFamily: "Pacifico" }}
        >
          Logo
        </Typography>
        <Box>
          {/* {!isAuthenticated ? ( */}
          {pathname === "/" && !isAuthenticated ? (
            <Button
              variant="contained"
              size="large"
              color="primary"
              sx={{ backgroundColor: "#212121" }}
              onClick={() => navigate("/")}
            >
              Login
            </Button>
          ) : (
            <Box mr={3}>
              <ProfileButton />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
