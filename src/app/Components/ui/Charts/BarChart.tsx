import { BarChart } from "@mui/x-charts/BarChart";
import { BarSeriesType } from "@mui/x-charts/models";

export default function BasicBars(props: any) {
  const { label } = props;
  const orderData: {
    [key: string]: { accepted: number; pending: number; rejected: number };
  } = {
    January: {
      accepted: 120,
      pending: 25,
      rejected: 5,
    },
    February: {
      accepted: 85,
      pending: 80,
      rejected: 10,
    },
    March: {
      accepted: 100,
      pending: 20,
      rejected: 8,
    },
    April: {
      accepted: 125,
      pending: 22,
      rejected: 6,
    },
    May: {
      accepted: 115,
      pending: 28,
      rejected: 7,
    },
    June: {
      accepted: 100,
      pending: 26,
      rejected: 9,
    },
    July: {
      accepted: 105,
      pending: 24,
      rejected: 8,
    },
    August: {
      accepted: 100,
      pending: 60,
      rejected: 7,
    },
    September: {
      accepted: 105,
      pending: 80,
      rejected: 6,
    },
    October: {
      accepted: 60,
      pending: 20,
      rejected: 5,
    },
    November: {
      accepted: 85,
      pending: 18,
      rejected: 4,
    },
    December: {
      accepted: 100,
      pending: 15,
      rejected: 3,
    },
  };

  const months = Object.keys(orderData);
  const acceptedData = months.map((month) => orderData[month].accepted);
  const pendingData = months.map((month) => orderData[month].pending);
  const rejectedData = months.map((month) => orderData[month].rejected);

  const series: BarSeriesType[] = [
    { data: acceptedData, type: "bar", label: label && label[0] },
    { data: pendingData, type: "bar", label: label && label[1] },
    { data: rejectedData, type: "bar", label: label && label[2] },
  ];

  return (
    <BarChart xAxis={[{ scaleType: "band", data: months }]} series={series} />
  );
}
