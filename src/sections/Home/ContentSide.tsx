import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { MainMenuEnum } from "../../types/main";
import Diagrams from "./Diagrams";
import PersonsGrid from "./PersonsGrid";

const ContentSide = () => {
  const { pathname } = useLocation();
  const content = pathname.replace("/main/", "");
  console.log(content);
  return (
    <Box p={2}>
      {content === MainMenuEnum.Persons && <PersonsGrid />}
      {content === MainMenuEnum.Diagrams && <Diagrams />}
    </Box>
  );
};

export default ContentSide;
