import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Flex, P, Text } from "../ui/Blocks";
import { useNavigate } from "react-router";
import { drugTableColumn } from "utils/constants";
import { TableHeader } from "../ui/Blocks/Table";
import Search from "../ui/SearchBar";
import { useState } from "react";
import LoadingPage from "utils/LoadingPage";
import { StockComponentProps } from "./types";
import Paginate from "../ui/Pagination/Paginate";
import { IoFilter } from "react-icons/io5";
import Modal from "../ui/Modal";

const StockComponent = ({
  drugs,
  loading,
  setQuery,
  onSearch,
  page,
  handlePageChange,
  setMinPrice,
  setMaxPrice,
  setCatagory,
  onFilter,
}: StockComponentProps) => {
  const navigate = useNavigate();
  const [showSortBy, setShowSortBy] = useState(false);
  const [ShowFilter, setShowFilter] = useState(false);
  return (
    <Box
      width={"100%"}
      backgroundColor={"#ffff"}
      m={1}
      borderRadius={1}
      // height={"100vh"}
      minHeight={"100vh"}
      p={1}
    >
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Flex
            alignItems={"center"}
            p={1}
            justifyContent={"space-between"}
            style={{ gap: 10 }}
          >
            <Flex alignItems={"center"} paddingY={1}>
              <P
                margin={"0px"}
                padding={"0px"}
                fontFamily={"poppins"}
                fontSize={6}
              >
                Drugs
              </P>
            </Flex>
            <Flex style={{ gap: 10 }}>
              <Flex background={"#F9FBFF"} height={"40px"} padding={"4px"}>
                <Search
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  onClick={() => onSearch()}
                />
              </Flex>

              <Flex
                borderRadius={"8px"}
                paddingX={1}
                background={"#F9FBFF"}
                onClick={() => {
                  setShowSortBy(!showSortBy);
                }}
              >
                
                <Flex
                  flexDirection={"row"}
                  alignItems={"center"}
                  style={{ gap: 3 }}
                  onClick={() => setShowFilter(!ShowFilter)}
                >
                  <IoFilter size={20} />
                  <Text fontFamily={"poppins"} fontSize={4}>
                    Filter
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <>
            <Flex
              flexDirection={"column"}
              justifyContent={"space-between"}
              style={{ gap: "20px" }}
            >
              <Paper sx={{ width: "100%", boxShadow: "none" }}>
                <TableContainer component={Paper} sx={{ maxHeight: 700 }}>
                  <Table
                    aria-label="a dense table"
                    size="small"
                    stickyHeader
                    sx={{ minWidth: 650 }}
                  >
                    <TableHeader columnName={drugTableColumn} />
                    <TableBody>
                      {drugs.data?.map((item, index) => (
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
                            navigate(`/pharmacist/drugdetails/${item._id}`);
                          }}
                        >
                          {/* <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {index}
                          </TableCell> */}

                          <TableCell
                            component="th"
                            scope="row"
                            sx={{
                              padding: "10px",
                              height: "0px",
                              fontFamily: "poppins",
                            }}
                          >
                            {item.name}
                          </TableCell>
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {item.category}
                          </TableCell>
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {item.price}
                          </TableCell>
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {item.stockLevel}
                          </TableCell>
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {item.minStockLevel}
                          </TableCell>
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {item.needPrescription}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>

              <Flex justifyContent={"flex-end"} marginRight={15}>
                <Paginate
                  pages={drugs.totalPages}
                  handlePageChange={handlePageChange}
                  page={page}
                />
              </Flex>
            </Flex>
          </>
        </>
      )}

      {ShowFilter && (
        <Box>
          <Modal
            open={ShowFilter}
            setOpen={() => setShowFilter(!ShowFilter)}
            background="transparent"
          >
            <Box
              backgroundColor={"#fff"}
              border={"1px solid #dbdbdb"}
              borderRadius={"8px"}
              position={"fixed"}
              right={"15px"}
              top={"150px"}
              margin={"4px"}
              boxShadow={"-1px 5px 6px -5px rgba(0,0,0,0.75)"}
              width={["30%", "30%", "15%"]}
              p={1}
            >
              <Flex flexWrap={"wrap"} style={{ gap: 8 }}>
                <Flex flexDirection={"column"} width={"100%"}>
                  <Text fontFamily={"poppins"} fontSize={2}>
                    Catagory
                  </Text>
                  <input
                    name="catagory"
                    type={"text"}
                    onChange={(e) => setCatagory(e.target.value)}
                    style={{
                      fontFamily: "poppins",
                      borderRadius: "4px",
                      border: "1px solid #C7C7C7",
                      outline: "none",
                      padding: "4px",
                    }}
                  />
                </Flex>

                <Flex flexDirection={"column"} width={"100%"}>
                  <Text fontFamily={"poppins"} fontSize={2}>
                    Minimum Price
                  </Text>
                  <input
                    name="minPrice"
                    type={"text"}
                    onChange={(e) => setMinPrice(e.target.value)}
                    style={{
                      fontFamily: "poppins",
                      borderRadius: "4px",
                      border: "1px solid #C7C7C7",
                      outline: "none",
                      padding: "4px",
                    }}
                  />
                </Flex>

                <Flex flexDirection={"column"} width={"100%"}>
                  <Text fontFamily={"poppins"} fontSize={2}>
                    Maximum Price
                  </Text>
                  <input
                    name="maxPrice"
                    type={"text"}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    style={{
                      fontFamily: "poppins",
                      borderRadius: "4px",
                      border: "1px solid #C7C7C7",
                      outline: "none",
                      padding: "4px",
                    }}
                  />
                </Flex>

                <Button
                  type="button"
                  variant="secondary"
                  p={1}
                  width={"100%"}
                  borderRadius={"8px"}
                  fontFamily={"poppins"}
                  onClick={() => onFilter()}
                >
                  submit
                </Button>
              </Flex>
            </Box>
          </Modal>
        </Box>
      )}
    </Box>
  );
};

export default StockComponent;
