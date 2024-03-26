import { Form, Formik } from "formik";
import { Button, Flex, Grid, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const EditPharmacyOperationsComponent = (props: any) => {
  const [ischecked, setIsChecked] = useState(
    props.pharmacy.isDeliveryAvailable
  );
  return (
    <Flex
      width={"100%"}
      border={"1px #f5f5f5 solid"}
      mt={5}
      borderRadius={1}
      justifyContent={"center"}
    >
      <Formik
        initialValues={props.pharmacy}
        onSubmit={(values) => {
          props.handleUpdateOperations(values);
        }}
        validationSchema={""}
      >
        {({ handleSubmit, setFieldValue }) => {
          return (
            <Flex justifyContent={"center"} alignItems={"center"} p={5}>
              <Form>
                <Flex
                  flexDirection="column"
                  width={"100%"}
                  borderRadius={"8px"}
                  p={2}
                  justifyContent={"center"}
                  style={{ gap: 10 }}
                >
                  <Flex style={{ gap: 20 }}>
                    <Text fontFamily={"poppins"} fontSize={6}>
                      Enable Delivery
                    </Text>
                    <Switch
                      checked={ischecked}
                      size="medium"
                      onChange={() => {
                        setIsChecked(!ischecked);
                        setFieldValue("isDeliveryAvailable", !ischecked);
                      }}
                    />
                  </Flex>
                  <Grid
                    borderRadius={0}
                    gridColumnGap={"40px"}
                    gridRowGap={"15px"}
                    gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                  >
                    {" "}
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="deliveryWaitingTime"
                        type="text"
                        label="Deliver Waiting Time"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="deliveryTimes"
                        type="text"
                        label="Delivery Times"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="deliveryArea"
                        type=""
                        label="Delivery Area"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="deliveryFeeinKm"
                        type=""
                        label="Delivery Fee in KM"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="fastDeliveryFee"
                        type=""
                        label="Fast Delivery Fee"
                      />
                    </Flex>
                  </Grid>

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
