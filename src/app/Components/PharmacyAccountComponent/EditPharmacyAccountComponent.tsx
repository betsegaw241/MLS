import { Form, Formik } from "formik";
import { Button, Flex, Grid } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { initialValues } from "../AddDrugComponent/types";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";

const EditPharmacyAccountComponent = (props: any) => {
  const [addPhone, setAddPhone] = useState(false);
  const [addSocialAccount, setAddSocialAccount] = useState(false);

  return (
    <Flex
      width={"100%"}
      border={"1px #f5f5f5 solid"}
      mt={5}
      borderRadius={1}
      justifyContent={"center"}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={""}
      >
        {({ handleSubmit }) => {
          return (
            <Flex justifyContent={"center"} alignItems={"center"} p={5}>
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
                    gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                  >
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="name"
                        type="text"
                        label="Pharmacy Name"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField name="email" type="text" label="email" />
                    </Flex>

                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField name="state" type="" label="State" />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField name="city" type="" label="city" />
                    </Flex>
                  </Grid>
                  <Flex alignItems={"center"} style={{ gap: 40 }}>
                    <Flex
                      flexDirection={"column"}
                      style={{ gap: 3 }}
                      width={"60%"}
                    >
                      <InputField name="phone" type="" label="Phone" />
                    </Flex>
                    {addPhone ? (
                      <Flex
                        flexDirection={"column"}
                        style={{ gap: 3 }}
                        width={"60%"}
                      >
                        <InputField name="phone" type="" label="Phone Line 2" />
                      </Flex>
                    ) : (
                      <Flex
                        border={"1px #B4D4FF solid"}
                        borderRadius={1}
                        width={50}
                        justifyContent={"center"}
                        onClick={() => setAddPhone(!addPhone)}
                      >
                        <IoIosAdd />
                      </Flex>
                    )}
                  </Flex>
                  {/* // */}

                  {/* // */}
                  <Flex alignItems={"center"} style={{ gap: 40 }}>
                    <Flex
                      flexDirection={"column"}
                      style={{ gap: 3 }}
                      width={"60%"}
                    >
                      <InputField
                        name="social"
                        type=""
                        label="Social Media Account"
                      />
                    </Flex>

                    {addSocialAccount ? (
                      <Flex
                        flexDirection={"column"}
                        style={{ gap: 3 }}
                        width={"60%"}
                      >
                        <InputField
                          name="social"
                          type=""
                          label="Social Media Account"
                        />
                      </Flex>
                    ) : (
                      <Flex
                        border={"1px #B4D4FF solid"}
                        borderRadius={1}
                        width={50}
                        justifyContent={"center"}
                        onClick={() => setAddSocialAccount(!addSocialAccount)}
                      >
                        <IoIosAdd />
                      </Flex>
                    )}
                  </Flex>
                  {/* // */}
                  {/* <InputField name="sideEffects" type="" label="Side Effects" /> */}
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
                        name="catagory"
                        type="text"
                        label="Catagory"
                      />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField name="price" type="text" label="Unit Price" />
                    </Flex>
                    <Flex flexDirection={"column"} style={{ gap: 3 }}>
                      <InputField
                        name="minStockLevel"
                        type=""
                        label="Minimum stock Level"
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
                        props.setEdit();
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
export default EditPharmacyAccountComponent;
