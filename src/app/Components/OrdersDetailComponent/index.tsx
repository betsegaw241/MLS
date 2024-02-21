import { Box, Button, Flex, Grid, Text } from "../ui/Blocks";
import { GridBox } from "../ui/Blocks/GridBox";
import MapComponent from "../ui/MapComponent";
export interface IStatus{
  status: "ACCEPTED" | "REJECTED" | "Pending"
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
        <Text fontSize={7}> Order Details</Text>
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
          <Text fontFamily={"poppins"}>Drug Information</Text>
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
            <GridBox lable={"Name"} value={"Zuma"} />
            <GridBox lable={"Dosage"} value={"Zuma"} />
            <GridBox lable={"quantity"} value={"Zuma"} />
            <GridBox lable={"Drug"} value={"Zuma"} />
          </Grid>
        </Box>
        <Box>
          <Text fontFamily={"poppins"}>Client Information</Text>
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
            <GridBox lable={"Name"} value={"Zuma"} />
            <GridBox lable={"Location"} value={"Zuma"} />
            <GridBox lable={"Phone"} value={"Zuma"} />
            <GridBox lable={"Drug"} value={"Zuma"} />
          </Grid>
        </Box>
        <Box>
          <Text fontFamily={"poppins"}>Delivery Information</Text>
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
            <GridBox lable={"Distance"} value={"Zuma"} />
            <GridBox lable={"Due time"} value={"Zuma"} />
            <GridBox lable={"quantity"} value={"Zuma"} />
            <GridBox lable={"Drug"} value={"Zuma"} />
          </Grid>
        </Box>
        <Flex flexDirection={"column"}>
          <Text fontFamily={"poppins"}>Delivery Location</Text>
          <Box
            width={"100%"}
            height={"300px"}
            backgroundColor={"#f5f5f5f5"}
            borderRadius={1}
          >
            <MapComponent />
          </Box>
        </Flex>
        <Flex justifyContent={"flex-end"} padding={5} paddingRight={15} style={{gap:15}}>
          <Button variant="secondary" p={1} fontSize={5} width={'100px'} borderRadius={1}>
            Accept
          </Button>
          <Button variant="warning" p={1} fontSize={5}  width={'100px'} borderRadius={1}>
            Reject
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default OrderDetailComponent;
