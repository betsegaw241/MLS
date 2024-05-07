import { Form, Formik } from "formik";
import { Button, Flex, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { AddAdminProps } from "./types.ts";
import Header from "../ui/Header";
import { useEffect } from "react";

import { addAdminValidationSchema } from "app/Pages/AddAdminPage/validators.ts";

const AddAdmins = (props: AddAdminProps) => {
  return (
    <>
      <Flex
        justifyContent={"center"}
        width={"100%"}
        background={"#fff"}
        p={1}
        borderRadius={1}
        height={'100vh'}
       
        m={1}
      >
        <Formik
          initialValues={props.initialValues}
          onSubmit={(values) => {
            props.handleAddAdmin(values);
          }}
          validationSchema={props.addAdminValidationSchema}
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
                <Flex flexDirection="column" width={"50%"} style={{ gap: 3 }}>
                  <Flex justifyContent={"center"} p={1}>
                    <Text fontFamily={"poppins"} fontSize={6}>
                      Add New Admin
                    </Text>
                  </Flex>
                  <InputField name="firstName" type="text" label="First Name" />
                  <InputField name="lastName" type="text" label="Last Name" />
                  <InputField
                    name="adminEmailAddress"
                    type="text"
                    label="Email"
                  />
                  <InputField
                    name="adminPassword"
                    type="Password"
                    label="Password"
                  />
                  <InputField
                    name="adminPhoneNumber"
                    type=""
                    label="Phone Number"
                  />
                  <Flex justifyContent="space-between" alignItems="center">
                    <Button
                      borderRadius={40}
                      fontWeight="bold"
                      border={"1px solid #000"}
                      fontFamily="poppins"
                      color="white"
                      fontSize={2}
                      my={2}
                      variant="primary"
                      onClick={() => {
                        handleSubmit();
                       
                      }}
                      type="submit"
                      padding={1}
                      width={"100%"}
                    >
                      Add
                    </Button>
                  </Flex>
                </Flex>
              </Form>
            );
          }}
        </Formik>
      </Flex>
    </>
  );
};

export default AddAdmins;
