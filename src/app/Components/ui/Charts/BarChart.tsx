

import { Chart } from "react-google-charts";

const BarChart = () => {
  const data = [
    { name: "Category A", value: 50, color: "blue" },
    { name: "Category B", value: 30, color: "green" },
    { name: "Category C", value: 20, color: "red" },
  ];

  // Chart configuration
  const chartConfig = {
    type: "bar",
    data: {
      labels: data.map((item) => item.name),
      datasets: [
        {
          label: "Values",
          data: data.map((item) => item.value),
          backgroundColor: data.map((item) => item.color),
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  return <Chart chartType={"BarChart"} data={data} options={chartConfig} />;
};

export default BarChart;
