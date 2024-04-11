import { Form, Formik } from "formik";
import { theme } from "../../../styles/theme";
import { Button, Flex, Grid, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { registerValidationSchema } from "app/Pages/NewDrugRegistrationPage/validation";
import {
  Checkbox,
  FormControlLabel,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useState } from "react";
import StyledDropzone from "../ui/ImageUpload/DropArea";
import { EditDrugDetailsComponentProps } from "./types";

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

const EditDrugDetails = (props: EditDrugDetailsComponentProps) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [ischecked, setIsChecked] = useState(true);

  const UploadImages = (file: File[]) => {
    props.setSelectedImages(file);
    setSelectedImages(file);
  };

  return (
    <Flex
      borderRadius={1}
      m={1}
      backgroundColor={theme.colors.light.white[0]}
      width={"100%"}
      flexDirection={"column"}
    >
      <Text fontFamily={"poppins"} fontSize={6} p={1}>
        Edit Drug Details
      </Text>
      <Flex justifyContent={"center"} width={"90%"} alignItems={"center"}>
        <Formik
          initialValues={props.drug}
          onSubmit={(values) => {
            console.log(values);
            // props.Edit(values);
          }}
          validationSchema={registerValidationSchema}
        >
          {({ handleSubmit, setFieldValue }) => {
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
                      gridColumnGap={"40px"}
                      gridRowGap={"15px"}
                      gridTemplateColumns={[
                        "repeat(1, 1fr)",
                        "repeat(2, 1fr)",
                        "repeat(3, 1fr)",
                      ]}
                    >
                      <Flex flexDirection={"column"} style={{ gap: 3 }}>
                        <InputField name="name" type="text" label="Drug Name" />
                      </Flex>{" "}
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
                      <Flex flexDirection={"column"} style={{ gap: 3 }}>
                        <InputField
                          name="category"
                          type="text"
                          label="Category(optional)"
                        />
                      </Flex>
                    </Grid>

                    <InputField
                      name="instruction"
                      type="textarea"
                      label="Usage"
                    />

                    <InputField
                      name="sideEffects"
                      type="textarea"
                      label="Side Effects"
                    />

                    <Flex
                      width={"100%"}
                      flexDirection={"column"}
                      style={{ gap: 1 }}
                    >
                      <Text paddingY={1} fontFamily={"poppins"}>
                        Upload drug photo (optional)
                      </Text>
                      <StyledDropzone images={UploadImages} />
                      <Flex p={1}>
                        {selectedImages.length > 0
                          ? selectedImages?.map((image, index) => (
                              <img
                                key={index}
                                src={URL.createObjectURL(image)}
                                alt="images"
                                height={"50px"}
                              />
                            ))
                          : props.drug.drugPhoto?.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt="images"
                                height={"50px"}
                              />
                            ))}
                      </Flex>
                    </Flex>

                    <Flex justifyContent={"space-between"}>
                      <ThemeProvider theme={muitheme}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              defaultChecked
                              onChange={() => {
                                setIsChecked(!ischecked);
                                setFieldValue("needPrescription", !ischecked);
                              }}
                            />
                          }
                          label="Need Prescription"
                        />
                      </ThemeProvider>
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
                        onClick={() => handleSubmit()}
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
    </Flex>
  );
};
export default EditDrugDetails;
