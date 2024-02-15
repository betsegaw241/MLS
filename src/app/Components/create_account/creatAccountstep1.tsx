import { Form, Formik } from "formik";
import { CreateAccountComponentProp } from "./types";
import { Button, Flex } from "../ui/Blocks";
import { InputField } from "app/Components/ui/InputComponent";
import CheckBox from "../ui/Blocks/Input/checkbox";
import { useState } from "react";
import { theme } from "../../../styles/theme";
import { userItialValues } from "app/Pages/createAccountPage/constants";


const CreateAccountStep1 = (props: CreateAccountComponentProp) => {
  const [checked, setChecked] = useState(false);

  return (
    <Flex
      backgroundColor={theme.colors.light.white[0]}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      width={"100%"}
    >
      <Formik
        initialValues={props.set1Data ? props.set1Data : userItialValues}
        onSubmit={(values) => {
          props.handleStep1(values);
        }}
        validationSchema={props.createAccountSchemaStep1}
      >
        {({ handleSubmit }) => {
          return (
            <Form>
              <Flex
                // backgroundColor={"#fff"}
                borderRadius={"8px"}
                flexDirection={"column"}
                p={3}
                m={1}
                style={{ gap: "5px" }}
              >
                <Flex style={{ gap: "20px" }} width={["100%", "700px"]}>
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
                <InputField name="email" type={"text"} label={"Email"} />
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

                <Flex pt={1}>
                  <CheckBox
                    label={"show password"}
                    clicked={() => {
                      setChecked(!checked);
                    }}
                    show={checked}
                  />
                </Flex>
                <Flex justifyContent={"flex-end"} alignItems={"center"}>
                  <Button
                    borderRadius={40}
                    fontWeight={"bold"}
                    fontFamily={"poppins"}
                    color={"white"}
                    fontSize={2}
                    my={2}
                    variant="primary"
                    onClick={() => {
                      handleSubmit();
                    }}
                    type="button"
                    padding={1}
                    width={"200px"}
                  >
                    Next
                  </Button>
                </Flex>
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </Flex>
  );
};
export default CreateAccountStep1;
