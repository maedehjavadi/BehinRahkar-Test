import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ProfileButton from "./ProfileButton";

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
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          color={(theme) => theme.palette.common.white}
          ml={3}
        >
          Logi
        </Typography>
        <Box>
          {/* {!isAuthenticated ? ( */}
          {pathname === "/sign-in" && !isAuthenticated ? (
            <Button
              variant="contained"
              size="large"
              color="primary"
              sx={{ backgroundColor: "#212121" }}
              onClick={() => navigate("/sign-in")}
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
