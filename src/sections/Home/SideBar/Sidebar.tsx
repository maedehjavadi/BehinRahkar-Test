import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sideMenuItems } from "../../../types/mockData";
import { MainMenuEnum } from "../../../types/main";

// const SidebarStyle = styled(Stack)(({ theme }) => ({}));

const Sidebar = () => {
  const [isSeeMore, setIsLoadMore] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  const handleSeeMoreClick = (key: string, type: MainMenuEnum) => {
    setIsLoadMore({ ...isSeeMore, [key]: !isSeeMore[key] });
    if (type !== MainMenuEnum.Diagrams) {
      navigate(`/main/${type}`);
    } else {
      navigate(`/main`);
    }
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: (theme) => theme.palette.grey[900],
        height: "100vh",
      }}
      component="nav"
    >
      {sideMenuItems.map((item, index) => (
        <>
          <ListItemButton
            onClick={() => handleSeeMoreClick(item?.id, item?.type)}
            sx={{ px: 1, py: 2, borderRadius: 1 }}
            key={item?.id}
          >
            <ListItemText>
              <Typography
                variant="subtitle1"
                color={(theme) => theme.palette.common.white}
              >
                {item?.itemName}
              </Typography>
            </ListItemText>
            {!!item?.children?.length &&
              (isSeeMore[item?.id] ? (
                <ExpandLessIcon color="info" />
              ) : (
                <ExpandMoreIcon color="info" />
              ))}
          </ListItemButton>
          {item?.children?.map((child) => (
            <Collapse
              in={isSeeMore[item?.id]}
              timeout="auto"
              unmountOnExit
              key={child?.id}
            >
              <List>
                <ListItemButton
                  onClick={() => handleSeeMoreClick(child?.id, item?.type)}
                  sx={{ pl: 2.5, py: 1, borderRadius: 1 }}
                >
                  <ListItemText>
                    <Typography
                      variant="subtitle1"
                      color={(theme) => theme.palette.common.white}
                    >
                      {child?.item}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
          ))}
          {index + 1 < sideMenuItems.length && (
            <Divider sx={{ bgcolor: "grey.800" }} />
          )}
        </>
      ))}
    </List>
  );
};

export default Sidebar;
