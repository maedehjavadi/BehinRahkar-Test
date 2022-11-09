import { Divider, Stack, styled, Typography } from "@mui/material";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { COLORS } from "../../../../types/mockData";

export const StyledStack = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  bgcolor: "background.paper",
  borderRadius: theme.spacing(2),
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
  marginTop: theme.spacing(3),
  minHeight: "100%",
}));

const PieChartDiagram = (props: any) => {
  const { chartData } = props;
  return (
    <>
      <StyledStack>
        <Typography variant="h5">Pie Chart</Typography>
        <Divider sx={{ bgcolor: "grey.900" }} />
        <PieChart width={300} height={300}>
          <Pie
            data={chartData}
            color="black"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {chartData.map((entry: any, index: number) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </StyledStack>
    </>
  );
};

export default PieChartDiagram;
