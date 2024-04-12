import { order } from "styled-system";
import { Box, Button, Flex, Grid, Text } from "../ui/Blocks";
import { GridBox } from "../ui/Blocks/GridBox";
import MapComponent from "../ui/MapComponent";
import { IorderDetailComponent } from "./types";export interface IStatus {
  status: "ACCEPTED" | "REJECTED" | "Pending";
}
const OrderDetailComponent = (props: IorderDetailComponent) => {
  const status: IStatus = { status: "Pending" };
    const { onReject } = props;


  const formatDate = (dateString: string) => {
    // Create a Date object from the provided date string
    const date = new Date(dateString);

    // Extract date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month starts from 0
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

    return formattedDate;
  };
  
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
            <GridBox lable={"Drug"} value={props.order.drug.name} />
            <GridBox lable={"Dosage"} value={"Zuma"} />
            <GridBox lable={"quantity"} value={props.order.quantity} />
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
            <GridBox lable={"Name"} value={props.order.customer.name} />
            <GridBox
              lable={"Location"}
              value={props.order.deliveryAddress.address}
            />
            <GridBox
              lable={"Phone"}
              value={props.order.deliveryAddress.phoneNumber}
            />
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
            <GridBox lable={"Due time"} value={props.order.deliveryDate} />
            <GridBox
              lable={"Order Date"}
              value={formatDate(props.order.orderedAt)}
            />
            <GridBox lable={"quantity"} value={props.order.quantity} />
            <GridBox lable={"price per unit"} value={props.order.drug.price} />
            <GridBox lable={"Total Cost"} value={props.order.drug.cost} />
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
            onClick={onReject}
          >
            Reject
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default OrderDetailComponent;
