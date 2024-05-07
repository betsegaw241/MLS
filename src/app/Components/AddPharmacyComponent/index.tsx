import { ErrorMessage, Form, Formik } from "formik";
import { Button, Flex, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import MapComponent from "../ui/MapComponent";
import { AddPharmacyComponentProps } from "./types";
import FileUpload from "../ui/FileUpload";
import { FileObject } from "app/Pages/AddPharmacyPage/types";
import { addPharmacyValidationSchema } from "app/Pages/AddPharmacyPage/validators";
import Header from "../ui/Header";
import { useEffect } from "react";

const AddParmacyComponent = (props: AddPharmacyComponentProps) => {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  return (
    <Flex pt={70} width={"100%"}>
      <Header notifications={[]}  />

      <Flex width={"100%"} justifyContent={"center"}>
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
              setFieldValue("location", locationString);
            };
            const pharmacyLicense = values.pharmacyLicense?.name;

            return (
              <Form style={{ display: "flex", width: "90%" }}>
                <Flex
                  mt={5}
                  width={"100%"}
                  borderRadius={"8px"}
                  p={2}
                  flexDirection={["column", "column", "row"]}
                  style={{ gap: 50 }}
                >
                  <Flex flexDirection={"column"} flex={1} style={{ gap: 5 }}>
                    <Flex py={1}>
                      <Text fontFamily={"poppins"} fontSize={6}>
                        Register Pharmacy
                      </Text>
                    </Flex>

                    <InputField
                      name="name"
                      type="text"
                      label="Pharmacy Name"
                    />
                    <Flex width={"100%"} style={{ gap: 20 }}>
                      <Flex flexDirection={"column"} flex={1}>
                        <InputField
                          name="email"
                          type="text"
                          label="Pharmacy Email"
                        />
                      </Flex>
                      <Flex flexDirection={"column"} flex={1}>
                        <InputField
                          name="phoneNumber"
                          type=""
                          label="Phone Number"
                        />
                      </Flex>
                    </Flex>
                    <InputField
                      name="address"
                      type="text"
                      label="Adress"
                    />

                    <Flex flexDirection={"column"} width={"100%"}>
                      <Text fontFamily={"poppins"} fontSize={5} paddingY={1}>
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
                  </Flex>

                  <Flex flexDirection={"column"} flex={1}>
                    <Text fontFamily={"poppins"} fontSize={5}>
                      Pharmacy Location
                    </Text>
                    <Flex padding={"0px"} paddingTop={"5px"}  >
                      <MapComponent onMapClick={handleMapClick} />
                    </Flex>
                    <Text
                      color={"red"}
                      fontFamily={"poppins"}
                      fontSize={"12px"}
                      p={1}
                    >
                      <ErrorMessage name="location" />
                    </Text>
                    <Flex justifyContent="space-between" alignItems="center">
                      <Button
                        borderRadius={1}
                        border={"1px solod #000"}
                        fontFamily="poppins"
                        color="white"
                        height={50}
                        fontSize={5}
                        my={2}
                        variant="primary"
                        onClick={() => {
                          handleSubmit();
                        }}
                        type="button"
                        padding={1}
                        width={"100%"}
                      >
                        Submit
                      </Button>
                    </Flex>
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

export default AddParmacyComponent;
