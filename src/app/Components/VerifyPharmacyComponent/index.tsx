import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Flex, P, Text } from "../ui/Blocks";
import { useNavigate } from "react-router";
import { UsersList, VerifypharmaciesList } from "utils/constants";
import { TableHeader } from "../ui/Blocks/Table";
import { useState } from "react";
import LoadingPage from "utils/LoadingPage";
import Paginate from "../ui/Pagination/Paginate";
import { IoFilter } from "react-icons/io5";
import { VerifypharmaciesComponentProps } from "./types";
import AdminVerifyPharmacyComponent from ".";
import Modal from "../ui/Modal";
import { ErrorMessage, Form, Formik } from "formik";
import { AssignPharmaciesValidationSchema } from "app/Pages/AdminVerifyPharmacy/validation";
import ReactSelect from "../ui/Blocks/Select/ReactSelect";
import { InputField } from "../ui/InputComponent";
import Search from "../ui/SearchBar";

const VerifyPharmacyComponent = ({
  pharmacies,
  loading,
  admins,
  setQuery,
  onSearch,
  page,
  handlePageChange,
  handleFilterUser,
  handleAssign,
  intialValues,
}: VerifypharmaciesComponentProps) => {
  const navigate = useNavigate();
  const [showSortBy, setShowSortBy] = useState(false);
  const [ShowFilter, setShowFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
                background={"#F9FBFF"}
                onClick={() => {
                  setShowSortBy(!showSortBy);
                }}
              >
                <Flex
                  flexDirection={"row"}
                  alignItems={"center"}
                  style={{ gap: 3 }}
                  onClick={() => setShowFilter(!ShowFilter)}
                >
                  <IoFilter size={20} />
                  <Text fontFamily={"poppins"} fontSize={4}>
                    Filter
                  </Text>
                </Flex>
              </Flex>
              {localStorage.getItem("role") === "superAdmin" && (
                <Text
                  backgroundColor={"#F9FBFF"}
                  p={1}
                  fontFamily={"poppins"}
                  borderRadius={1}
                  onClick={() => setShowModal(true)}
                >
                  Assign Pharmacies
                </Text>
              )}
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
                    <TableHeader columnName={VerifypharmaciesList} />
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
                          {/* <TableCell sx={{ padding: 1, fontFamily: "poppins" }}>
                            {item.}
                          </TableCell> */}
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
      {showModal && (
        <Modal
          open={showModal}
          setOpen={() => {
            setShowModal(false);
          }}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            position={"relative"}
            flexDirection={"column"}
            backgroundColor={"#fff"}
            p={1}
            borderRadius={1}
            width={"40%"}
          >
            <Text fontFamily={"poppins"} fontSize={6} p={1}>
              Assign Pharmacies
            </Text>
            <Formik
              initialValues={intialValues}
              onSubmit={(values) => {
                handleAssign(values);
                setShowModal(false);
              }}
              validationSchema={AssignPharmaciesValidationSchema}
            >
              {({ handleSubmit, setFieldValue }) => {
                return (
                  <Form style={{ width: "90%" }}>
                    <Flex
                      width={"100%"}
                      flexDirection={"column"}
                      py={1}
                      style={{ gap: 5 }}
                    >
                      <Text fontFamily={"poppins"}>Select Admin</Text>
                      <ReactSelect
                        options={admins}
                        setSelectedOption={(value: string) =>
                          setFieldValue("admin", value)
                        }
                      ></ReactSelect>
                      <Text fontFamily={"poppins"} fontSize={2} color={"red"}>
                        <ErrorMessage name="admin" />
                      </Text>
                      <Text fontFamily={"poppins"}>
                        Number of Pharmacies assigned
                      </Text>
                      <InputField name={"quantity"} type={"number"} />
                      <Flex width={"100%"} style={{ gap: 5 }}>
                        <Button
                          fontFamily={"poppins"}
                          variant="secondary"
                          p={1}
                          borderRadius={1}
                          my={1}
                          fontSize={5}
                          type="button"
                          width={"100%"}
                          onClick={() => handleSubmit()}
                        >
                          Assign
                        </Button>
                        <Button
                          fontFamily={"poppins"}
                          p={1}
                          borderRadius={1}
                          my={1}
                          fontSize={5}
                          type="button"
                          width={"100%"}
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </Button>
                      </Flex>
                    </Flex>
                  </Form>
                );
              }}
            </Formik>
          </Flex>
        </Modal>
      )}
    </Box>
  );
};

export default VerifyPharmacyComponent;
