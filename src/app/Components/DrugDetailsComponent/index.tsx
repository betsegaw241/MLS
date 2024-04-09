import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@mui/material";
import { drugDetails } from "utils/constants";
import { Box, Button, Flex, Grid, P, Text } from "../ui/Blocks";
import { GridBox } from "../ui/Blocks/GridBox";
import { TableHeader } from "../ui/Blocks/Table";
import { DrugDetailComponent } from "./types";
export interface IStatus {
  status: "ACCEPTED" | "REJECTED" | "Pending";
}

const DrugDetailsComponent = ({ drug, drugStock }: DrugDetailComponent) => {
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
        <Text fontSize={7} color={"#3d3939"} p={1}>
          Drug Details
        </Text>
      </Flex>

      <Box borderRadius={0}>
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
            <GridBox lable={"Drug"} value={drug.name} />
            <GridBox lable={"Category"} value={drug.category} />
            <GridBox lable={"Stock level"} value={drug.stockLevel} />
            <GridBox lable={"Strength"} value={"5ml"} />
            <GridBox lable={"Minimum stock level"} value={"20"} />
          </Grid>
        </Box>
        <Flex
          flexDirection={"column"}
          p={1}
          border={"1px solid #f5f5f5f5"}
          borderRadius={1}
        >
          <Text fontFamily={"poppins"} fontSize={2}>
            Instructions
          </Text>
          <P fontFamily={"poppins"} fontSize={4}>
            {drug.instruction}
          </P>
        </Flex>
        <Flex
          flexDirection={"column"}
          p={1}
          border={"1px solid #f5f5f5f5"}
          my={1}
          borderRadius={1}
        >
          <Text fontFamily={"poppins"} fontSize={2}>
            Side Effects
          </Text>
          <P fontFamily={"poppins"} fontSize={4}>
            {drug.sideEffects}
          </P>
        </Flex>

        {drugStock ? (
          <>
            <Text fontFamily={"poppins"} fontSize={2}>
              Batch Information
            </Text>
            <>
              <Flex
                flexDirection={"column"}
                height={["400px", "410px", "430px", "300px"]}
                justifyContent={"space-between"}
                pb={9}
                style={{ gap: "20px" }}
                pt={1}
              >
                <Paper sx={{ width: "100%", boxShadow: "none" }}>
                  <TableContainer component={Paper} sx={{ maxHeight: 480 }}>
                    <Table
                      aria-label="a dense table"
                      size="small"
                      stickyHeader
                      sx={{ minWidth: 650 }}
                    >
                      <TableHeader columnName={drugDetails} />
                      <TableBody>
                        {drugStock.data?.map((item, index) => (
                          <TableRow
                            hover
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: "none",
                              },
                              cursor: "pointer",
                              boxShadow: "none",
                            }}
                            onClick={() => {
                              //  navigate(`/pharmacist/drugdetails`);
                            }}
                          >
                            <TableCell
                              sx={{ padding: 1, fontFamily: "poppins" }}
                            >
                              {item.batchNumber}
                            </TableCell>

                            <TableCell
                              component="th"
                              scope="row"
                              sx={{
                                padding: "10px",
                                height: "0px",
                                fontFamily: "poppins",
                              }}
                            >
                              {item.quantity}
                            </TableCell>
                            <TableCell
                              sx={{ padding: 1, fontFamily: "poppins" }}
                            >
                              {item.cost}
                            </TableCell>
                            <TableCell
                              sx={{ padding: 1, fontFamily: "poppins" }}
                            >
                              {item.price}
                            </TableCell>
                            <TableCell
                              sx={{ padding: 1, fontFamily: "poppins" }}
                            >
                              {item.expiredDate}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>

                <Flex justifyContent={"flex-end"} marginRight={15}>
                  <Pagination
                    count={5}
                    // onChange={}
                    page={3}
                    variant="outlined"
                  />
                </Flex>
              </Flex>
            </>
          </>
        ) : null}

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
            Edit
          </Button>
          <Button
            variant="warning"
            p={1}
            fontSize={5}
            width={"100px"}
            borderRadius={1}
          >
            Remove
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default DrugDetailsComponent;
