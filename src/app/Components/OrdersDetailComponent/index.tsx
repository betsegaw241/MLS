import Spinner from "react-activity/dist/Spinner";
import { Box, Button, Flex, Grid, Text } from "../ui/Blocks";
import { GridBox } from "../ui/Blocks/GridBox";
import MapComponent from "../ui/MapComponent";
import { IorderDetailComponent } from "./types";
export interface IStatus {
  status: "ACCEPTED" | "REJECTED" | "Pending";
}
const OrderDetailComponent = (props: IorderDetailComponent) => {
  const status: IStatus = { status: "Pending" };
  const coord = props.order?.deliveryAddress?.location?.coordinates;
  const pharmacylocation = props.order?.pharmacy?.location?.coordinates;
  let newCoord;
  let center;

  if (newCoord) {
    newCoord = [coord[1], coord[0]];
  }

  if (pharmacylocation) {
    center = [pharmacylocation[1], pharmacylocation[0]];
  }
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
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
            <GridBox
              lable={"Drugs"}
              value={props.order.drugs?.map((drug) => drug.drugName).join(", ")}
            />
            <GridBox lable={"Dosage"} value={"Zuma"} />
            <GridBox lable={"quantity"} value={props.order?.quantity} />
            <GridBox lable={"Drug"} value={"Zuma"} />
            <GridBox lable={"Status"} value={props.order?.status} />
            <GridBox
              lable={"Pharmacy Name"}
              value={props.order?.pharmacy?.name}
            />
          </Grid>
        </Box>
        <Box>
          <Text fontFamily={"poppins"} fontSize={2}>
            Customer Information
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
            <GridBox
              lable={"Customer Name"}
              value={props.order?.customer?.name}
            />

            <GridBox
              lable={"Address"}
              value={props.order?.deliveryAddress?.address}
            />
            <GridBox
              lable={"Phone"}
              value={props.order?.deliveryAddress?.phoneNumber}
            />
            <GridBox lable={"Email"} value={props.order?.customer?.email} />
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
            <GridBox
              lable={"DeliveryExpireDate"}
              value={formatDate(props.order?.deliveryExpireDate)}
            />
            <GridBox
              lable={"Has Delivery"}
              value={props.order?.hasDelivery == true ? "Yes" : "No"}
            />
            <GridBox
              lable={"Delivery Fee"}
              value={Math.round(props.order?.deliveryFee) + " ETB"}
            />
            <GridBox
              lable={"Total Cost"}
              value={props.order?.totalCost + " ETB"}
            />
            <GridBox
              lable={"Total Amount"}
              value={Math.round(props.order?.totalAmount) + " ETB"}
            />{" "}
            <GridBox
              lable={"Profit"}
              value={Math.round(props.order?.profit) + " ETB"}
            />
            <GridBox
              lable={"Delivery Price Per Km"}
              value={Math.round(props.order?.deliveryPricePerKm) + " ETB"}
            />
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
            {coord && (
              <MapComponent
                position={[coord[1], coord[0]]}
                deliveryCoverage={props.pharmacy?.deliveryCoverage}
                center={center}
              />
            )}
          </Box>
        </Flex>
        <Flex
          justifyContent={"flex-end"}
          padding={5}
          paddingRight={15}
          style={{ gap: 15 }}
        >
          {props.order.status === ("pending" || "Pending" || "PENDING") && (
            <Button
              variant="secondary"
              p={1}
              fontSize={5}
              width={"100px"}
              borderRadius={1}
              onClick={() => props.onAcceptClick()}
            >
              {props.isUpdating ? (
                <Spinner style={{ marginLeft: "45%" }} />
              ) : (
                "Accept"
              )}
            </Button>
          )}
          {props.order.status === ("pending" || "Pending" || "PENDING") && (
            <Button
              variant="warning"
              p={1}
              fontSize={5}
              width={"100px"}
              borderRadius={1}
              onClick={() => props.onRejectClick()}
            >
              Reject
            </Button>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default OrderDetailComponent;
