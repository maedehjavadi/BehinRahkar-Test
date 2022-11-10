import { TableCell, TableHead, TableRow } from "@mui/material";
import { gridHeadTitles } from "../../../../../types/mockData";

const GridHead = () => {
  return (
    <TableHead
      sx={{
        bgcolor: (theme) => theme.palette.grey[900],
      }}
    >
      <TableRow>
        {gridHeadTitles.map((title) => (
          <TableCell
            key={title.id}
            sx={{
              color: (theme) => theme.palette.grey[100],
              fontWeight: "bold",
            }}
            align="center"
          >
            {title.value}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default GridHead;
