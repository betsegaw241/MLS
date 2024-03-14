import { Form, Formik } from "formik";
import { theme } from "../../../styles/theme";
import { Button, Flex, Grid, Text } from "../ui/Blocks";
import MultipleSelectChip from "../ui/Blocks/Select/MSelect";
import { InputField } from "../ui/InputComponent";
import { initialValues } from "app/Pages/Login/constants";
import { useNavigate } from "react-router";

const AddDrugComponent = () => {
    const navigate = useNavigate();

    return (
        <Flex m={1} borderRadius={1} p={4} backgroundColor={theme.colors.light.white[0]} width={'100%'} height={'100vh'} flexDirection={'column'}>
            <Flex width={'100%'} justifyContent={'space-between'}>
                <Text fontSize={6} fontFamily={'poppins'}>Add Drug</Text>
                <Button p={1} fontSize={5} borderRadius={'8px'} variant="secondary" onClick={() => navigate('/pharmacist/addnewdrug')}>Add New Drug</Button>
            </Flex>
            <Flex justifyContent={'center'}>
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
                                    <MultipleSelectChip ></MultipleSelectChip>

                                    <Grid
                                        border={"1px solid #f5f5f5f5"}
                                        borderRadius={0}
                                        gridColumnGap={"40px"}
                                        gridRowGap={"15px"}
                                        gridTemplateColumns={[
                                            "repeat(1, 1fr)",
                                            "repeat(2, 1fr)",
                                            "repeat(3, 1fr)",

                                        ]}
                                        mb={2}
                                        p={1}
                                    >
                                        <Flex flexDirection={'column'}>
                                            <InputField
                                                name="amount"
                                                type="text"
                                                label="Amount"
                                            />
                                        </Flex>
                                        <Flex flexDirection={'column'}>
                                            <InputField
                                                name="expirationdate"
                                                type="date"
                                                label="Expiration Date"
                                            />
                                        </Flex>
                                        <Flex flexDirection={'column'}>

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
    )
}


export default AddDrugComponent;