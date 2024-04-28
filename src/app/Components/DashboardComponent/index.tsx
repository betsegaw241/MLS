import { Flex } from "../ui/Blocks";
//import BarChart from "../ui/Charts/BarChart";
import PieChart from "../ui/Charts/PieChart";
import { Chart } from "react-google-charts";

const DashboardComponent = () => {
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

  return (
    <Flex width={"100%"}>
      <Flex
        width={"75%"}
        height={"100vh"}
        backgroundColor={"#ffff"}
        margin={1}
        p={1}
        borderRadius={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex marginTop={30} width="100%" height="100%">
          <BarChart />
        </Flex>
      </Flex>
      <Flex
        margin={1}
        paddingLeft={"0px"}
        marginLeft={"0px"}
        borderRadius={1}
        width={"25%"}
        flexDirection={"column"}
        backgroundColor={"#ffff"}
        p={1}
      >
        <PieChart />
      </Flex>
    </Flex>
  );
};

export default DashboardComponent;
