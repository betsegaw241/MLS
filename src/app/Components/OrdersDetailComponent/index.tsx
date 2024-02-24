import { Box, Button, Flex, Grid, Text } from "../ui/Blocks";
import { GridBox } from "../ui/Blocks/GridBox";
import MapComponent from "../ui/MapComponent";
export interface IStatus {
  status: "ACCEPTED" | "REJECTED" | "Pending";
}
const OrderDetailComponent = () => {
  const status: IStatus = { status: "Pending" };
  return (
    <Flex
      margin={2}
      backgroundColor={"#ffff"}
      width={"100%"}
      flexDirection={"column"}
      p={2}
      borderRadius={1}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={7} color={"#3d3939"}>
          Order Details
        </Text>
        {/* <Text
          backgroundColor={
            status === "ACCEPTED"
              ? "#558e010B"
              : status === "REJECTED"
              ? "#F84F014F"
              : "#f5f5f5"
          }
          color={
            status === "ACCEPTED"
              ? "#558E0B"
              : status === "REJECTED"
              ? "#F84F4F"
              : "#000"
          }
          mr={10}
          p={1}
          borderRadius={"5px"}
        >
          ACCEPTED
        </Text> */}
      </Flex>

      <Box borderRadius={0}>
        {/*  */}
        <Box>
          <Text fontFamily={"poppins"} fontSize={2}>
            Drug Information
          </Text>
          <Grid
            border={"1px solid #f5f5f5f5"}
            borderRadius={0}
            gridColumnGap={"40px"}
            gridRowGap={"15px"}
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            mb={2}
            p={1}
          >
            <GridBox lable={"Drug"} value={"Advil 1ml"} />
            <GridBox lable={"Dosage"} value={"Zuma"} />
            <GridBox lable={"quantity"} value={"5"} />
            <GridBox lable={"Drug"} value={"Zuma"} />
          </Grid>
        </Box>
        <Box>
          <Text fontFamily={"poppins"} fontSize={2}>
            Client Information
          </Text>
          <Grid
            border={"1px solid #f5f5f5f5"}
            borderRadius={0}
            gridColumnGap={"40px"}
            gridRowGap={"15px"}
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            mb={2}
            p={1}
          >
            <GridBox lable={"Name"} value={"Roba James"} />
            <GridBox lable={"Location"} value={"Adama"} />
            <GridBox lable={"Phone"} value={"0935354556"} />
          </Grid>
        </Box>
        <Box>
          <Text fontFamily={"poppins"} fontSize={2}>
            Delivery Information
          </Text>
          <Grid
            border={"1px solid #f5f5f5f5"}
            borderRadius={0}
            gridColumnGap={"40px"}
            gridRowGap={"15px"}
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            mb={2}
            p={1}
          >
            <GridBox lable={"Distance"} value={"5km"} />
            <GridBox lable={"Due time"} value={"2:05"} />
            <GridBox lable={"Order Date"} value={"sat 23,2024"} />
            <GridBox lable={"quantity"} value={"4"} />
            <GridBox lable={"price per unit"} value={"5$"} />
            <GridBox lable={"Total Cost"} value={"50$"} />
          </Grid>
        </Box>
        <Flex flexDirection={"column"}>
          <Text fontFamily={"poppins"} fontSize={2}>
            Delivery Location
          </Text>
          <Box
            width={"100%"}
            height={"300px"}
            backgroundColor={"#f5f5f5f5"}
            borderRadius={1}
          >
            <MapComponent />
          </Box>
        </Flex>
        <Flex
          justifyContent={"flex-end"}
          padding={5}
          paddingRight={15}
          style={{ gap: 15 }}
        >
          <Button
            variant="secondary"
            p={1}
            fontSize={5}
            width={"100px"}
            borderRadius={1}
          >
            Accept
          </Button>
          <Button
            variant="warning"
            p={1}
            fontSize={5}
            width={"100px"}
            borderRadius={1}
          >
            Reject
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default OrderDetailComponent;
