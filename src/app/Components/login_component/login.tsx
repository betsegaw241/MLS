import { Form, Formik } from "formik";
import { theme } from "../../../styles/theme";
import { Box, Button, Flex, Text } from "app/Components/ui/Blocks";
import { InputField } from "app/Components/ui/InputComponent";
import { LoginInComponentProp } from "./types";
import { useEffect, useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import "styles/fonts.css";
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";
import Modal from "../ui/Modal";
import delivery from "assets/SVG/delivery.svg";
import easymngmt from "assets/SVG/easymanegment.svg";
import manage from "assets/SVG/manage.svg";
import market from "assets/SVG/market.svg";
import payment from "assets/SVG/payment.svg";
import pharmacy from "assets/SVG/pharmacy.svg";
import { LoginDesplayText } from "utils/constants";

const LoginComponent = (props: LoginInComponentProp) => {
  const [showpassword, setShowPassword] = useState(false);
  const [showForgotPasswordModal, setshowForgotPasswordModal] = useState(false);
  const images = [easymngmt, pharmacy, market, delivery, payment];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);
  return (
    <Flex
      backgroundColor={theme.colors.dark.black[2]}
      margin={"0px"}
      padding={"0px"}
      height={"100%"}
      width={"100%"}
    >
      <Flex
        height={"100%"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        background={" linear-gradient(to right, #fff, #F7FAFF)"}
      >
        <Flex
          width={"40%"}
          display={["none", "none", "flex"]}
          // background={"blue"}
          height={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <img
            src={images[currentIndex]}
            width={300}
            height={300}
            alt="Changing Image"
          />
          <Flex
            p={1}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontFamily={"poppins"} fontSize={3} textAlign={"center"}>
              {LoginDesplayText[currentIndex]}
            </Text>
          </Flex>
          <Flex width={"100%"} justifyContent={"center"}>
            {images.map((image, index) => (
              <Flex
                key={index}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: index === currentIndex ? "blue" : "gray",
                  margin: "0 5px",
                  cursor: "pointer",
                }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </Flex>
        </Flex>

        {/* ??-------------------------------------------------------------------------------------?? */}
        <Flex width={"60%"} height={"100vh"} borderRadius={1}>
          <Flex
            // backgroundColor={theme.colors.light.white[0]}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            width={"100%"}
          >
            {/* <Flex
              width={5}
              backgroundColor={theme.colors.dark.primary[5]}
              height={5}
              borderRadius={"100%"}
            ></Flex> */}
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
                  <Form style={{ width: "70%" }}>
                    <Flex
                      flexDirection={"column"}
                      width={"100%"}
                      style={{ gap: 5 }}
                    >
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
                              setshowForgotPasswordModal(true);
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
    </Flex>
  );
};
export default LoginComponent;
