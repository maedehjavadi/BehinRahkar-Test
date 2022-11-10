import { Avatar, Box, Button, Popover, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ProfileButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <Box mt={0.5}>
      <Avatar
        variant="circular"
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          setAnchorEl(event.currentTarget as any);
        }}
      />
      {!!anchorEl && (
        <Popover
          id="3dotpopup"
          open={!!anchorEl}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Stack px={2} py={3}>
            <Button
              variant="text"
              sx={{ display: "flex", justifyContent: "flex-start" }}
              startIcon={<AccountBoxIcon />}
            >
              <Typography textTransform={"capitalize"} color="text.primary">
                User profile
              </Typography>
            </Button>

            <Button
              variant="text"
              sx={{ display: "flex", justifyContent: "flex-start" }}
              startIcon={<SettingsIcon />}
            >
              <Typography textTransform={"capitalize"} color="text.primary">
                Setting
              </Typography>
            </Button>
            <Button
              variant="text"
              sx={{ display: "flex", justifyContent: "flex-start" }}
              startIcon={<LogoutIcon />}
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              <Typography textTransform={"capitalize"} color="text.primary">
                Logout
              </Typography>
            </Button>
          </Stack>
        </Popover>
      )}
    </Box>
  );
};

export default ProfileButton;
