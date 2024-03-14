import { Form, Formik } from "formik";
import { theme } from "../../../styles/theme";
import { Box, Button, Flex, Text } from "app/Components/ui/Blocks";
import { InputField } from "app/Components/ui/InputComponent";
import { LoginInComponentProp } from "./types";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import "styles/fonts.css";
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";
import Modal from "../ui/Modal";

const LoginComponent = (props: LoginInComponentProp) => {
  const [showpassword, setShowPassword] = useState(false);
  const [showForgotPasswordModal, setshowForgotPasswordModal] = useState(false);
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
            width={5}
            backgroundColor={theme.colors.dark.primary[5]}
            height={5}
            borderRadius={"100%"}
          ></Flex>
          <Text fontSize={8} fontFamily={"poppins"}>
            Login
          </Text>
          <Flex mb={5}>
            <Text fontFamily={"Poppins"} fontSize={1}>
              Dont have an account?
              <Link to={"/addpharmacy"}>signup</Link>
            </Text>
          </Flex>

          <Formik
            initialValues={props.initialValues}
            onSubmit={(values) => {
              props.onLoginClick(values);
            }}
            validationSchema={props.loginInSchema}
          >
            {({ handleSubmit }) => {
              return (
                <Form>
                  <Flex flexDirection={"column"} width={["300px"]}>
                    <InputField name="email" type={"text"} label={"Email"} />

                    <InputField
                      name="password"
                      type={showpassword ? "text" : "password"}
                      label={"Password"}
                      onIconClick={() => {
                        setShowPassword(!showpassword);
                      }}
                      topIcon={showpassword ? <BiShow /> : <BiHide />}
                      topIconlabel={showpassword ? "hide" : "show"}
                    />

                    <Flex justifyContent={"flex-end"}>
                      <Text fontFamily={"poppins"} fontSize={1}>
                        <Link
                          to={""}
                          onClick={() => {
                            setshowForgotPasswordModal(true); // Set showForgotPasswordModal to true when the link is clicked
                          }}
                        >
                          Forget your password?
                        </Link>
                      </Text>
                    </Flex>
                    <Button
                      borderRadius={40}
                      fontWeight={"bold"}
                      fontFamily={"poppins"}
                      color={"white"}
                      disabled={props.isLogging}
                      fontSize={5}
                      my={2}
                      variant="primary"
                      onClick={() => {
                        handleSubmit();
                      }}
                      type="submit"
                      padding={1}
                      width={"100%"}
                      textAlign={"center"}
                    >
                      {props.isLogging ? (
                        <Spinner style={{ marginLeft: "45%" }} />
                      ) : (
                        "Login"
                      )}
                    </Button>
                  </Flex>
                </Form>
              );
            }}
          </Formik>
        </Flex>
      </Flex>

      {showForgotPasswordModal && (
        <Modal
          open={showForgotPasswordModal}
          setOpen={() => {
            setshowForgotPasswordModal(false);
          }}
        >
          <Flex
            alignItems={"center"}
            height={"20%"}
            justifyContent={"center"}
            position={"relative"}
          >
            <Box backgroundColor={"white"} borderRadius={1} p={4}>
              <Text fontSize={5} fontWeight={4} fontFamily={"poppins"}>
                Enter your email to send link and change password
              </Text>
              <Formik
                initialValues={props.initialValues}
                onSubmit={(values) => {
                  props.onLoginClick(values);
                }}
                validationSchema={props.loginInSchema}
              >
                <InputField name="email" type={"text"} label={"Email"} />
              </Formik>

              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                mt={2}
                style={{ gap: "20px" }}
              >
                <Button
                  borderRadius={0}
                  variant="secondary"
                  color={"white"}
                  fontSize={2}
                  onClick={() => {
                    //setshowForgotPasswordModal(!showForgotPasswordModal);
                  }}
                  px={4}
                  py={1}
                >
                  Send
                </Button>
                <Button
                  backgroundColor={"#eaecef"}
                  borderRadius={0}
                  variant="warning"
                  color={"#fff"}
                  fontSize={2}
                  onClick={() => {
                    setshowForgotPasswordModal(!showForgotPasswordModal);
                  }}
                  px={4}
                  py={1}
                >
                  Cancel
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Modal>
      )}
    </Box>
  );
};
export default LoginComponent;
