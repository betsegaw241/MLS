import { Form, Formik } from "formik";
import { theme } from "../../../styles/theme";
import { Button, Flex, Grid, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { initialValues } from "app/Pages/Login/constants";

const RegisterDrug = () => {


    return (
        <Flex m={1} borderRadius={1} p={4} backgroundColor={theme.colors.light.white[0]} width={'100%'} flexDirection={'column'}>
            <Text fontFamily={'poppins'} fontSize={6}>Add New Drug</Text>
            <Flex>

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                    validationSchema={''}
                >
                    {({ handleSubmit, setFieldValue, values }) => {

                        return (
                            <Form>
                                <Flex
                                    flexDirection="column"
                                    width={'100%'}
                                    borderRadius={"8px"}
                                    p={2}
                                    justifyContent={'center'}
                                    style={{ gap: 10 }}
                                >
                                    <InputField
                                        name="name"
                                        type="text"
                                        label="Drug Name"
                                    />

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
                                        <Flex flexDirection={'column'} style={{ gap: 3 }} >
                                            <InputField
                                                name="stength"
                                                type="text"
                                                label="Strength"
                                            />
                                        </Flex>
                                        <Flex flexDirection={'column'} style={{ gap: 3 }}>
                                            <InputField
                                                name="dosage"
                                                type="text"
                                                label="Dosage Form"
                                            />
                                        </Flex>
                                        <Flex flexDirection={'column'} style={{ gap: 3 }}>

                                            <InputField
                                                name="unitOFIssue"
                                                type=""
                                                label="Unit of issue"
                                            />
                                        </Flex>
                                    </Grid>

                                    <InputField
                                        name="usage"
                                        type="textarea"
                                        label="Usage"
                                    />
                                    <InputField
                                        name="sideEffects"
                                        type="textarea"
                                        label="Side Effects"
                                    />
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
                                        <Flex flexDirection={'column'} style={{ gap: 3 }}>
                                            <InputField
                                                name="amount"
                                                type="text"
                                                label="Amount"
                                            />
                                        </Flex>
                                        <Flex flexDirection={'column'} style={{ gap: 3 }}>
                                            <InputField
                                                name="expirationdate"
                                                type="date"
                                                label="Expiration Date"
                                            />
                                        </Flex>
                                        <Flex flexDirection={'column'} style={{ gap: 3 }}>

                                            <InputField
                                                name="pharmacyPhoneNumber"
                                                type=""
                                                label="Pharmacy Phone Number"
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
                                            width={"100%"}
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
    )
}
export default RegisterDrug;