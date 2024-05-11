import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Box, Flex, P } from "../ui/Blocks";
import { useNavigate } from "react-router";
import { OrderTableColumns } from "utils/constants";
import { TableHeader } from "../ui/Blocks/Table";
import Search from "../ui/SearchBar";
import { Pagination, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { Order, OrderComponentProps } from "./types";

const OrderComponent = ({
  onPageChange,
  currentPage,
  pages,
  orders,
  onFilter,
  setQuery,
  onSearch,
}: OrderComponentProps) => {
  const navigate = useNavigate();
  const [showSortBy, setShowSortBy] = useState(false);
  const theme = createTheme({
    components: {
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color: "#fff",
              backgroundColor: "blue",
            },
          },
        },
      },
    },
  });
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
    <Box
      width={"100%"}
      backgroundColor={"#ffff"}
      m={1}
      borderRadius={1}
      height={"100vh"}
      p={1}
    >
      <Flex alignItems={"center"} p={1} justifyContent={'space-between'}>
          <P margin={"0px"} padding={"0px"} fontFamily={"poppins"} fontSize={6}>
            Orders
          </P>
         
     
        <Flex
          borderRadius={"10%"}
          padding={1}
          background={"#F9FBFF"}
          height={"40px"}
        >
          <Box>
            <Search
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onClick={() => onSearch()}
            />
          </Box>
        </Flex>
       
      </Flex>
      <>
        <Flex
          flexDirection={"column"}
          height={["400px", "410px", "430px", "550px"]}
          justifyContent={"space-between"}
          pb={9}
          style={{ gap: "20px" }}
        >
          <Paper sx={{ width: "100%", boxShadow: "none" }}>
            <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
              <Table
                aria-label="a dense table"
                size="small"
                stickyHeader
                sx={{ minWidth: 650 }}
              >
                <TableHeader
                  columnName={OrderTableColumns}
                  handleChange={onFilter}
                />
                <TableBody>
                  {orders.data?.map((order: Order) => (
                    <TableRow
                      hover
                      key={order._id}
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
                          padding: "2px",
                          height: "2px",
                          fontFamily: "poppins",
                        }}
                      >
                        {order.customer.name}
                      </TableCell>
                      <TableCell sx={{ padding: 1.8, fontFamily: "poppins" }}>
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
            <ThemeProvider theme={theme}>
              <Pagination
                count={pages}
                onChange={onPageChange}
                page={currentPage}
                variant="outlined"
                shape="rounded"
              />
            </ThemeProvider>
          </Flex>
        </Flex>
      </>
    </Box>
  );
};

export default OrderComponent;
