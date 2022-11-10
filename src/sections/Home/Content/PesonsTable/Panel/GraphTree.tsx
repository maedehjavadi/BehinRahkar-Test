import React from "react";
// import { Tree } from "react-tree-graph";
const GraphTree = () => {
  const data = {
    name: "Parent",
    children: [
      {
        name: "Child One",
      },
      {
        name: "Child Two",
      },
    ],
  };
  return <>{/* <Tree data={data} height={400} width={400} /> */}</>;
};

export default GraphTree;
