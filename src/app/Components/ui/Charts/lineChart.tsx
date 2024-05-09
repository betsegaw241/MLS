import { LineChart } from "@mui/x-charts/LineChart";
import { LineSeriesType } from "@mui/x-charts/models";
interface IChartProps {
  data: { [key: string]: number };
  color: string;
}

export default function MonthlyProfitChart(props: IChartProps) {
  const { color, data } = props;

  const months = Object.keys(data);
  const profitValues = Object.values(data);
  const series: LineSeriesType[] = [
    {
      data: profitValues,
      type: "line",
      color: color,
    },
  ];

  return (
    <LineChart xAxis={[{ scaleType: "band", data: months }]} series={series} />
  );
}
