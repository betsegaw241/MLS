import { ErrorMessage, Form, Formik } from "formik";
import { theme } from "../../../styles/theme";
import { Button, Flex, Grid, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import {
  initialValues,
  registerValidationSchema,
} from "app/Pages/NewDrugRegistrationPage/validation";
import {
  Checkbox,
  FormControlLabel,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useState } from "react";

const muitheme = createTheme({
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: "Poppins",
        },
      },
    },
  },
});

const RegisterDrug = () => {
  const [uploadImage, setUploadImage] = useState(true);
  return (
    <Flex
      borderRadius={1}
      m={1}
      backgroundColor={theme.colors.light.white[0]}
      width={"100%"}
      flexDirection={"column"}
    >
      <Text fontFamily={"poppins"} fontSize={6} p={1}>
        Add New Drug
      </Text>
      <Flex justifyContent={"center"} width={"90%"} alignItems={"center"}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={registerValidationSchema}
        >
          {({ handleSubmit, setFieldValue, values }) => {
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
                    <InputField name="name" type="text" label="Drug Name" />

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
                          name="strength"
                          type="text"
                          label="Strength"
                        />
                      </Flex>
                      <Flex flexDirection={"column"} style={{ gap: 3 }}>
                        <InputField
                          name="dosage"
                          type="text"
                          label="Dosage Form"
                        />
                      </Flex>
                      <Flex flexDirection={"column"} style={{ gap: 3 }}>
                        <InputField
                          name="minStockLevel"
                          type=""
                          label="Minimum stock Level"
                        />
                      </Flex>
                    </Grid>

                    <InputField
                      name="instruction"
                      type="textarea"
                      label="Usage"
                    />
                    {/* <Text
                      fontFamily={"poppins"}
                      fontSize={"12px"}
                      color={"red"}
                      p={"2px"}
                    >
                      <ErrorMessage name="instruction" />
                    </Text> */}
                    <InputField
                      name="sideEffects"
                      type="textarea"
                      label="Side Effects"
                    />
                    {/* <Text
                      fontFamily={"poppins"}
                      fontSize={"12px"}
                      color={"red"}
                      p={"2px"}
                    >
                      <ErrorMessage name="sideEffects" />
                    </Text> */}

                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="catagory"
                        type="text"
                        label="Catagory"
                      />
                    </Flex>

                    <Flex justifyContent={"space-between"} marginX={1}>
                      <ThemeProvider theme={muitheme}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              defaultChecked
                              onChange={() => console.log("yes")}
                            />
                          }
                          label="Need Prescription"
                        />
                      </ThemeProvider>
                      <Button
                        fontFamily={"poppins"}
                        fontSize={2}
                        borderRadius={"5px"}
                        onClick={() => setUploadImage(!uploadImage)}
                        type="button"
                      >
                        Upload drug photo
                      </Button>
                    </Flex>
                    {uploadImage && <Flex>upload</Flex>}
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
                        Add Drug
                      </Button>
                    </Flex>
                  </Flex>
                </Form>
              </Flex>
            );
          }}
        </Formik>
      </Flex>
    </Flex>
  );
};
export default RegisterDrug;
