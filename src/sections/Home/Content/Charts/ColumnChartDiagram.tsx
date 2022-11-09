import { Divider, Typography } from "@mui/material";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { StyledStack } from "./PieChartDiagram";

const ColumnChartDiagram = (props: any) => {
  const { chartData } = props;
  return (
    <StyledStack>
      <Typography variant="h5">Column Chart</Typography>
      <Divider />
      <BarChart width={400} height={250} data={chartData}>
        <Bar dataKey="students" fill="blue" />
        <CartesianGrid stroke="#c1c1c1" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </StyledStack>
  );
};

export default ColumnChartDiagram;
