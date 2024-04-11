import { Flex } from "../ui/Blocks";
import BarChart from "../ui/Charts/BarChart";
import PieChart from "../ui/Charts/PieChart";

const DashboardComponent = () => {
  return (
    <Flex width={"100%"}>
      <Flex
        width={"75%"}
        height={"100vh"}
        backgroundColor={"#ffff"}
        margin={1}
        p={1}
        borderRadius={1}
      >
        <BarChart />
      </Flex>
      <Flex
        margin={1}
        paddingLeft={"0px"}
        marginLeft={"0px"}
        borderRadius={1}
        width={"25%"}
        flexDirection={'column'}
        backgroundColor={"#ffff"}
        p={1}
      >
        <PieChart />
      </Flex>
    </Flex>
  );
};

export default DashboardComponent;
