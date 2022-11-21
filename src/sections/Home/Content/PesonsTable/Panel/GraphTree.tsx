import { Box } from "@mui/material";
import Tree from "react-d3-tree/lib/Tree";
import { GraphData } from "../../../../../types/mockData";

const GraphTree = () => {
  return (
    <Box width="100%" minHeight={800}>
      <Tree data={GraphData} />
    </Box>
  );
};

export default GraphTree;
