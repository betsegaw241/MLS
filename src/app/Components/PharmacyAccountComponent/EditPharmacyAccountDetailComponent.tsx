import { Form, Formik } from "formik";
import { Button, Flex, Grid } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import {
  editDeliveryInformationValidation,
  editPharmacyIntialValues,
} from "app/Pages/PharmacyAccountPage/validation";
import Dropdown from "../ui/Blocks/Dropdown";

const EditPharmacyAccountDetailComponent = (props: any) => {
  console.log(props, "inccccccccccccccccccccccccompoooooo");
  return (
    <Flex
      width={"100%"}
      border={"1px #f5f5f5 solid"}
      mt={5}
      borderRadius={1}
      justifyContent={"center"}
    >
      <Formik
        initialValues={editPharmacyIntialValues}
        onSubmit={(values) => {
          props.handleUpdateOperations(values);
        }}
        validationSchema={editDeliveryInformationValidation}
      >
        {({ handleSubmit, setFieldValue }) => {
          return (
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              p={5}
              width={"100%"}
            >
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
                    {" "}
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <Flex border={"1px solid #C7C7C7"} borderRadius={1}>
                        <Dropdown
                          options={props.banksName}
                          label={"Bank Name"}
                          handleChange={(value) =>
                            setFieldValue("bankName", value)
                          }
                        />
                      </Flex>
                    </Flex>
                    {/* <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <Flex border={"1px solid #C7C7C7"} borderRadius={1}>
                        <Dropdown options={props.banksCode} label={"Bank Code"} />
                      </Flex>
                      </Flex> */}
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="accountHolderName"
                        type="text"
                        label="Account Holder Name"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="accountNumber"
                        type="number"
                        label="Account Number"
                      />
                    </Flex>
                  </Grid>

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
  );
};
export default EditPharmacyAccountDetailComponent;
