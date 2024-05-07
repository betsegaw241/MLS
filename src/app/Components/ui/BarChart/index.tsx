import { Chart } from "react-google-charts";

export const data = [
  ["City", "Total Population", { role: "style" }], // Add a role for style
  ["ww", 190, "green"], // Specify color for the first bar
  ["ww", 190, "blue"], // Specify color for the second bar
  ["ww", 190, "orange"], // Specify color for the third bar
  ["ww", 190, "yellow"], // Specify color for the fourth bar
  ["ww", 170, "red"], // Specify color for the fourth bar
];

export const options = {
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
    gridlines: {color: 'transparent'} // Hide vertical gridlines
  },
  bar: { groupWidth: '75%' }, // Adjust the width of bars
  backgroundColor: 'none', // Hide background lines
};



const HorizontalBarChart = () => {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      data={data}
      options={options}
    />
  );
};

export default HorizontalBarChart;
