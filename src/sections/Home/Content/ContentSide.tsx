import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MainMenuEnum } from "../../../types/main";
import Diagrams from "./Charts/Diagrams";
import PersonsContent from "./PesonsTable/PersonsContent";

const ContentSide = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [content, setContent] = useState<string>();
  useEffect(() => {
    if (pathname !== "/main") {
      setContent(pathname.replace("/main/", ""));
    } else {
      setContent(MainMenuEnum.Diagrams);
    }
  }, [pathname]);

  return (
    <Box p={2} sx={{ height: "100vh" }}>
      {content === MainMenuEnum.Persons && <PersonsContent />}
      {content === MainMenuEnum.Diagrams && <Diagrams />}
    </Box>
  );
};

export default ContentSide;
