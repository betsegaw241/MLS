import { Flex, Text } from "../ui/Blocks";
import BasicBars from "../ui/Charts/BarChart";
import StackBars from "../ui/Charts/BarChart";
import PieColor from "../ui/Charts/PieChart";
//import BarChart from "../ui/Charts/BarChart";
import PieChart from "../ui/Charts/PieChart";
import { Chart } from "react-google-charts";
import BasicArea from "../ui/Charts/lineChart";

const AdminDashboardComponent = () => {
  const data = [
    ["Days", "Sold", "Ordered", "Aborted"],
    ["Monday", 100, 400, 300],
    ["Tuesday", 170, 460, 250],
    ["Wednesday", 660, 1120, 300],
    ["Thrusday", 1030, 540, 350],
    ["Friday", 1030, 540, 350],
    ["Saturday", 1030, 540, 350],
    ["Sunday", 1030, 540, 350],
  ];

  const options = {
    chart: {
      title: "Pharmacy Analysis",
      subtitle: "Ordered, Sold, and Aborted: In this week monday to sunday",
    },
  };
  const BarChart = () => {
    return (
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    );
  };

  const palette = ["#C3FF93", "#FFAF61", "#F5EFE6"];

  const palette1 = [
    "#B3C8CF",
    "#BED7DC",
    "#9195F6",
    "#C6CF9B",
    "#FFCAD4",
    "#D895DA",
  ];

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
          <Text fontFamily={"poppins"}>Subscribed Pharmacies</Text>
          <BasicArea />
          <Text fontFamily={"poppins"}>Users</Text>
          <BasicArea />
          <BasicBars />
          <BasicBars />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AdminDashboardComponent;
