import { Chart } from "react-google-charts";

const PieChart = () => {
  const options = {
    title: "My Custom Data Chart",
    legend: { position: "top" },
  };

  const chartData = [
    ["Category", "Value"],
    ["Category A", 50],
    ["Category B", 300],
    ["Category C", 20],
  ];

  return <Chart chartType={"PieChart"} data={chartData} options={options} />;
};

export default PieChart;
