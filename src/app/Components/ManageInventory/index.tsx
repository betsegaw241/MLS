import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Flex, Grid, P, Text } from "../ui/Blocks";
import { useNavigate } from "react-router";
import {
  LowStockAlertColumn,
  OutOFStock,
  RecentlyAdded,
  SoonExpiring,
} from "utils/constants";
import { TableHeader } from "../ui/Blocks/Table";
import { Pagination } from "@mui/material";
import { useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import soldout from "../../../assets/images/sold.png";
import solddrug from "../../../assets/images/drugs.png";
import expired from "../../../assets/images/schedule.png";
import sonexp from "../../../assets/images/time.png";
import { InventoryComponentProps } from "./types";
import Paginate from "../ui/Pagination/Paginate";

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

const ManageInventory = ({
  drugs,
  currentPage,
  pages,
  onPageChange,
  recentlyadded,
  lowStockDrug,
  expiredDrugs,
}: InventoryComponentProps) => {
  const navigate = useNavigate();

  const contentRefs: React.RefObject<HTMLDivElement>[] = Array.from(
    { length: 4 },
    () => useRef(null)
  );

  const scrollToContent = (index: number) => () => {
    contentRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Flex
      width={"100%"}
      backgroundColor={"#ffff"}
      m={1}
      borderRadius={1}
      flexDirection={"column"}
      justifyContent={"center"}
      p={1}
      pb={200}
    >
      <Flex
        p={1}
        flexDirection={"column"}
        justifyContent={"center"}
        width={"95%"}
        alignItems={"center"}
      >
        <Flex flexDirection={"column"} paddingY={1} width={"100%"}>
          <P margin={"0px"} padding={"0px"} fontFamily={"poppins"} fontSize={6}>
            Inventory
          </P>
        </Flex>
        <Flex justifyContent={"space-around"} width={"100%"}>
          <Grid
            borderRadius={0}
            gridColumnGap={"40px"}
            gridRowGap={"15px"}
            width={"100%"}
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            mb={2}
          >
            <Flex
              width={"100%"}
              height={100}
              p={1}
              borderRadius={"4px"}
              boxShadow={"-1px 5px 8px -3px #B6BABD"}
              backgroundColor={"#B4D4FF"}
              alignItems={"center"}
              onClick={scrollToContent(0)}
            >
              <Flex>
                <img
                  src={solddrug}
                  width={50}
                  height={50}
                  style={{ opacity: 0.8 }}
                ></img>
              </Flex>
              <Flex
                flexDirection={"column"}
                width={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text fontFamily={"poppins"} fontSize={3}>
                  Low Stock Alert
                </Text>
                <Text fontFamily={"poppins"} fontSize={6}>
                  {lowStockDrug.totalDocuments}
                </Text>
              </Flex>
            </Flex>

            <Flex
              width={"100%"}
              height={100}
              p={1}
              borderRadius={"4px"}
              boxShadow={"-1px 5px 8px -3px #B6BABD"}
              backgroundColor={"#B4D4FF"}
              alignItems={"center"}
              onClick={scrollToContent(3)}
            >
              <Flex>
                <img
                  src={expired}
                  width={50}
                  height={50}
                  style={{ opacity: 1 }}
                ></img>
              </Flex>
              <Flex
                flexDirection={"column"}
                width={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text fontFamily={"poppins"} fontSize={3}>
                  Expired
                </Text>
                <Text fontFamily={"poppins"} fontSize={6}>
                  {expiredDrugs.totalDocuments}
                </Text>
              </Flex>
            </Flex>
          </Grid>
        </Flex>
        {/* -------------------------------------------------------- */}
        <Flex flexDirection={"column"} pt={1} width={"100%"}>
          <Text
            fontFamily={"poppins"}
            fontSize={5}
            p={1}
            width={"100%"}
            // backgroundColor={"#f5f5f5"}
            borderRadius={"5px"}
          >
            Recently added drugs
          </Text>

          <Flex
            flexDirection={"column"}
            p={1}
            mt={1}
            width={"100%"}
            style={{ gap: "20px" }}
            justifyContent={"center"}
          >
            <Paper sx={{ width: "100%", boxShadow: "none" }}>
              <TableContainer component={Paper} sx={{ maxHeight: 480 }}>
                <Table
                  aria-label="a dense table"
                  size="small"
                  stickyHeader
                  sx={{ minWidth: 650 }}
                >
                  <TableHeader columnName={RecentlyAdded} />
                  <TableBody>
                    {recentlyadded &&
                      recentlyadded?.map((drug) => (
                        <TableRow
                          hover
                          key={drug.id}
                          sx={{
                            "&:last-child td, &:last-child th": {
                              border: "none",
                            },
                            cursor: "pointer",
                            boxShadow: "none",
                          }}
                          onClick={() => {
                            navigate(`/pharmacist/drugdetails/${drug._id}`);
                          }}
                        >
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {new Date(drug.createdAt).toDateString()}
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
                            {drug.name}
                          </TableCell>

                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {drug.category}
                          </TableCell>
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {drug.stockLevel}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Flex>
        </Flex>
        {/* ----------------------------------------------------- */}

        <Flex
          flexDirection={"column"}
          pt={1}
          ref={contentRefs[0]}
          mt={1}
          width={"100%"}
        >
          <Text
            fontFamily={"poppins"}
            fontSize={5}
            p={1}
            width={"100%"}
            // backgroundColor={"#f5f5f5"}
            borderRadius={"5px"}
          >
            Low Stock Alert
          </Text>
          <>
            <Flex
              flexDirection={"column"}
              justifyContent={"space-between"}
              mb={5}
              p={1}
              mt={1}
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
                    <TableHeader columnName={LowStockAlertColumn} />
                    <TableBody>
                      {lowStockDrug &&
                        lowStockDrug.data?.map((drug) => (
                          <TableRow
                            hover
                            key={drug.id}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: "none",
                              },
                              cursor: "pointer",
                              boxShadow: "none",
                            }}
                            onClick={() => {
                              navigate(`/pharmacist/drugdetails/${drug._id}`);
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
                              {drug.name}
                            </TableCell>
                            <TableCell
                              sx={{ padding: 1, fontFamily: "poppins" }}
                            >
                              {drug.category}
                            </TableCell>
                            <TableCell>
                              <Text
                                fontFamily={"poppins"}
                                color={drug.balance > 10 ? "#805a0f" : "red"}
                              >
                                {drug.stockLevel}
                              </Text>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
              <ThemeProvider theme={theme}>
                <Pagination
                  count={lowStockDrug.totalPages}
                  onChange={onPageChange}
                  page={currentPage}
                  variant="outlined"
                  shape="rounded"
                />
              </ThemeProvider>
            </Flex>
          </>
        </Flex>
        {/* ----------------------------------------------- */}

        <Flex
          flexDirection={"column"}
          pt={1}
          ref={contentRefs[3]}
          width={"100%"}
        >
          <Text
            fontFamily={"poppins"}
            fontSize={5}
            p={1}
            width={"100%"}
            borderRadius={"5px"}
          >
            Expired drugs
          </Text>
          <>
            <Flex
              flexDirection={"column"}
              justifyContent={"space-between"}
              pb={6}
              style={{ gap: "20px" }}
              p={1}
              mt={1}
            >
              <Paper sx={{ width: "100%", boxShadow: "none" }}>
                <TableContainer component={Paper} sx={{ maxHeight: 480 }}>
                  <Table
                    aria-label="a dense table"
                    size="small"
                    stickyHeader
                    sx={{ minWidth: 650 }}
                  >
                    <TableHeader columnName={SoonExpiring} />
                    <TableBody>
                      {expiredDrugs?.data?.map((drug) => (
                        <TableRow
                          hover
                          key={drug.id}
                          sx={{
                            "&:last-child td, &:last-child th": {
                              border: "none",
                            },
                            cursor: "pointer",
                            boxShadow: "none",
                          }}
                          onClick={() => {
                            navigate(`/pharmacist/drugdetails/${drug._id}`);
                          }}
                        >
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {drug.category}
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
                            {drug.name}
                          </TableCell>
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {new Date(drug.createdAt).toDateString()}
                          </TableCell>
                          <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {drug.status}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>

              <ThemeProvider theme={theme}>
                <Paginate
                  pages={pages}
                  handlePageChange={onPageChange}
                  page={currentPage}
                />
              </ThemeProvider>
            </Flex>
          </>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ManageInventory;
