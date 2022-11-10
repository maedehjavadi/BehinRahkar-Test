import { Box, Grid, Stack } from "@mui/material";
import DiagramCard from "../../../../components/DiagramCard";
import {
  ColumnChartData,
  DiagramCardsData,
  pieData,
} from "../../../../types/mockData";
import ColumnChartDiagram from "./ColumnChartDiagram";
import PieChartDiagram from "./PieChartDiagram";

const Diagrams = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2} py={3}>
          {DiagramCardsData.length && (
            <Grid item xs={12} md={12}>
              <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                justifyContent="space-around"
                alignItems="center"
              >
                {DiagramCardsData.map((card, i) => (
                  <Box pt={2} key={i}>
                    <DiagramCard
                      action={card.action}
                      title={card.title}
                      value={card.value}
                      id={card.id}
                    />
                  </Box>
                ))}
              </Stack>
            </Grid>
          )}
          <Grid item xs={12} md={12} lg={6}>
            <PieChartDiagram chartData={pieData} />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <ColumnChartDiagram chartData={ColumnChartData} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Diagrams;
