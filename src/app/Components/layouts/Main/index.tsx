import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { color } from "styled-system";
import Search from "app/Components/ui/SearchBar";

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

  export default function DataTable() {
    return (
      <>
        <div style={{ display: "flex", alignItems:"center" }}>
          <div style={{ marginLeft: "30px" }}>
            <h2>Orders</h2>
            <h5 style={{ color: "blue" }}>All Orders</h5>
          </div>
          <div
            style={{
              borderRadius: "10%",
              padding: 5,
              marginLeft: "50%",
              background: "#E3E2FF",
              height: "40px",
            }}
          >
            <Search />
          </div>
        </div>
        <div style={{ height: "90%", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </>
    );
  }
