import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Box, Flex, P, Text } from "../ui/Blocks";
import { useNavigate } from "react-router";
import { drugTableColumn } from "utils/constants";
import { TableHeader } from "../ui/Blocks/Table";
import Search from "../ui/SearchBar";
import { FiChevronDown } from "react-icons/fi";
import { Pagination, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

const StockComponent = (props: any) => {
  const navigate = useNavigate();
  const [showSortBy, setShowSortBy] = useState(false);

  // const Drug = [
  //   {
  //     id: 2,
  //     name: "Advil",
  //     strength: "120mg",
  //     dosage: "8ml",
  //     price_per_unit: "23",
  //     expiration_date: "09/35/33",
  //     min_sockLevel: "20",
  //     stock_Level: "40",
  //   },

  //   {
  //     id: 5,
  //     name: "Differin",
  //     strength: "120mg",
  //     dosage: "8ml",
  //     price_per_unit: "23",
  //     expiration_date: "09/35/33",
  //     min_sockLevel: "20",
  //     stock_Level: "40",
  //   },
  //   {
  //     id: 6,
  //     name: "Orajel",
  //     strength: "120mg",
  //     dosage: "8ml",
  //     price_per_unit: "23",
  //     expiration_date: "09/35/33",
  //     min_sockLevel: "20",
  //     stock_Level: "40",
  //   },
  //   {
  //     id: 7,
  //     name: "Clifford",
  //     strength: "120mg",
  //     dosage: "8ml",
  //     price_per_unit: "23",
  //     expiration_date: "09/35/33",
  //     min_sockLevel: "20",
  //     stock_Level: "40",
  //   },
  //   {
  //     id: 8,
  //     name: "Clifford",
  //     strength: "120mg",
  //     dosage: "8ml",
  //     price_per_unit: "23",
  //     expiration_date: "09/35/33",
  //     min_sockLevel: "20",
  //     stock_Level: "40",
  //   },
  // ];

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
            Drugs
          </P>
          <P margin={"0px"} padding={"0px"} fontFamily={"poppins"} fontSize={1}>
            All Drugs
          </P>
        </Flex>
        <Flex
          borderRadius={"10%"}
          padding={1}
          marginLeft={"40%"}
          background={"#F9FBFF"}
          height={"40px"}
        >
          {/* <Search /> */}
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
                <TableHeader columnName={drugTableColumn} />
                <TableBody>
                  {props.drugs.data?.map((item) => (
                    <TableRow
                      hover
                      key={item.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: "none" },
                        cursor: "pointer",
                        boxShadow: "none",
                      }}
                      onClick={() => {
                        navigate(`/pharmacist/drugdetails/${item._id}`);
                      }}
                    >
                      <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                        {item.id}
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
                        {item.category}
                      </TableCell>
                      <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                        {item.price}
                      </TableCell>
                      <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                        {item.stock_Level}
                      </TableCell>
                      <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                        {item.min_sockLevel}
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
                count={5}
                // onChange={}
                page={3}
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

export default StockComponent;
