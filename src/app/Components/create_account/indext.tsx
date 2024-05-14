import { ErrorMessage, Form, Formik } from "formik";
import { CreateAccountComponentProp } from "./types";
import { Button, Flex, Text } from "../ui/Blocks";
import { InputField } from "app/Components/ui/InputComponent";
import CheckBox from "../ui/Blocks/InputField/checkbox";
import { useEffect, useState } from "react";
import { theme } from "../../../styles/theme";
import { userItialValues } from "app/Pages/createAccountPage/constants";
import { FileObject } from "app/Pages/AddPharmacyPage/types";
import FileUpload from "../ui/FileUpload";
import pharmacy from "../../../assets/SVG/pharmacy.svg";
import Spinner from "react-activity/dist/Spinner";

const CreateAccount = (props: CreateAccountComponentProp) => {
  const [checked, setChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  return (
    <Flex width={"100%"}>
      <Flex
        display={["none", "flex"]}
        height={"100vh"}
        width={"35%"}
        background={"#3C6DEF"}
        flexDirection={"column"}
        alignItems={"center"}
        top={"0px"}
        position={"sticky"}
      >
        <Flex width={"100%"} justifyContent={"center"} p={1}>
          <Text p={1} fontFamily={"poppins"} fontSize={7} color={"#fff"}>
            Medicine Locator
          </Text>
        </Flex>
        <Flex width={"100%"} justifyContent={"center"}>
          <Text p={1} fontFamily={"poppins"} fontSize={4} color={"#fff"}>
            Register now to easily locate essential medications near you. Join
            our community and help improve access to healthcare for all.
          </Text>
        </Flex>
        <Flex width={"100%"} justifyContent={"center"} marginTop={"auto"}>
          <img src={pharmacy} width={300} height={300} alt="Changing Image" />
        </Flex>
      </Flex>
      <Flex
        backgroundColor={theme.colors.light.white[0]}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        width={["100%", "65%"]}
      >
        <Formik
          initialValues={props.set1Data ? props.set1Data : userItialValues}
          onSubmit={(values) => {
            props.handleSignUp(values);
          }}
          validationSchema={props.createAccountSchemaStep1}
        >
          {({ handleSubmit, setFieldValue, values }) => {
            const pharmacistLicense = values.pharmacistLicense?.name;

            return (
              <Form
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Flex
                  borderRadius={"8px"}
                  flexDirection={"column"}
                  style={{ gap: "5px" }}
                  justifyContent={"center"}
                  width={"70%"}
                >
                  <Text py={2} fontFamily={"poppins"} fontSize={6}>
                    Registration form
                  </Text>
                  <Flex style={{ gap: "20px" }}>
                    <Flex flexDirection={"column"} flex={1}>
                      <InputField
                        name={"firstName"}
                        type={"text"}
                        label="First Name"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} flex={1}>
                      <InputField
                        name={"lastName"}
                        type={"text"}
                        label="Last Name"
                      />
                    </Flex>
                  </Flex>
                  <InputField name="email" type={"email"} label={"Email"} />
                  <InputField
                    name={"phoneNumber"}
                    type={""}
                    label="Phone Number"
                  />
                  <Flex style={{ gap: "20px" }}>
                    <Flex flexDirection={"column"} flex={1}>
                      <InputField
                        name={"password"}
                        type={checked ? "text" : "password"}
                        label="Password"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} flex={1}>
                      <InputField
                        name={"confirmPassword"}
                        type={checked ? "text" : "password"}
                        label="Confirm Password"
                      />
                    </Flex>
                  </Flex>

                  <Flex pt={0} pb={0}>
                    <CheckBox
                      label={"show password"}
                      clicked={() => {
                        setChecked(!checked);
                      }}
                      show={checked}
                    />
                  </Flex>
                  <Flex
                    flexDirection={"column"}
                    width={"100%"}
                    // style={{ gap: "10px" }}
                  >
                    <Text fontFamily={"poppins"}>Pharmacist Lisence</Text>
                    <FileUpload
                      file={(file: FileObject) =>
                        setFieldValue("pharmacistLicense", file)
                      }
                    />
                    <Flex>
                      <Text fontFamily={"poppins"} color={"green"}>
                        {pharmacistLicense}
                      </Text>
                    </Flex>
                    <Text
                      fontFamily={"poppins"}
                      fontSize={"12px"}
                      color={"red"}
                      p={"2px"}
                    >
                      <ErrorMessage name="pharmacistLicense" />
                    </Text>
                  </Flex>

                  <Flex
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    pb={50}
                  >
                    <Button
                      borderRadius={2}
                      fontFamily={"poppins"}
                      color={"white"}
                      fontSize={5}
                      my={2}
                      variant="primary"
                      onClick={() => {
                        handleSubmit();
                      }}
                      style={{
                        width: isHovered ? "100%" : "200px",
                        transition: "width 0.8s ease ",
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      type="button"
                      padding={1}
                      width={"200px"}
                    >
                      {props.creatingAccount ? (
                        <Spinner style={{ marginLeft: "45%" }} />
                      ) : (
                        "Signup"
                      )}
                    </Button>
                  </Flex>
                </Flex>
              </Form>
            );
          }}
        </Formik>
      </Flex>
    </Flex>
  );
};
export default CreateAccount;
