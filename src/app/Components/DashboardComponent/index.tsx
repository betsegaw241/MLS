import { Flex, Text } from "../ui/Blocks";
import BasicBars from "../ui/Charts/BarChart";
import StackBars from "../ui/Charts/BarChart";
import PieColor from "../ui/Charts/PieChart";
import PieChart from "../ui/Charts/PieChart";
import { Chart } from "react-google-charts";
import BasicArea from "../ui/Charts/lineChart";

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
  const profitData: { [key: string]: number } = {
    January: 3000,
    February: 500,
    March: 600,
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

  return (
    <Flex width={"100%"} justifyContent={'flex-start'} flexDirection={['column','row']}>
      <Flex
        width={["100%","75%"]}
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
          <Text fontFamily={"poppins"}>Drugs</Text>
          <Flex width={"100%"} height={500}>
            <BasicBars label={["Added", "Sold", "Expaired"]} />
          </Flex>
          <Text fontFamily={"poppins"}>Orders</Text>

          <Flex width={"100%"} height={500}>
            <BasicArea data={profitData} color={"#9195F6"} />
          </Flex>
        </Flex>
      </Flex>
      <Flex 
      top={'65px'}
        position={'sticky'}
        margin={1}
        paddingLeft={"0px"}
        marginLeft={"0px"}
        borderRadius={1}
        width={['100%',"20%"]}
        flexDirection={["row","column"]}
        backgroundColor={"#fff"}
        p={1}
        height={'85dvh'}
       
      >
        <Text fontFamily={"poppins"} fontSize={2}>
          Orders
        </Text>
        <PieChart data={data2} palette={palette} />
        {/* <Text fontFamily={"poppins"} fontSize={2}>
          Ordered Drugs
        </Text>

        <PieChart data={data1} palette={palette1} /> */}
        <Text fontFamily={"poppins"} fontSize={2}>
          Order times
        </Text>

        <PieChart data={data3} palette={palette} />
      </Flex>
    </Flex>
  );
};

export default DashboardComponent;
