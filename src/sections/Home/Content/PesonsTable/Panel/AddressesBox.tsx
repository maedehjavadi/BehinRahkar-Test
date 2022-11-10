import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const AddressesBox = (props: { data: string[] }) => {
  const { data } = props;
  return (
    <>
      <Box
        sx={{
          borderRadius: 1,
          py: 1,

          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.25)",
          minWidth: "90%",
          bgcolor: "grey.100",
          minHeight: 350,
        }}
      >
        {data.length > 0 ? (
          <>
            {data.map((add: string, i: number) => (
              <>
                <Box
                  key={i}
                  py={2}
                  pl={2}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    gap: 3,
                    // borderBottom: "1px solid black",
                  }}
                >
                  <Typography variant="body1" color="InfoText">
                    {i + 1}
                  </Typography>
                  <Typography variant="body1">{add}</Typography>
                </Box>
                <Divider
                  sx={{ bgcolor: (theme) => theme.palette.grey[200] }}
                  variant="middle"
                />
              </>
            ))}
          </>
        ) : (
          <>
            <Typography
              variant="h6"
              textTransform="capitalize"
              textAlign="center"
              color="info.main"
              pt={16}
            >
              no address added
            </Typography>
          </>
        )}
      </Box>
    </>
  );
};

export default AddressesBox;
