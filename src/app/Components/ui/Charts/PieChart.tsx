import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import { Hidden } from "@mui/material";

const pieParams = { height: 200, margin: { right: 10 } };

interface PieColorProps {
  data: { value: number; label: string }[];
  palette: string[];
}

const PieColor: React.FC<PieColorProps> = ({ data, palette }) => {
  return (
    <Stack width="100%" justifyContent={"center"} alignItems={"center"}>
      <PieChart
        sx={{ fontSize: 11 }}
        colors={palette}
        series={[
          {
            arcLabel: (item) => `${item.label}`,
            data: data,
            innerRadius: 10,
            outerRadius: 80,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 360,
          },
        ]}
        slotProps={{ legend: { hidden: true } }}
        width={200}
        {...pieParams}
      />
    </Stack>
  );
};

export default PieColor;

