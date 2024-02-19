import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { color } from "styled-system";
import Search from "app/Components/ui/SearchBar";
import { getMenu } from "utils/getMenu";
import { Box, Button, Flex, Text } from "app/Components/ui/Blocks";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "name", headerName: "Customer Name", width: 180 },
  { field: "drug", headerName: "Drug", width: 180 },
  { field: "phone", headerName: "Phone Number", width: 180 },
  {
    field: "location",
    headerName: "Location",
    type: "string",
    width: 180,
  },
  {
    field: "time",
    headerName: "Time",
    width: 180,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
  },
];

const rows = [
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
    status: "Accepted",
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
    status: "Rejected",
  },
  {
    id: 7,
    name: "Iskindir",
    drug: "Clifford",
    phone: "093535433",
    location: "Bahirdar",
    time: "4:30 PM",
    status: "Accepted",
  },
  {
    id: 8,
    name: "Moti",
    drug: "Differin",
    phone: "096535422",
    location: "Nekemte",
    time: "4:30 PM",
    status: "Accepted",
  },
  {
    id: 9,
    name: "Lenco",
    drug: "Advil",
    phone: "093735411",
    location: "Hawasa",
    time: "4:30 PM",
    status: "Accepted",
  },
];

export default function OrderComponent() {
  const [showSortBy, setShowSortBy] = useState(false);

  return (
    <>
      <Box
        height={"84%"}
        width={"84%"}
        marginLeft={["55px", "200px", "200px", "15%"]}
        marginTop={"70px"}
      >
        <Flex style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginLeft: "30px" }}>
            <h2>Orders</h2>
            <h5 style={{ color: "blue" }}>All Orders</h5>
          </div>
          <Flex
            borderRadius={"10%"}
            padding={2}
            marginLeft={"40%"}
            background={"#F9FBFF"}
            height={"40px"}
          >
            <Search />
          </Flex>
          <Flex
            borderRadius={"10%"}
            padding={2}
            marginLeft={"10%"}
            background={"#F9FBFF"}
            height={"40px"}
            onClick={() => {
              setShowSortBy(!showSortBy);
            }}
          >
            <Flex flexDirection={"row"}>
              <Text marginRight={"14px"} fontSize={4}>
                Sort by : Newest
              </Text>

              <FiChevronDown fontSize={24} />
            </Flex>
          </Flex>
        </Flex>
        <Flex height={"90%"} width={"100%"}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </Flex>
      </Box>
      {showSortBy && (
        <Box
          backgroundColor={"#fff"}
          border={"1px solid #dbdbdb"}
          borderRadius={2}
          position={"fixed"}
          right={"1%"}
          top={"20%"}
          margin={"4px"}
          padding={"10px"}
          width={["200px", "200px", "200px"]}
        >
          <Flex
            flexDirection={"column"}
            p={1}
            borderRadius={1}
            pl={3}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowSortBy(false);
            }}
          >
            <Text
              color={"#303030"}
              fontFamily={"Poppins"}
              fontSize={2}
              padding={1}
              fontWeight={3}
              lineHeight={1}
              hover={{
                backgroundColor: "#E5D4FF",
              }}
              onClick={() => {
                setShowSortBy(false);
              }}
            >
              Sort by: Newest
            </Text>
            <Text
              color={"#303030"}
              fontFamily={"Poppins"}
              fontSize={2}
              padding={1}
              fontWeight={3}
              lineHeight={1}
              hover={{
                backgroundColor: "#E5D4FF",
              }}
            >
              Sort by: Oldest
            </Text>
            <Text
              color={"#303030"}
              fontFamily={"Poppins"}
              fontSize={2}
              padding={1}
              fontWeight={3}
              lineHeight={1}
              hover={{
                backgroundColor: "#E5D4FF",
              }}
            >
              Sort by: Pending status
            </Text>
          </Flex>
        </Box>
      )}
    </>
  );
}
