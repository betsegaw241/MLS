import { Box, Button, Flex, Grid, Text } from "../ui/Blocks";
import { GridBox } from "../ui/Blocks/GridBox";
import { ItransactionDetailComponent } from "./types";

const TransactionDetailComponent = (props: ItransactionDetailComponent) => {
 
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
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
          Transaction Details
        </Text>
      </Flex>

      <Box borderRadius={0}>
        {/*  */}
        <Box>
          <Text fontFamily={"poppins"} fontSize={2}>
            Sender Information
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
              lable={"Sender Name"}
              value={props.transaction.sender.name}
            />
            <GridBox
              lable={"Sender Email"}
              value={props.transaction.sender.email}
            />
            <GridBox
              lable={"Sender Account"}
              value={props.transaction.senderAccount.accountNumber}
            />
            <GridBox
              lable={"Account type"}
              value={props.transaction.senderAccount.accountType}
            />
            <GridBox
              lable={"Bank"}
              value={props.transaction.senderAccount.bankName}
            />
          </Grid>
        </Box>
        <Box>
          <Text fontFamily={"poppins"} fontSize={2}>
            Reciever Information
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
              lable={"Reciever Name"}
              value={props.transaction.receiver.name}
            />
            <GridBox
              lable={"Reciever Email"}
              value={props.transaction.receiver.email}
            />
            <GridBox
              lable={"Receiver Account"}
              value={props.transaction.receiverAccount.accountNumber}
            />
            <GridBox
              lable={"Account type"}
              value={props.transaction.receiverAccount.accountType}
            />
            <GridBox
              lable={"Bank"}
              value={props.transaction.receiverAccount.bankName}
            />
          </Grid>
        </Box>

        <Box>
          <Text fontFamily={"poppins"} fontSize={2}>
            Transaction Information
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
              lable={"Reason"}
              value={props.transaction.reason}
            />
            <GridBox
              lable={"Created At"}
              value={formatDate(props.transaction.createdAt)}
            />
          </Grid>
        </Box>
        {/* <Flex
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
            //onClick={onReject}
          >
            Reject
          </Button>
        </Flex> */}
      </Box>
    </Flex>
  );
};

export default TransactionDetailComponent;
