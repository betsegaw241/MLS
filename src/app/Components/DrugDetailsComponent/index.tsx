import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { drugBatch } from "utils/constants";
import { Box, Flex, Grid, P, Text } from "../ui/Blocks";
import { GridBox } from "../ui/Blocks/GridBox";
import { TableHeader } from "../ui/Blocks/Table";
import { DrugDetailComponent } from "./types";
import LoadingPage from "utils/LoadingPage";
import Paginate from "../ui/Pagination/Paginate";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router";
export interface IStatus {
  status: "ACCEPTED" | "REJECTED" | "Pending";
}

const DrugDetailsComponent = ({
  drug,
  drugStock,
  loading,
  page,
  handlePageChange,
}: DrugDetailComponent) => {
  const navigate = useNavigate();

  return (
    <Flex
      margin={2}
      backgroundColor={"#ffff"}
      width={"100%"}
      flexDirection={"column"}
      p={2}
      borderRadius={1}
    >
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text fontSize={7} color={"#3d3939"} p={1}>
              Drug Details
            </Text>
            <Flex
              style={{ gap: 5 }}
              border={"1px #B4D4FF solid"}
              justifyContent={"center"}
              alignItems={"center"}
              p={"5px"}
              mr={5}
              width={80}
              borderRadius={5}
              onClick={() => {
                navigate(`/pharmacist/drug/edit/${drug._id}`);
              }}
            >
              <P
                fontFamily={"poppins"}
                padding={"0px"}
                margin={"0px"}
                fontSize={3}
              >
                Edit
              </P>

              <MdEdit color="#B4D4FF" />
            </Flex>
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
                    justifyContent={"space-between"}
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
                          <TableHeader columnName={drugBatch} />
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
                                  component="th"
                                  scope="row"
                                  sx={{
                                    padding: "10px",
                                    height: "0px",
                                    fontFamily: "poppins",
                                  }}
                                >
                                  {item.batchNumber}
                                </TableCell>
                                <TableCell
                                  sx={{ padding: 1, fontFamily: "poppins" }}
                                >
                                  {item.quantity}
                                </TableCell>
                                <TableCell
                                  sx={{ padding: 1, fontFamily: "poppins" }}
                                >
                                  {item.recievedFrom}
                                </TableCell>
                                <TableCell
                                  sx={{ padding: 1, fontFamily: "poppins" }}
                                >
                                  {new Date(
                                    item.expiredDate
                                  ).toLocaleDateString("en-US", {
                                    timeZone: "UTC",
                                  })}
                                </TableCell>
                                <TableCell
                                  sx={{ padding: 1, fontFamily: "poppins" }}
                                >
                                  {item.price}
                                </TableCell>
                                <TableCell
                                  sx={{ padding: 1, fontFamily: "poppins" }}
                                >
                                  {item.cost}
                                </TableCell>
                                <TableCell
                                  sx={{ padding: 1, fontFamily: "poppins" }}
                                >
                                  {new Date(item.createdAt).toLocaleDateString(
                                    "en-US",
                                    { timeZone: "UTC" }
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Paper>

                    <Flex justifyContent={"flex-end"} marginRight={15}>
                      <Paginate
                        pages={drugStock.totalPages}
                        handlePageChange={handlePageChange}
                        page={page}
                      />
                    </Flex>
                  </Flex>
                </>
              </>
            ) : null}
          </Box>
        </>
      )}
    </Flex>
  );
};

export default DrugDetailsComponent;
