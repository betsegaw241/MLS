import React, { useState } from "react";
import Modal from "../ui/Modal";
import { Box, Text, Flex, Button } from "../ui/Blocks";
import { H2 } from "../ui/Blocks/Text/Text";
import { Formik } from "formik";
import { InputField } from "../ui/InputComponent";
import { changePasswordProp } from "./types";

function ChangePasswordModal(props: changePasswordProp) {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  return (
    <>
      {showChangePasswordModal && (
        <Modal
          open={showChangePasswordModal}
          setOpen={() => {
            setShowChangePasswordModal(false);
          }}
        >
          <Flex
            alignItems={"center"}
            height={"20%"}
            justifyContent={"center"}
            position={"relative"}
          >
            <Box backgroundColor={"white"} borderRadius={1} p={4}>
              <H2>Change Password</H2>
              <Text fontSize={5} fontWeight={4} fontFamily={"poppins"}>
                Your password must be at least 6 combination of characters
              </Text>
              <Formik
                initialValues={props.initialValues}
                onSubmit={(values) => {
                  //props.onLoginClick(values);
                }}
                //validationSchema={props.loginInSchema}
              >
                <Flex
                  flexDirection={"column"}
                  marginLeft={["20px", "40px", "50px", "74px"]}
                  marginRight={["20px", "40px", "50px", "74px"]}
                  width={["50%", "60%", "65%", "70%"]}
                  padding={"4%"}
                  pt={10}
                  borderRadius={"10%"}
                  marginTop={"4px"}
                  marginBottom={"2px"}
                  style={{ gap: "4px" }}
                >
                  <InputField
                    name="currentPassword"
                    type={"text"}
                    label={""}
                    placeholder="Enter current password"
                  />
                  <InputField
                    name="newPassword"
                    type={"text"}
                    label={""}
                    placeholder="Enter new password"
                  />
                  <InputField
                    name="confirmPassword"
                    type={"text"}
                    label={""}
                    placeholder="Re-type new password"
                  />
                </Flex>
              </Formik>

              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                mt={2}
                style={{ gap: "20px" }}
              >
                <Button
                  borderRadius={0}
                  variant="secondary"
                  color={"white"}
                  fontSize={2}
                  onClick={() => {
                    //setShowChangePasswordModal(!showChangePasswordModal);
                  }}
                  px={4}
                  py={1}
                >
                  Change Password
                </Button>
                <Button
                  backgroundColor={"#eaecef"}
                  borderRadius={0}
                  variant="warning"
                  color={"#fff"}
                  fontSize={2}
                  onClick={() => {
                    setShowChangePasswordModal(!showChangePasswordModal);
                  }}
                  px={4}
                  py={1}
                >
                  Cancel
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Modal>
      )}
    </>
  );
}

export default ChangePasswordModal;
