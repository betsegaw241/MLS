import { Form, Formik } from "formik";
import { theme } from "../../../styles/theme";
import { Button, Flex, Grid, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { initialValues } from "app/Pages/Login/constants";

const RegisterDrug = () => {
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
          validationSchema={""}
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
                          name="stength"
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
                          name="unitOFIssue"
                          type=""
                          label="Unit of issue"
                        />
                      </Flex>
                    </Grid>

                    <InputField name="usage" type="textarea" label="Usage" />
                    <InputField
                      name="sideEffects"
                      type="textarea"
                      label="Side Effects"
                    />

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
