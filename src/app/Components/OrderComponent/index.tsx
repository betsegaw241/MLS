import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Box, Flex, P, Text } from "../ui/Blocks";
import { useNavigate } from "react-router";
import { OrderTableColumns } from "utils/constants";
import { TableHeader } from "../ui/Blocks/Table";
import Search from "../ui/SearchBar";
import { FiChevronDown } from "react-icons/fi";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { Iorder, OrderComponentProps } from "./types";

const OrderComponent = (props: OrderComponentProps) => {
  const navigate = useNavigate();
  const [showSortBy, setShowSortBy] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter orders based on search term
  const filteredOrders = props.orders.filter(
    (order: Iorder) =>
      searchTerm.trim() === "" ||
      order.drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.deliveryAddress.address
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const handleSearch = () => {
    // Perform search-related actions here
  };

  return (
    <Box
      width={"100%"}
      backgroundColor={"#ffff"}
      m={1}
      borderRadius={1}
      height={"100vh"}
      p={1}
    >
      <Flex alignItems={"center"} p={1}>
        <Flex flexDirection={"column"} paddingY={1}>
          <P margin={"0px"} padding={"0px"} fontFamily={"poppins"} fontSize={6}>
            Orders
          </P>
          <P margin={"0px"} padding={"0px"} fontFamily={"poppins"} fontSize={1}>
            All Orders
          </P>
        </Flex>
        <Flex
          borderRadius={"10%"}
          padding={1}
          marginLeft={"40%"}
          background={"#F9FBFF"}
          height={"40px"}
        >
          <Box
            onClick={() => {
              console.log("data", props.orders);
              console.log("search button clicked.");
            }}
          >
            <Search
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={handleSearch}
            />
          </Box>
        </Flex>
        <Flex
          borderRadius={"8px"}
          padding={1}
          marginLeft={"10%"}
          background={"#F9FBFF"}
          onClick={() => {
            setShowSortBy(!showSortBy);
          }}
        >
          <Flex flexDirection={"row"}>
            <Text fontFamily={"poppins"} fontSize={2}>
              Filter by : Newest
            </Text>

            <FiChevronDown fontSize={20} />
          </Flex>
        </Flex>
      </Flex>
      <>
        <Flex
          flexDirection={"column"}
          height={["400px", "410px", "430px", "300px"]}
          justifyContent={"space-between"}
          pb={9}
          style={{ gap: "20px" }}
        >
          <Paper sx={{ width: "100%", boxShadow: "none" }}>
            <TableContainer component={Paper} sx={{ maxHeight: 558 }}>
              <Table
                aria-label="a dense table"
                size="small"
                stickyHeader
                sx={{ minWidth: 650 }}
              >
                <TableHeader columnName={OrderTableColumns} />
                <TableBody>
                  {filteredOrders.map((order: Iorder) => (
                    <TableRow
                      hover
                      key={order.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: "none" },
                        cursor: "pointer",
                        boxShadow: "none",
                      }}
                      onClick={() => {
                        navigate(`/pharmacist/orderdetail/${order._id}`);
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
                        {order.customer.name}
                      </TableCell>
                      <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                        {order.drug.name}
                      </TableCell>
                      <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                        {order.customer.email}
                      </TableCell>
                      <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                        {order.deliveryAddress.address}
                      </TableCell>
                      <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                        {formatDate(order.createdAt)}
                      </TableCell>
                      <TableCell
                        sx={{
                          color:
                            order.status === "accepted"
                              ? "#12e528"
                              : order.status === "aborted"
                              ? "#F84F4F"
                              : "#9b9999",
                          fontFamily: "poppins",
                        }}
                      >
                        {order.status}
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
    </Box>
  );
};

export default OrderComponent;
