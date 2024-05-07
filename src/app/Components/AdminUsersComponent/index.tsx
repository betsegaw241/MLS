import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Flex, P, Text } from "../ui/Blocks";
import { useNavigate } from "react-router";
import { UsersList, drugTableColumn } from "utils/constants";
import { TableHeader } from "../ui/Blocks/Table";
import Search from "../ui/SearchBar";
import { useState } from "react";
import LoadingPage from "utils/LoadingPage";
import { StockComponentProps } from "./types";
import Paginate from "../ui/Pagination/Paginate";
import { IoFilter } from "react-icons/io5";
import Modal from "../ui/Modal";

const AdminUsersComponent = ({
  users,
  loading,
  setQuery,
  onSearch,
  startIndex,
  page,
  handlePageChange,
  handleFilterUser,
}: //   setMinPrice,
//   setMaxPrice,
//   setCatagory,
//  onFilter,

StockComponentProps) => {
  const navigate = useNavigate();
  const [showSortBy, setShowSortBy] = useState(false);
  const [ShowFilter, setShowFilter] = useState(false);
  return (
    <Box
      width={"100%"}
      backgroundColor={"#ffff"}
      m={1}
      borderRadius={1}
      height={"100vh"}
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
                Users
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
                onClick={() => {
                  setShowSortBy(!showSortBy);
                }}
              ></Flex>
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
                    <TableHeader
                      columnName={UsersList}
                      handleChange={handleFilterUser}
                    />
                    <TableBody>
                      {users.data?.map((item, index) => (
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
                            // navigate(`/pharmacist/drugdetails/${item._id}`);
                          }}
                        >
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {startIndex + index}
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
                            {item.name}
                          </TableCell>
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {item.email}
                          </TableCell>
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {item.phoneNumber}
                          </TableCell>
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {item.role}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>

              <Flex justifyContent={"flex-end"} marginRight={15}>
                <Paginate
                  pages={users.totalPages}
                  handlePageChange={handlePageChange}
                  page={page}
                />
              </Flex>
            </Flex>
          </>
        </>
      )}
    </Box>
  );
};

export default AdminUsersComponent;
