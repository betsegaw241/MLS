import { newPasswordValidationSchema } from "app/Pages/Login/validators";
import { Formik, Form } from "formik";
import Spinner from "react-activity/dist/Spinner";
import { Button, Flex, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { forgetPasswordIntialValue } from "./types";

const NewPassword = (props: any) => {
  return (
    <Flex
      flexDirection={"column"}
      width={"100%"}
      minHeight={"100vh"}
      background={"#fff"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text fontFamily={"poppins"} fontSize={6}>
        Change Password
      </Text>
      <Flex width={["100%", "50%", "30%"]}>
        <Formik
          initialValues={forgetPasswordIntialValue}
          onSubmit={(values) => {
             props.handleResetPassword(values);
          }}
          validationSchema={newPasswordValidationSchema}
        >
          <Form style={{ width: "100%" }}>
            <Text></Text>
            <InputField
              name="password"
              type={"password"}
              label={"Enter new Password"}
            />
            <InputField
              name="confirmPassword"
              type={"password"}
              label={"Conform Password"}
            />
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              mt={2}
              width={"100%"}
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
                py={1}
                width={"100%"}
              >
                {props.loading ? (
                  <Spinner style={{ marginLeft: "45%" }} />
                ) : (
                  "Reset"
                )}
              </Button>
              <Button
                backgroundColor={"#eaecef"}
                borderRadius={0}
                variant="warning"
                color={"#fff"}
                fontSize={2}
                onClick={() => {
                  //   setShowNewpassword(!showNewpassword);
                }}
                width={"100%"}
                py={1}
              >
                Cancel
              </Button>
            </Flex>
          </Form>
        </Formik>
      </Flex>
    </Flex>
  );
};
export default NewPassword;
