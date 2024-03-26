import { Form, Formik } from "formik";
import { Button, Flex, Grid } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { useState } from "react";
import { editPharmacyAccountValidation } from "app/Pages/PharmacyAccountPage/validation";

const EditPharmacyAccountComponent = (props: any) => {
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
          props.handleUpdate(values);
        }}
        validationSchema={editPharmacyAccountValidation}
      >
        {({ handleSubmit }) => {
          return (
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Form>
                <Flex
                  flexDirection="column"
                  width={"100%"}
                  borderRadius={"8px"}
                  p={2}
                  justifyContent={"center"}
                  style={{ gap: 10 }}
                >
                  <Grid
                    borderRadius={0}
                    gridColumnGap={"50px"}
                    gridRowGap={"20px"}
                    gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                  >
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="name"
                        type="text"
                        label="Pharmacy Name"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="email"
                        type="text"
                        label="Email Address"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField name="phone" type="" label="Phone Number" />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField name="state" type="text" label="State" />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField name="city" type="" label="City" />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="phoneLine2"
                        type="text"
                        label="Phone Line 2"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="email2"
                        type=""
                        label="Aditional Email Address"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="operationalHours"
                        type=""
                        label="OPerational Hours"
                      />
                    </Flex>
                  </Grid>

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
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="socialMedia.facebook"
                        type="text"
                        label="Facebook"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="socialMedia.telegram"
                        type="text"
                        label="Telegram"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="socialMedia.linkedin"
                        type=""
                        label="Linkedin"
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
export default EditPharmacyAccountComponent;
