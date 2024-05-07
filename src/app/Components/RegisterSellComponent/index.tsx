import { addDrugValidationSchema } from "app/Pages/AddDrugsPage/validators";
import { Formik, ErrorMessage, Form } from "formik";
import Spinner from "react-activity/dist/Spinner";
import { Button, Flex, Grid, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { RegistersellProps, initialValues } from "./types";
import ReactSelect from "../ui/Blocks/Select/ReactSelect";
import { registerSellValidationSchema } from "app/Pages/RegisterSellPage/validation";

const RegisterSellComponent = (props: RegistersellProps) => {
  return (
    <Flex
      margin={1}
      backgroundColor={"#ffff"}
      width={"100%"}
      minHeight={"100vh"}
      flexDirection={"column"}
      p={1}
      borderRadius={1}
    >
      <Text fontFamily={"poppins"} fontSize={6}>
        Sell Registration
      </Text>
      <Flex justifyContent={"center"}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            props.handleRegister(values);
          }}
          validationSchema={registerSellValidationSchema}
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
                  <Text fontFamily={"poppins"} fontSize={5}>
                    Select drug to add
                  </Text>
                  <ReactSelect
                    options={props.drugs}
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
                    gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                    mb={2}
                  >
                    <Flex flexDirection={"column"}>
                      <InputField
                        name="batchNumber"
                        type=""
                        label="Batch Number"
                      />
                    </Flex>
                    <Flex flexDirection={"column"}>
                      <InputField name="quantity" type="text" label="Amount" />
                    </Flex>
                  </Grid>

                  <Flex justifyContent="flex-end" alignItems="center">
                    <Button
                      borderRadius={2}
                      fontFamily="poppins"
                      color="white"
                      fontSize={5}
                      my={5}
                      variant="secondary"
                      type="submit"
                      padding={1}
                      width={"100%"}
                      height={7}
                    >
                      {props.loading ? (
                        <Spinner style={{ marginLeft: "45%" }} />
                      ) : (
                        "Submit"
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
export default RegisterSellComponent;
