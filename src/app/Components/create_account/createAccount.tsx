import { Form, Formik } from "formik";
import { SignupComponentProp } from "./types";
import { Box, Button, Flex, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { Link } from "react-router-dom";
import CheckBox from "../ui/Blocks/InputField/checkbox";
import { useState } from "react";
import { theme } from "../../../styles/theme";

const CreateAccount = (props: SignupComponentProp) => {
  const [checked, setChecked] = useState(false);
  return (
    <Box
      backgroundColor={theme.colors.dark.black[2]}
      margin={"0px"}
      padding={"0px"}
      top={"0px"}
      left={"0px"}
      position={"fixed"}
      height={"100%"}
      width={"100%"}
    >
      <Flex
        height={"100%"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          backgroundColor={theme.colors.light.white[0]}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          padding={10}
          margin={1}
          borderRadius={"8px"}
          width={["100%", "50%", "30%"]}
        >
          <Flex
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            p={1}
            m={1}
          >
            <Flex
              height={"50px"}
              width={"50px"}
              borderRadius={"50%"}
              backgroundColor={"red"}
            ></Flex>
            <Text fontFamily={"poppins"} fontSize={7}>
              Create an account
            </Text>{" "}
            <Text fontFamily={"poppins"} fontSize={1}>
              Already have account?
              <Link to={""}>Login</Link>
            </Text>
            <Formik
              initialValues={props.initialValues}
              onSubmit={(values) => {
                props.onSignupClick(values);
              }}
              validationSchema={props.signupSchema}
            >
              {({ handleSubmit }) => {
                return (
                  <Form>
                    <Flex flexDirection={"column"} pt={10}>
                      <Flex style={{ gap: "20px" }}>
                        <Flex width={"100%"} flexDirection={"column"}>
                          <InputField
                            name={"firstName"}
                            type={""}
                            label="First Name"
                          />
                        </Flex>
                        <Flex width={"100%"} flexDirection={"column"}>
                          <InputField
                            name={"lastName"}
                            type={""}
                            label="Last Name"
                          />
                        </Flex>
                      </Flex>
                      <InputField name={"email"} type={""} label="Email" />
                      <Flex style={{ gap: "20px" }}>
                        <Flex width={"100%"} flexDirection={"column"}>
                          <InputField
                            name={"password"}
                            type={checked ? "text" : "password"}
                            label="Password"
                          />
                        </Flex>
                        <Flex width={"100%"} flexDirection={"column"}>
                          <InputField
                            name={"confirmPassword"}
                            type={checked ? "text" : "password"}
                            label="Confirm Password"
                          />
                        </Flex>
                      </Flex>
                      <Text fontFamily={"poppins"} fontSize={1}>
                        Use 8 or more characters with a mix of letters, numbers
                        & symbols
                      </Text>{" "}
                      <Flex pt={1}>
                        <CheckBox
                          label={"show password"}
                          clicked={() => {
                            setChecked(!checked);
                          }}
                          show={checked}
                        />
                      </Flex>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Text fontFamily={"poppins"} fontSize={5}>
                          <Link to={""}>login instead</Link>
                        </Text>
                        <Button
                          borderRadius={40}
                          fontWeight={"bold"}
                          fontFamily={"poppins"}
                          color={"white"}
                          // disabled={props.isLogging}
                          fontSize={5}
                          my={2}
                          variant="primary"
                          onClick={() => {
                            handleSubmit();
                          }}
                          type="submit"
                          padding={1}
                          width={"50%"}
                        >
                          Create an account
                        </Button>
                      </Flex>
                    </Flex>
                  </Form>
                );
              }}
            </Formik>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
export default CreateAccount;
