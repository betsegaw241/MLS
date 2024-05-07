import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Box, Flex, P, Text } from "../ui/Blocks";
import { useNavigate } from "react-router";
import {TransactionTableColumns } from "utils/constants";
import { TableHeader } from "../ui/Blocks/Table";
import Search from "../ui/SearchBar";
import { FiChevronDown } from "react-icons/fi";
import { Pagination, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { Transaction, TransactionComponentProps } from "./types";

const TransactionComponent = ({
  onPageChange,
  currentPage,
  pages,
  transactions,
  onFilter,
  setQuery,
  onSearch,
}: TransactionComponentProps) => {
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
      <Flex alignItems={"center"} p={1}>
        <Flex flexDirection={"column"} paddingY={1}>
          <P margin={"0px"} padding={"0px"} fontFamily={"poppins"} fontSize={6}>
            Transactions
          </P>
          <P margin={"0px"} padding={"0px"} fontFamily={"poppins"} fontSize={1}>
            All Transactions
          </P>
        </Flex>
        <Flex
          borderRadius={"10%"}
          padding={1}
          marginLeft={'auto'}
          background={"#F9FBFF"}
          height={"40px"}
        >
          <Box onClick={() => onFilter()}>
            <Search
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onClick={() => onSearch()}
            />
          </Box>
        </Flex>
        <Flex
          borderRadius={"8px"}
          padding={1}
        
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
                <TableHeader columnName={TransactionTableColumns} />
                <TableBody>
                  {transactions &&
                    transactions.data &&
                    transactions.data.map((transaction: Transaction) => (
                      <TableRow
                        hover
                        key={transaction._id}
                        sx={{
                          "&:last-child td, &:last-child th": {
                            border: "none",
                          },
                          cursor: "pointer",
                          boxShadow: "none",
                        }}
                        onClick={() => {
                          navigate(
                            `/superadmin/transactiondetail/${transaction._id}`
                          );
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
                          {transaction.senderAccount?.accountHolderName}
                        </TableCell>
                        <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                          {transaction.receiverAccount?.accountHolderName}
                        </TableCell>

                        <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                          {transaction.senderAccount.accountNumber}
                        </TableCell>
                        <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                          {transaction.receiverAccount.accountNumber}
                        </TableCell>

                        <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                          {transaction.reason}
                        </TableCell>
                        <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                          {formatDate(transaction.createdAt)}
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

export default TransactionComponent;
