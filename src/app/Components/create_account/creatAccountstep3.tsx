import { Button, Flex, Text } from "../ui/Blocks";
import { CreateAccountComponentProp } from "./types";
import FileUpload from "../ui/FileUpload";
import { FileObject } from "app/Pages/createAccountPage/types";
import { ErrorMessage, Form, Formik } from "formik";
import { theme } from "../../../styles/theme";
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";

const CreateAccountStep3 = (props: CreateAccountComponentProp) => {
  return (
    <Flex
      backgroundColor={theme.colors.light.white[0]}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Formik
        initialValues={props.documentItialValues}
        onSubmit={(values) => {
          console.log("values", values);
          props.onSignupClick(values);
        }}
        validationSchema={props.createAccountSchemaStep3}
      >
        {({ handleSubmit, setFieldValue, values }) => {
          const nigdFikad = values.nigdFikad?.name;
          const pharmacyLicense = values.pharmacyLicense?.name;
          const pharmacistLicense = values.pharmacistLicense?.name;
          return (
            <Form>
              <Flex
                width={["100%", "700px"]}
                // backgroundColor={"#fff"}
                borderRadius={"8px"}
                marginX={"2px"}
                flexDirection={"column"}
                pt={1}
              >
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
                <Flex flexDirection={"column"} width={"100%"}>
                  <Text fontFamily={"poppins"}>Pharmacy Lisence</Text>
                  <FileUpload
                    file={(file: FileObject) =>
                      setFieldValue("pharmacyLicense", file)
                    }
                  />

                  <Flex>
                    <Text fontFamily={"poppins"} color={"green"}>
                      {pharmacyLicense}
                    </Text>
                  </Flex>
                  <Text
                    fontFamily={"poppins"}
                    fontSize={"12px"}
                    color={"red"}
                    p={"2px"}
                  >
                    <ErrorMessage name="pharmacyLicense" />
                  </Text>
                </Flex>
                <Flex flexDirection={"column"} width={"100%"}>
                  <Text fontFamily={"poppins"}>Nigd Fikad</Text>
                  <FileUpload
                    file={(file: FileObject) =>
                      setFieldValue("nigdFikad", file)
                    }
                  />
                  <Flex>
                    <Text fontFamily={"poppins"} color={"green"}>
                      {nigdFikad}
                    </Text>
                  </Flex>
                  <Text
                    fontFamily={"poppins"}
                    fontSize={"12px"}
                    color={"red"}
                    p={"2px"}
                  >
                    <ErrorMessage name="nigdFikad" />
                  </Text>
                </Flex>
                {props.isUploaded ? (
                  <Button
                    variant="secondary"
                    borderRadius={40}
                    fontFamily="poppins"
                    color="white"
                    fontSize={2}
                    my={2}
                    pt={2}
                    width={"100%"}
                    padding={1}
                    type="button"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    {props.creatingAccount ? (
                      <Spinner style={{ marginLeft: "45%" }} />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                ) : (
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    pt={2}
                  >
                    <Button
                      borderRadius={40}
                      fontWeight="bold"
                      fontFamily="poppins"
                      color="white"
                      fontSize={2}
                      my={2}
                      variant="neuteral"
                      onClick={() => {
                        props.back();
                      }}
                      type="button"
                      padding={1}
                      disabled={props.UploadingDocument}
                      width="200px"
                    >
                      back
                    </Button>
                    <Button
                      borderRadius={40}
                      fontWeight="bold"
                      fontFamily="poppins"
                      color="white"
                      fontSize={2}
                      my={2}
                      variant="primary"
                      onClick={() => {
                        props.handleStep3(values);
                      }}
                      disabled={props.UploadingDocument}
                      type="submit"
                      padding={1}
                      width="200px"
                    >
                      {props.isUploading ? (
                        <Spinner style={{ marginLeft: "45%" }} />
                      ) : (
                        "Next"
                      )}
                    </Button>
                  </Flex>
                )}
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </Flex>
  );
};

export default CreateAccountStep3;
{
}
