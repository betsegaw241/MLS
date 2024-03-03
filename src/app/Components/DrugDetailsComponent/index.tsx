import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@mui/material";
import { drugDetails } from "utils/constants";
import { Box, Button, Flex, Grid, Text } from "../ui/Blocks";
import { GridBox } from "../ui/Blocks/GridBox";
import { TableHeader } from "../ui/Blocks/Table";
import MapComponent from "../ui/MapComponent";
export interface IStatus {
  status: "ACCEPTED" | "REJECTED" | "Pending";
}
const DrugDetailsComponent = () => {
  const status: IStatus = { status: "Pending" };
  const Drug = [
    {
      date: "09/35/33",
      price_per_unit: "23",
      expiration_date: "09/35/33",
      stock_Level: "40",
    },

    {
      date: "09/35/33",
      price_per_unit: "23",
      expiration_date: "09/35/33",
      min_sockLevel: "20",
      stock_Level: "40",
    },
    {
      date: "09/35/33",
      price_per_unit: "23",
      expiration_date: "09/35/33",
      min_sockLevel: "20",
      stock_Level: "40",
    },
    {
      date: "09/35/33",
      price_per_unit: "23",
      expiration_date: "09/35/33",
      min_sockLevel: "20",
      stock_Level: "40",
    },
    {
      date: "09/35/33",
      price_per_unit: "23",
      expiration_date: "09/35/33",
      min_sockLevel: "20",
      stock_Level: "40",
    },
  ];
  return (
    <Flex
      margin={2}
      backgroundColor={"#ffff"}
      width={"100%"}
      flexDirection={"column"}
      p={2}
      borderRadius={1}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={7} color={"#3d3939"} p={1}>
          Drug Details
        </Text>
      </Flex>

      <Box borderRadius={0}>
        {/*  */}
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
            <GridBox lable={"Drug"} value={"Advil 1ml"} />
            <GridBox lable={"Dosage"} value={"350mg"} />
            <GridBox lable={"Strength"} value={"5ml"} />
            <GridBox lable={"Stock level"} value={"400"} />
            <GridBox lable={"Minimum stock level"} value={"20"} />
          </Grid>
        </Box>
        <Box>
          <Text fontFamily={"poppins"} fontSize={2}>
            Batch Information
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
            <GridBox lable={"Drug"} value={"Advil 1ml"} />
            <GridBox lable={"Dosage"} value={"350mg"} />
            <GridBox lable={"Strength"} value={"5ml"} />
            <GridBox lable={"Stock level"} value={"400"} />
            <GridBox lable={"Minimum stock level"} value={"20"} />
          </Grid>
        </Box>
        <Text fontFamily={"poppins"} fontSize={2}>
          Batch Information
        </Text>
        <>
          <Flex
            flexDirection={"column"}
            height={["400px", "410px", "430px", "300px"]}
            justifyContent={"space-between"}
            pb={9}
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
                  <TableHeader columnName={drugDetails} />
                  <TableBody>
                    {Drug?.map((item) => (
                      <TableRow
                        hover
                        key={item.date}
                        sx={{
                          "&:last-child td, &:last-child th": {
                            border: "none",
                          },
                          cursor: "pointer",
                          boxShadow: "none",
                        }}
                        onClick={() => {
                          // navigate(`/pharmacist/drugdetails`);
                        }}
                      >
                        <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                          {item.date}
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
                          {item.price_per_unit}
                        </TableCell>
                        <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                          {item.expiration_date}
                        </TableCell>
                        <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                          {item.stock_Level}
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

        <Flex
          justifyContent={"flex-end"}
          padding={5}
          paddingRight={15}
          style={{ gap: 15 }}
        >
          <Button
            variant="secondary"
            p={1}
            fontSize={5}
            width={"100px"}
            borderRadius={1}
          >
            Edit
          </Button>
          <Button
            variant="warning"
            p={1}
            fontSize={5}
            width={"100px"}
            borderRadius={1}
          >
            Remove
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default DrugDetailsComponent;
