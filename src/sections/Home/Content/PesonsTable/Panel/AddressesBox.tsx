import { Box, Divider, Typography, styled } from "@mui/material";

const AddressBoxStyled = styled(Box)(({ theme }) => ({
  minWidth: "90%",
  minHeight: 350,
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(1),
  bgcolor: theme.palette.grey[50],
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25)",
}));

const NoAddressBoxStyled = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(50),
  backgroundColor: theme.palette.grey[100],
  width: 200,
  height: 200,
  alignSelf: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto 0",
}));
const AddressesBox = (props: { data: string[] }) => {
  const { data } = props;
  return (
    <>
      <AddressBoxStyled>
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
          <NoAddressBoxStyled>
            <Typography
              variant="body1"
              textTransform="capitalize"
              color="GrayText"
            >
              no address added
            </Typography>
          </NoAddressBoxStyled>
        )}
      </AddressBoxStyled>
    </>
  );
};

export default AddressesBox;
