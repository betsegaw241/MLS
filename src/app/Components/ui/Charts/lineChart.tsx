import { LineChart } from "@mui/x-charts/LineChart";
import { LineSeriesType } from "@mui/x-charts/models";

export default function MonthlyProfitChart() {
  const profitData: { [key: string]: number } = {
    January: 5000,
    February: 5500,
    March: 6000,
    April: 6200,
    May: 6500,
    June: 6800,
    July: 7000,
    August: 7200,
    September: 7500,
    October: 7800,
    November: 8000,
    December: 8500,
  };

  const months = Object.keys(profitData);
  const profitValues = Object.values(profitData);
  const series: LineSeriesType[] = [
    {
      data: profitValues,
      type: "line",
    },
  ];

  return (
    <LineChart xAxis={[{ scaleType: "band", data: months }]} series={series} />
  );
}
