import { Container } from "@mui/system";
import { useLayoutEffect } from "react";
import "./App.css";
import useAuth from "./hooks/useAuth";
import Pages from "./routes/Pages";

function App() {
  const { initialize } = useAuth();

  useLayoutEffect(() => {
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {/* <Layout /> */}
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Pages />
      </Container>
    </>
  );
}

export default App;
