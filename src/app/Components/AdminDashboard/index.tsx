import { Flex, Text } from "../ui/Blocks";
import BasicBars from "../ui/Charts/BarChart";
import StackBars from "../ui/Charts/BarChart";
import PieColor from "../ui/Charts/PieChart";
//import BarChart from "../ui/Charts/BarChart";
import PieChart from "../ui/Charts/PieChart";
import { Chart } from "react-google-charts";
import BasicArea from "../ui/Charts/lineChart";

const SuperAdminDashboardComponent = () => {
  const palette = ["#C3FF93", "#FFAF61", "#F5EFE6"];

  const palette1 = [
    "#B3C8CF",
    "#BED7DC",
    "#9195F6",
    "#C6CF9B",
    "#FFCAD4",
    "#D895DA",
  ];
  const profitData: { [key: string]: number } = {
    January: 3000,
    February: 500,
    March: 6000,
    April: 6200,
    May: 9000,
    June: 6800,
    July: 7000,
    August: 7200,
    September: 7500,
    October: 900,
    November: 10000,
    December: 11000,
  };
  const profitData2: { [key: string]: number } = {
    January: 100,
    February: 50,
    March: 600,
    April: 6200,
    May: 9000,
    June: 6800,
    July: 9000,
    August: 1000,
    September: 7500,
    October: 9000,
    November: 10000,
    December: 11000,
  };
  const data1 = [
    { value: 10, label: "Acetaminophen" },
    { value: 15, label: "Ibuprofen" },
    { value: 20, label: "Loratadine" },
    { value: 80, label: "Loperamide" },
    { value: 40, label: "Diphenhydramine" },
    { value: 40, label: "Others" },
  ];
  const data2 = [
    { value: 10, label: "Accepted" },
    { value: 15, label: "Rjected" },
    { value: 40, label: "Pending" },
  ];
  const data3 = [
    { value: 10, label: "Morning" },
    { value: 150, label: "Noon" },
    { value: 40, label: "Evening" },
  ];

  return (
    <Flex width={"100%"}>
      <Flex
        width={"100%"}
        minHeight={"100vh"}
        backgroundColor={"#ffff"}
        margin={1}
        p={1}
        borderRadius={1}
        flexDirection={"column"}
      >
        <Text fontFamily={"poppins"} fontSize={6}>
          Dashboard
        </Text>
        <Flex width="100%" height="100%" flexDirection={"column"}>
          <Text fontFamily={"poppins"}>Pharmacy Registration</Text>
          <Flex height={400}>
            <BasicArea color={"#BED7DC"} data={profitData} />
          </Flex>
          <Text fontFamily={"poppins"}>Users Subscription</Text>
          <Flex height={400}>
            <BasicArea color={"#9195F6"} data={profitData2} />
          </Flex>
          <Text fontFamily={"poppins"}>Pharmacies</Text>
          <Flex height={500}>
            <BasicBars label={["Verified", "Pendding", "Rejected"]} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SuperAdminDashboardComponent;
