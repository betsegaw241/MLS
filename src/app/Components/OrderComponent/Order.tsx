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

export default function ColumnGroupingTable() {
  const navigate = useNavigate();
  const [showSortBy, setShowSortBy] = useState(false);

  const loanOffers = [
    {
      id: 1,
      name: "Beka",
      drug: "Advil",
      phone: "0935354",
      location: "A.A",
      time: "4:30 PM",
      status: "Pending",
    },
    {
      id: 2,
      name: "Toltu",
      drug: "Differin",
      phone: "092535454",
      location: "Wolkite",
      time: "4:30 PM",
      status: "Rejected",
    },
    {
      id: 3,
      name: "Desta",
      drug: "Orajel",
      phone: "093535421",
      location: "Dire",
      time: "4:30 PM",
      status: "ACCEPTED",
    },
    {
      id: 4,
      name: "Damtew",
      drug: "Advil",
      phone: "091535488",
      location: "A.A",
      time: "4:30 PM",
      status: "Pending",
    },
    {
      id: 5,
      name: "Getu",
      drug: "Differin",
      phone: "095535477",
      location: "Gubrye",
      time: "4:30 PM",
      status: "Pending",
    },
    {
      id: 6,
      name: "Roba",
      drug: "Advil",
      phone: "093535455",
      location: "Adama",
      time: "4:30 PM",
      status: "REJECTED",
    },
    {
      id: 7,
      name: "Iskindir",
      drug: "Clifford",
      phone: "093535433",
      location: "Bahirdar",
      time: "4:30 PM",
      status: "ACCEPTED",
    },
    {
      id: 8,
      name: "Iskindir",
      drug: "Clifford",
      phone: "093535433",
      location: "Bahirdar",
      time: "4:30 PM",
      status: "ACCEPTED",
    },
  ];

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
          <Search />
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
            <TableContainer component={Paper} sx={{ maxHeight: 480 }}>
              <Table
                aria-label="a dense table"
                size="small"
                stickyHeader
                sx={{ minWidth: 650 }}
              >
                <TableHeader columnName={OrderTableColumns} />
                <TableBody>
                  {loanOffers?.map((loanOffer) => (
                    <TableRow
                      hover
                      key={loanOffer.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: "none" },
                        cursor: "pointer",
                        boxShadow: "none",
                      }}
                      onClick={() => {
                        navigate(`/pharmacist/inventory/orderdetail`);
                      }}
                    >
                      <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                        {loanOffer.id}
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
                        {loanOffer.name}
                      </TableCell>
                      <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                        {loanOffer.drug}
                      </TableCell>
                      <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                        {loanOffer.location}
                      </TableCell>
                      <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                        {loanOffer.time}
                      </TableCell>
                      <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                        {loanOffer.phone}
                      </TableCell>
                      <TableCell
                        sx={{
                          color:
                            loanOffer.status === "ACCEPTED"
                              ? "#558E5B"
                              : loanOffer.status === "REJECTED"
                              ? "#F84F4F"
                              : "#2684FF",
                          fontFamily: "poppins",
                        }}
                      >
                        {loanOffer.status}
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
}
