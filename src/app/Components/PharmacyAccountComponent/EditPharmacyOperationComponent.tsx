import { ErrorMessage, Form, Formik } from "formik";
import { Button, Flex, Grid, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import Dropdown from "../ui/Blocks/Dropdown";
import {
  editDeliveryInformationValidation,
  editPharmacyIntialValues,
} from "app/Pages/PharmacyAccountPage/validation";

const EditPharmacyOperationsComponent = (props: any) => {
  const [ischecked, setIsChecked] = useState(props.pharmacy.hasDeliveryService);

  const units = [
    { label: "minute", value: "minute" },
    { label: "hour", value: "hour" },
    { label: "day", value: "day" },
  ];
  return (
    <Flex
      width={"100%"}
      border={"1px #f5f5f5 solid"}
      mt={5}
      borderRadius={1}
      justifyContent={"center"}
    >
      <Formik
        initialValues={props.initialValues}
        onSubmit={(values) => {
          props.handleUpdateOperations(values);
        }}
        validationSchema={editDeliveryInformationValidation}
      >
        {({ handleSubmit, setFieldValue, initialValues }) => {
          return (
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              p={5}
              width={"100%"}
            >
              <Form>
                <Flex
                  flexDirection="column"
                  width={"100%"}
                  borderRadius={"8px"}
                  p={2}
                  justifyContent={"center"}
                  style={{ gap: 10 }}
                >
                  <Flex style={{ gap: 20, width: "100%" }}>
                    <Text fontFamily={"poppins"} fontSize={6}>
                      Enable Delivery
                    </Text>
                    <Switch
                      checked={ischecked}
                      size="medium"
                      onChange={() => {
                        setIsChecked(!ischecked);
                        setFieldValue("hasDeliveryService", !ischecked);
                      }}
                    />
                  </Flex>
                  <Grid
                    borderRadius={0}
                    gridColumnGap={"40px"}
                    gridRowGap={"15px"}
                    gridTemplateColumns={[
                      "repeat(1, 1fr)",
                      "repeat(2, 1fr)",
                      "repeat(3, 1fr)",
                    ]}
                  >
                    {" "}
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="deliveryCoverage"
                        type="number"
                        label="Delivery Area in km"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="deliveryPricePerKm"
                        type="number"
                        label="Delivery Price in KM"
                      />
                    </Flex>
                  </Grid>
                  <Flex>
                    <Flex alignItems={"center"} width={"100%"}>
                      <Flex
                        flexDirection={"column"}
                        style={{ gap: 3 }}
                        width={"50%"}
                      >
                        <InputField
                          name="minDeliveryTime"
                          type="number"
                          label="Minimum Delivery time"
                        />
                        <Text fontFamily={"poppins"} fontSize={2} color={"red"}>
                          <ErrorMessage name="minWaitingTimeUnit" />
                        </Text>
                      </Flex>
                      <Dropdown
                        options={units}
                        label={"select unit"}
                        handleChange={(value: string) =>
                          setFieldValue("minWaitingTimeUnit", value)
                        }
                      />
                    </Flex>
                    <Flex alignItems={"center"} width={"100%"}>
                      <Flex
                        flexDirection={"column"}
                        style={{ gap: 3 }}
                        width={"50%"}
                      >
                        <InputField
                          name="maxDeliveryTime"
                          type="number"
                          label="Maximum Delivery time"
                        />
                        <Text fontFamily={"poppins"} fontSize={2} color={"red"}>
                          <ErrorMessage name="maxWaitingTimeUnit" />
                        </Text>
                      </Flex>
                      <Dropdown
                        options={units}
                        label={"select unit"}
                        handleChange={(value: string) =>
                          setFieldValue("maxWaitingTimeUnit", value)
                        }
                      />
                    </Flex>
                  </Flex>

                  <Flex justifyContent="flex-end" alignItems="center">
                    <Button
                      borderRadius={1}
                      border={"1px solod #000"}
                      fontFamily="poppins"
                      color="white"
                      fontSize={5}
                      my={2}
                      variant="primary"
                      onClick={() => {
                        handleSubmit();
                      }}
                      type="button"
                      padding={1}
                      width={"100%"}
                      height={8}
                    >
                      Save
                    </Button>
                  </Flex>
                </Flex>
              </Form>
            </Flex>
          );
        }}
      </Formik>
    </Flex>
  );
};
export default EditPharmacyOperationsComponent;
