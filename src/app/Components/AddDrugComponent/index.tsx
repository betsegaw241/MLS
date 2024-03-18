import { ErrorMessage, Form, Formik } from "formik";
import { theme } from "../../../styles/theme";
import { Button, Flex, Grid, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { useNavigate } from "react-router";
import ReactSelect from "../ui/Blocks/Select/ReactSelect";
import { addDrugValidationSchema, initialValues } from "./types";

const AddDrugComponent = () => {
  const navigate = useNavigate();
  const options = [
    { value: "aspirin", label: "Aspirin" },
    { value: "ibuprofen", label: "Ibuprofen" },
    { value: "acetaminophen", label: "Acetaminophen" },
    { value: "naproxen", label: "Naproxen" },
    { value: "metformin", label: "Metformin" },
    { value: "amlodipine", label: "Amlodipine" },
    { value: "atorvastatin", label: "Atorvastatin" },
    { value: "lisinopril", label: "Lisinopril" },
    { value: "simvastatin", label: "Simvastatin" },
    { value: "levothyroxine", label: "Levothyroxine" },
  ];

  return (
    <Flex
      m={1}
      borderRadius={1}
      p={4}
      backgroundColor={theme.colors.light.white[0]}
      width={"100%"}
      height={"100vh"}
      flexDirection={"column"}
    >
      <Flex width={"100%"} justifyContent={"space-between"} >
        <Text fontSize={6} fontFamily={"poppins"}>
          Add Drug
        </Text>
        <Button
          p={1}
          fontSize={5}
          borderRadius={"8px"}
          variant="secondary"
          onClick={() => navigate("/pharmacist/addnewdrug")}
        >
          Add New Drug
        </Button>
      </Flex>
      <Flex justifyContent={"center"}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={addDrugValidationSchema}
        >
          {({ handleSubmit, setFieldValue }) => {
            return (
              <Form>
                <Flex
                  flexDirection="column"
                  width={"100%"}
                  borderRadius={"8px"}
                  p={2}
                  justifyContent={"center"}
                  style={{ gap: 10 }}
                  pt={10}
                >
                  <ReactSelect
                    options={options}
                    setSelectedOption={(value: string) =>
                      setFieldValue("drug", value)
                    }
                  ></ReactSelect>
                  <Text
                    fontFamily={"poppins"}
                    fontSize={"12px"}
                    color={"red"}
                    p={"2px"}
                  >
                    <ErrorMessage name="drug" />
                  </Text>
                  <Grid
                    borderRadius={0}
                    gridColumnGap={"40px"}
                    gridRowGap={"15px"}
                    gridTemplateColumns={[
                      "repeat(1, 1fr)",
                      "repeat(2, 1fr)",
                      "repeat(3, 1fr)",
                    ]}
                    mb={2}
                  >
                    <Flex flexDirection={"column"}>
                      <InputField name="batch" type="" label="Batch Number" />
                    </Flex>
                    <Flex flexDirection={"column"}>
                      <InputField name="quantity" type="text" label="Amount" />
                    </Flex>
                    <Flex flexDirection={"column"}>
                      <InputField
                        name="expirationDate"
                        type="date"
                        label="Expiration Date"
                      />
                    </Flex>
                  </Grid>

                  <Flex justifyContent="flex-end" alignItems="center">
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
                      width={"50%"}
                    >
                      Add
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

export default AddDrugComponent;
