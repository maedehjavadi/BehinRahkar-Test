import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Addresses = (props: {
  data: string[];
  setData: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const { data, setData } = props;
  const [address, setAddress] = useState<string>("");
  return (
    <Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="subtitle2">Address:</Typography>
        <TextField
          fullWidth
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          sx={{ p: 0 }}
        />
        <Button
          variant="contained"
          onClick={() => {
            setData((prev) => [...prev, address]);
            setAddress("");
          }}
        >
          <Typography textTransform="capitalize" variant="button">
            Add
          </Typography>
        </Button>
      </Stack>
      <Stack spacing={2} mt={4}>
        {data.map((add, i) => (
          <Box key={i}>
            <Typography variant="body1" py={2}>
              {add}
            </Typography>
            {i < data.length && <Divider />}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Addresses;
