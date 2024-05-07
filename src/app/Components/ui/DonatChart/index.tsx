import { Chart } from "react-google-charts";
import { IoMdStar } from "react-icons/io";

export const data = [
  ["Task", "Hours per Day"],
  ["5⭐️", 10],
  ["4⭐️", 2],
  ["3⭐️", 2],
  ["2⭐️", 2],
  ["1⭐️", 7],
];

export const options = {
  pieHole: 0.4,
  is3D: false,
  tooltip: { trigger: "selection" }, // Show labels on hover only

  colors: ["blue", "green", "yellow", "orange", "red"], // Specify colors for slices
};

const DonatChart = (props: any) => {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height={props?.height || '120px'}
      data={data}
      options={options}
    />
  );
};
export default DonatChart;
