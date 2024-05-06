import { BarChart } from "@mui/x-charts/BarChart";
import { BarSeriesType } from "@mui/x-charts/models";

export default function BasicBars() {
  const orderData: {
    [key: string]: { accepted: number; pending: number; rejected: number };
  } = {
    January: {
      accepted: 120,
      pending: 25,
      rejected: 5,
    },
    February: {
      accepted: 115,
      pending: 30,
      rejected: 10,
    },
    March: {
      accepted: 130,
      pending: 20,
      rejected: 8,
    },
    April: {
      accepted: 125,
      pending: 22,
      rejected: 6,
    },
    May: {
      accepted: 135,
      pending: 28,
      rejected: 7,
    },
    June: {
      accepted: 140,
      pending: 26,
      rejected: 9,
    },
    July: {
      accepted: 145,
      pending: 24,
      rejected: 8,
    },
    August: {
      accepted: 150,
      pending: 23,
      rejected: 7,
    },
    September: {
      accepted: 155,
      pending: 22,
      rejected: 6,
    },
    October: {
      accepted: 160,
      pending: 20,
      rejected: 5,
    },
    November: {
      accepted: 165,
      pending: 18,
      rejected: 4,
    },
    December: {
      accepted: 170,
      pending: 15,
      rejected: 3,
    },
  };

  const months = Object.keys(orderData);
  const acceptedData = months.map((month) => orderData[month].accepted);
  const pendingData = months.map((month) => orderData[month].pending);
  const rejectedData = months.map((month) => orderData[month].rejected);

  const series: BarSeriesType[] = [
    { data: acceptedData, type: "bar" },
    { data: pendingData, type: "bar" },
    { data: rejectedData, type: "bar" },
  ];

  return (
    <BarChart xAxis={[{ scaleType: "band", data: months }]} series={series} />
  );
}
