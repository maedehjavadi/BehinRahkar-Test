import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const BackDropLoading = (props: { open: boolean }) => {
  const { open } = props;

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackDropLoading;
