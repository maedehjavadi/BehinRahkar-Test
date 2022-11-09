import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function NotFound() {
  return (
    <Container
      sx={{
        height: "100vh",
        pt: 3,
      }}
    >
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Typography variant="h1" color={(theme) => theme.palette.error.light}>
          404 ERROR
        </Typography>
        <Typography
          sx={{ mt: 2 }}
          variant="h4"
          color={(theme) => theme.palette.error.dark}
        >
          The Page Not Found
        </Typography>
      </Stack>
    </Container>
  );
}

export default NotFound;
