import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Box, Flex, P, Text } from "../ui/Blocks";
import { useNavigate } from "react-router";
import { VerifypharmaciesList } from "utils/constants";
import { TableHeader } from "../ui/Blocks/Table";
import LoadingPage from "utils/LoadingPage";
import Paginate from "../ui/Pagination/Paginate";
import Search from "../ui/SearchBar";
import { adminDashboardComponentProps } from "../AdminPharmaciesComponent/types";
import BasicBars from "../ui/Charts/BarChart";

const AdminDashboardComponent = ({
  pharmacies,
  loading,
  setQuery,
  onSearch,
  page,
  handlePageChange,
  handleFilterUser,
}: adminDashboardComponentProps) => {
  const navigate = useNavigate();

  return (
    <Box
      width={"100%"}
      backgroundColor={"#ffff"}
      m={1}
      borderRadius={1}
      minHeight={"100vh"}
      p={1}
    >
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Flex alignItems={"center"} paddingY={1}>
            <P
              margin={"0px"}
              padding={"0px"}
              fontFamily={"poppins"}
              fontSize={6}
            >
              Dashboard
            </P>
          </Flex>
          <Text fontFamily={"poppins"}>Approved Pharmacis</Text>
          <Flex width={"100%"} height={500}>
            <BasicBars label={["Assigned", "Accepted", "Rejected"]} />
          </Flex>
          <Text fontFamily={"poppins"}>Activities</Text>

          <Flex
            alignItems={"center"}
            p={1}
            justifyContent={"space-between"}
            style={{ gap: 10 }}
          >
            <Flex alignItems={"center"} paddingY={1}></Flex>

            <Flex style={{ gap: 10 }} alignItems={"center"}>
              <Flex background={"#F9FBFF"} height={"40px"} padding={"4px"}>
                <Search
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  onClick={() => onSearch()}
                />
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
                    <TableHeader
                      columnName={VerifypharmaciesList}
                      handleChange={handleFilterUser}
                    />
                    <TableBody>
                      {pharmacies.data?.map((item, index) => (
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
                            navigate(`/verifyPharmacy/${item._id}`);
                            // navigate(`/pharmacist/drugdetails/${item._id}`);
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
                            {item.email}
                          </TableCell>
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {item.phone}
                          </TableCell>
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {item.status}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>

              <Flex justifyContent={"flex-end"} marginRight={15}>
                <Paginate
                  pages={pharmacies.totalPages}
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

export default AdminDashboardComponent;
