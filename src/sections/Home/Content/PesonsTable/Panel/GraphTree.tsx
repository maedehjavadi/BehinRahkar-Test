import { Box } from "@mui/material";
import Tree from "react-d3-tree/lib/Tree";
import { GraphData } from "../../../../../types/mockData";

const GraphTree = () => {
  return (
    <Box width="100%" height={"100vh"}>
      <Tree
        data={GraphData}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        orientation="vertical"
        nodeSize={{ x: 200, y: 200 }}
        translate={{ x: 550, y: 20 }}
      />
    </Box>
  );
};

export default GraphTree;
