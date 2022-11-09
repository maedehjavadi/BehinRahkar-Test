/* eslint-disable react-hooks/exhaustive-deps */
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DoneIcon from "@mui/icons-material/Done";
import WarningIcon from "@mui/icons-material/Warning";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { CardPropType, DiagramCardEnum, StateType } from "../types/main";

const IncreaseIcon = (
  <Box>
    <ArrowDropUpIcon sx={{ color: "grey.900" }} fontSize="large" />
  </Box>
);
const DecreaseIcon = (
  <Box>
    <ArrowDropDownIcon sx={{ color: "grey.900" }} fontSize="large" />
  </Box>
);
const StableIcon = (
  <Box>
    <DoneIcon sx={{ color: "grey.900" }} fontSize="large" />
  </Box>
);
const WarnIcon = (
  <Box>
    <WarningIcon sx={{ color: "grey.900" }} fontSize="large" />
  </Box>
);

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

const DiagramCard = (props: CardPropType) => {
  const theme = useTheme();
  const { action, title, value } = props;
  const [modal, setModal] = useState<StateType>();

  useEffect(() => {
    switch (action) {
      case DiagramCardEnum.Increase:
        setModal({
          color: `${theme.palette.success.light}`,
          icon: IncreaseIcon,
        });
        break;
      case DiagramCardEnum.Decrease:
        setModal({
          color: `${theme.palette.error.light}`,
          icon: DecreaseIcon,
        });
        break;
      case DiagramCardEnum.Stable:
        setModal({
          color: `${theme.palette.grey[500]}`,
          icon: StableIcon,
        });
        break;
      case DiagramCardEnum.Warning:
        setModal({
          color: `${theme.palette.warning.light}`,
          icon: WarnIcon,
        });
        break;

      default:
        break;
    }
  }, [action]);

  return (
    <Card sx={{ minWidth: 240, backgroundColor: `${modal?.color}` }}>
      <StyledCardContent>
        <Box>
          <Typography variant="h5">{value}</Typography>
          <Typography variant="body1">{title}</Typography>
        </Box>
        <IconButton size="large">{modal?.icon}</IconButton>
      </StyledCardContent>
    </Card>
  );
};

export default DiagramCard;
