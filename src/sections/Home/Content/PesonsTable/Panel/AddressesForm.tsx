import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddressesBox from "./AddressesBox";

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
        mb={3}
      >
        <TextField
          fullWidth
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          label="Address"
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
      <AddressesBox data={data} />
    </Stack>
  );
};

export default Addresses;
