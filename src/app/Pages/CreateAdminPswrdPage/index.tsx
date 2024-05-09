import { initialValues } from "./constants";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Text, Button, Flex, H3 } from "app/Components/ui/Blocks";
import { FormValues } from "./types";
import { useCreateAdminPwdPageSlice } from "./slice";
import { createAdminPasswordValidationSchema } from "./validators";
import { InputField } from "app/Components/ui/InputComponent";
import {
  Checkbox,
  FormControlLabel,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectISPasswordCreated, selectLoading } from "./slice/selector";


const CreateAdminPasswordPage = () => {
  const { actions } = useCreateAdminPwdPageSlice();
  const dispatch = useDispatch();
  const [showpassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const isPasswordCreated = useSelector(selectISPasswordCreated);
  const loading = useSelector(selectLoading);
  const [token, setToken] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const currentUrl = window.location.href;

    const queryParams: { [key: string]: string } = {};
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    let match;

    while ((match = regex.exec(currentUrl)) !== null) {
      queryParams[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
    }

    const { token, email } = queryParams;
    setToken(token || "");
    setEmail(email || "");
  }, []);

  const handleCreateAdminPassword = (values: FormValues) => {
    dispatch(
      actions.createAdminPwd({
        password: values.password,
        confirmPassword: values.confirmPassword,
        email: email,
        token: token,
      })
    );
  };

  const muitheme = createTheme({
    components: {
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            fontFamily: "Poppins",
            fontSize: 12,
          },
        },
      },
    },
  });

  return (
    <>
      <Flex
        justifyContent={"center"}
        width={"100%"}
        background={"#fff"}
        p={1}
        borderRadius={1}
        height={"100vh"}
        m={1}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handleCreateAdminPassword(values);
          }}
          validationSchema={createAdminPasswordValidationSchema}
        >
          {({ handleSubmit }) => {
            return (
              <>
                {isPasswordCreated ? (
                  <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={40}
                    color="black"
                    my={2}
                    onClick={() => {
                      navigate("/login");
                    }}
                    padding={1}
                    width={"100%"}
                    height={"100vh"}
                  >
                    <Text
                      style={{ fontFamily: "poppins", cursor: "pointer" }}
                      p={1}
                      backgroundColor={"rgba(153, 220, 247, 0.938)"}
                      borderRadius={1}
                    >
                      Login to your account
                    </Text>
                  </Flex>
                ) : (
                  <Form
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Flex
                      flexDirection="column"
                      width={"50%"}
                      style={{ gap: 3 }}
                    >
                      <Flex justifyContent={"center"} p={1}>
                        <H3 fontFamily={"poppins"} fontSize={8}>
                          Create Password
                        </H3>
                      </Flex>
                      <InputField
                        name="password"
                        type={showpassword ? "text" : "password"}
                        label="Password"
                      />
                      <InputField
                        name="confirmPassword"
                        type={showpassword ? "text" : "password"}
                        label="Confirm password"
                      />
                      <Flex justifyContent={"space-between"}>
                        <ThemeProvider theme={muitheme}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={() => {
                                  setShowPassword(!showpassword);
                                }}
                              />
                            }
                            label="Show password"
                          />
                        </ThemeProvider>
                      </Flex>
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
                          {loading ? (
                            <Spinner style={{ marginLeft: "45%" }} />
                          ) : (
                            "Save"
                          )}
                        </Button>
                      </Flex>
                    </Flex>
                  </Form>
                )}
              </>
            );
          }}
        </Formik>
      </Flex>
    </>
  );
};
export default CreateAdminPasswordPage;
