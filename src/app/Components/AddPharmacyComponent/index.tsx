import { ErrorMessage, Form, Formik } from "formik";
import { Button, Flex, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import MapComponent from "../ui/MapComponent";
import { AddPharmacyComponentProps } from "./types";
import FileUpload from "../ui/FileUpload";
import { FileObject } from "app/Pages/AddPharmacyPage/types";
import { addPharmacyValidationSchema } from "app/Pages/AddPharmacyPage/validators";

const AddParmacyComponent = (props: AddPharmacyComponentProps) => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Formik
        initialValues={props.initialValues}
        onSubmit={(values) => {
          props.handleAddpharmacy(values);
        }}
        validationSchema={addPharmacyValidationSchema}
      >
        {({ handleSubmit, setFieldValue, values }) => {
          const handleMapClick = (position: any[]) => {
            const locationString = `${position[0]},${position[1]}`;
            setFieldValue("pharmacyLocation", locationString);
          };
          const nigdFikad = values.nigdFikad?.name;
          const pharmacyLicense = values.pharmacyLicense?.name;

          return (
            <Form>
              <Flex
                flexDirection="column"
                mt={5}
                width={["100%", "100%", "600px"]}
                borderRadius={"8px"}
                p={2}
              >
                <InputField
                  name="pharmacyName"
                  type="text"
                  label="Pharmacy Name"
                />
                <InputField
                  name="pharmacyEmailAddress"
                  type="text"
                  label="Pharmacy Email"
                />
                <InputField
                  name="pharmacyPhoneNumber"
                  type=""
                  label="Pharmacy Phone Number"
                />
                <Flex flexDirection={"column"} width={"100%"}>
                  <Text fontFamily={"poppins"} fontSize={"12px"} paddingY={1}>
                    Pharmacy Lisence
                  </Text>
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
                  <Text fontFamily={"poppins"} fontSize={"12px"} paddingY={1}>
                    Nigd Fikad
                  </Text>
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
                <Text fontFamily={"poppins"} fontSize={"12px"}>
                  Select Pharmacy Location
                </Text>
                <Flex padding={"0px"} paddingTop={"5px"}>
                  <MapComponent onMapClick={handleMapClick} />
                </Flex>
                <Text
                  color={"red"}
                  fontFamily={"poppins"}
                  fontSize={"12px"}
                  p={1}
                >
                  <ErrorMessage name="pharmacyLocation" />
                </Text>
                <Flex justifyContent="space-between" alignItems="center">
                  <Button
                    borderRadius={40}
                    fontWeight="bold"
                    border={"1px solod #000"}
                    fontFamily="poppins"
                    color="white"
                    fontSize={2}
                    my={2}
                    variant="primary"
                    onClick={() => {
                      handleSubmit();
                    }}
                    type="button"
                    padding={1}
                    width={"100%"}
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

export default AddParmacyComponent;
