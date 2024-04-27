import { Form, Formik } from "formik";
import { Button, Flex, Grid, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { useState } from "react";
import { editPharmacyAccountValidation } from "app/Pages/PharmacyAccountPage/validation";

const EditPharmacyProfileComponent = (props: any) => {
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
                    gridTemplateColumns={[
                      "repeat(1, 1fr)",
                      "repeat(2, 1fr)",
                      "repeat(3, 1fr)",
                    ]}
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
                      <InputField
                        name="phoneNumber"
                        type=""
                        label="Phone Number"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField name="address" type="" label="Adress" />
                    </Flex>

                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="workingHours"
                        type=""
                        label="Working hours"
                      />
                    </Flex>

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
                        name="socialMedia.linkedIn"
                        type=""
                        label="Linkedin"
                      />
                    </Flex>
                  </Grid>
                  <Flex flexDirection={"column"}>
                    <Text fontFamily={"poppins"}>About</Text>
                    <InputField name={"about"} type={"textarea"} />
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
export default EditPharmacyProfileComponent;
