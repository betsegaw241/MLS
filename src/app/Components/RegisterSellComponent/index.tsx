import { Formik, Form } from "formik";
import Spinner from "react-activity/dist/Spinner";
import { Button, Flex, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { RegistersellProps, initialValues } from "./types";
import ReactSelect from "../ui/Blocks/Select/ReactSelect";
import { registerSellValidationSchema } from "app/Pages/RegisterSellPage/validation";
import ScaleLoader from "react-spinners/ScaleLoader";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { drugBatch } from "utils/constants";
import { TableHeader } from "../ui/Blocks/Table";
import Paginate from "../ui/Pagination/Paginate";
import Modal from "../ui/Modal";
import { useEffect, useState } from "react";

const RegisterSellComponent = (props: RegistersellProps) => {
  const [showmodal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(false);
  }, [props.registerd]);
  return (
    <Flex
      margin={1}
      backgroundColor={"#ffff"}
      width={"100%"}
      minHeight={"100vh"}
      flexDirection={"column"}
      p={1}
      borderRadius={1}
    >
      <Text fontFamily={"poppins"} fontSize={6}>
        Sell Registration
      </Text>
      <Flex justifyContent={"center"}>
        <Flex
          flexDirection="column"
          width={"100%"}
          borderRadius={"8px"}
          p={2}
          justifyContent={"center"}
          style={{ gap: 10 }}
          pt={5}
        >
          <Text fontFamily={"poppins"} fontSize={5}>
            Select drug to add
          </Text>

          <ReactSelect
            options={props.drugs}
            setSelectedOption={(value: string) => {
              props.setDrug(value);
            }}
          ></ReactSelect>

          {props.Loading ? (
            <Flex height={300} justifyContent={"center"} alignItems={"center"}>
              <ScaleLoader color="#065AD8" height={50} width={6} />
            </Flex>
          ) : (
            <>
              {props.drugStck?.data?.length > 0 && (
                <>
                  <Text fontFamily={"poppins"}>Select Batch</Text>
                  <>
                    <Flex
                      flexDirection={"column"}
                      justifyContent={"space-between"}
                      style={{ gap: "20px" }}
                      pt={1}
                    >
                      <Paper sx={{ width: "100%", boxShadow: "none" }}>
                        <TableContainer
                          component={Paper}
                          sx={{ maxHeight: 480 }}
                        >
                          <Table
                            aria-label="a dense table"
                            size="small"
                            stickyHeader
                            sx={{ minWidth: 650 }}
                          >
                            <TableHeader columnName={drugBatch} />
                            <TableBody>
                              {props.drugStck?.data?.map((item, index) => (
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
                                    props.setBatch(item._id);
                                    setShowModal(true);
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
                                    {item.batchNumber}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      padding: 1,
                                      fontFamily: "poppins",
                                    }}
                                  >
                                    {item.quantity}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      padding: 1,
                                      fontFamily: "poppins",
                                    }}
                                  >
                                    {item.recievedFrom}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      padding: 1,
                                      fontFamily: "poppins",
                                    }}
                                  >
                                    {new Date(
                                      item.expiredDate
                                    ).toLocaleDateString("en-US", {
                                      timeZone: "UTC",
                                    })}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      padding: 1,
                                      fontFamily: "poppins",
                                    }}
                                  >
                                    {item.price}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      padding: 1,
                                      fontFamily: "poppins",
                                    }}
                                  >
                                    {item.cost}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      padding: 1,
                                      fontFamily: "poppins",
                                    }}
                                  >
                                    {item.currentQuantity}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Paper>

                      <Flex justifyContent={"flex-end"} marginRight={15}>
                        <Paginate
                          pages={props.drugStck?.totalPages}
                          handlePageChange={props.handlePageChange}
                          page={props.page}
                        />
                      </Flex>
                    </Flex>
                  </>
                  {showmodal && (
                    <Modal
                      open={showmodal}
                      setOpen={() => {
                        setShowModal(false);
                      }}
                    >
                      <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                          props.handleRegister(values);
                        }}
                        validationSchema={registerSellValidationSchema}
                      >
                        {({ handleSubmit }) => {
                          return (
                            <Form
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Flex
                                width={"40%"}
                                background={"#fff"}
                                height={200}
                                borderRadius={1}
                                justifyContent={"center"}
                                alignItems={"center"}
                                flexDirection={"column"}
                                p={2}
                              >
                                <Flex
                                  flexDirection={"column"}
                                  width={"80%"}
                                  style={{ gap: 10 }}
                                >
                                  <Flex
                                    flexDirection={"column"}
                                    width={"100%"}
                                    style={{ gap: 5 }}
                                    zIndex={100}
                                  >
                                    <InputField
                                      name={"quantity"}
                                      type={""}
                                      label="Quantity"
                                      placeholder="Enter quantity sold"
                                    />
                                  </Flex>
                                  <Flex width={"100%"} style={{ gap: 10 }}>
                                    <Button
                                      borderRadius={2}
                                      fontFamily="poppins"
                                      color="white"
                                      fontSize={5}
                                      variant="secondary"
                                      padding={1}
                                      width={"100%"}
                                      height={7}
                                      zIndex={100}
                                      onClick={() => handleSubmit()}
                                    >
                                      {props.loading ? (
                                        <Spinner
                                          style={{ marginLeft: "45%" }}
                                        />
                                      ) : (
                                        "Submit"
                                      )}
                                    </Button>
                                    <Button
                                      borderRadius={2}
                                      fontFamily="poppins"
                                      color="white"
                                      fontSize={5}
                                      variant="neuteral"
                                      padding={1}
                                      width={"100%"}
                                      height={7}
                                    >
                                      Cancel
                                    </Button>
                                  </Flex>
                                </Flex>
                              </Flex>
                            </Form>
                          );
                        }}
                      </Formik>
                    </Modal>
                  )}
                </>
              )}
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default RegisterSellComponent;
