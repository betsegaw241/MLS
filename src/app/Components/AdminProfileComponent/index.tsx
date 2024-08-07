import { Box, Button, Flex, Text } from "../ui/Blocks";
import { CiUser, CiMail, CiPhone } from "react-icons/ci";
import { Formik } from "formik";
import Spinner from "react-activity/dist/Spinner";
import { InputField } from "../ui/InputComponent";
import { useState } from "react";
import { initialValues } from "../AddDrugComponent/types";
import Modal from "../ui/Modal";
import { changePasswordValidationSchema } from "app/Pages/ProfilePage/validators";
import { AdminProfileComponentProps } from "./types";
import {
  Checkbox,
  FormControlLabel,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const muitheme = createTheme({
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: "Poppins",
          fontSize: 12,
        },
      },
    },
  },
});

const AdminProfileComponent = (props: AdminProfileComponentProps) => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showpassword, setShowPassword] = useState(false);

  return (
    <Flex width={"100%"} m={1} flexDirection={"column"} overflow={"hidden"}>
      <Flex flexDirection={["column", "row"]}>
        <Flex
          backgroundColor={"#ffff"}
          width={["90%", "20%"]}
          mx={1}
          borderRadius={1}
          flexDirection={"column"}
          height={300}
          alignSelf={["flex-start", "auto"]}
          order={[0, 1]}
          mb={1}
        >
          <Flex
            width={"100%"}
            justifyContent={"center"}
            borderBottom={"1px solid #B4D4FF"}
          >
            <Text fontFamily={"poppins"} p={1} fontSize={6}>
              Settings
            </Text>
          </Flex>

        
          <Text
            fontFamily={"poppins"}
            p={1}
            py={1}
            hover={{
              backgroundColor: "#E5D4FF",
            }}
            style={{
              cursor: "pointer",
            }}
            onClick={() => setShowChangePasswordModal(true)}
          >
            Change Password
          </Text>
        </Flex>

        <Flex
          backgroundColor={"#ffff"}
          width={["90%", "80%"]}
          borderRadius={1}
          alignSelf={["flex-start", "auto"]}
          order={[1, 0]}
          flexDirection={"column"}
          height={"calc(100vh - 75px)"}
          overflow={"hidden"}
        >
          <Flex
            width={"100%"}
            height={100}
            borderTopLeftRadius={1}
            borderTopRightRadius={1}
          >
            <Box width={"100%"} height={150}>
              <img
                src={props.profile?.coverPhoto}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
            </Box>
          </Flex>

          <Flex width={"100%"} mt={-1}>
            <Flex width={130} height={130} borderRadius={"50%"} ml={"5%"}>
              <img
                src={props.profile?.avatar}
                alt="profile picture"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Flex>
          </Flex>
          <Text fontFamily={"poppins"} fontSize={6} ml={"5%"} pt={1}>
            {props.profile?.name}
          </Text>
          <Flex
            flexDirection={"column"}
            width={"50%"}
            ml={"5%"}
            pt={2}
            style={{ gap: 20 }}
          >
            <Flex style={{ gap: 10 }}>
              <Flex style={{ gap: 10 }}>
                <CiUser size={25} color="#B4D4FF" />
                <Text fontFamily={"poppins"} fontSize={5}>
                  Role:
                </Text>
              </Flex>{" "}
              <Text fontFamily={"poppins"} fontSize={5}>
                {props.profile?.role}
              </Text>
            </Flex>
            <Flex style={{ gap: 10 }}>
              <Flex style={{ gap: 10 }}>
                <CiMail size={25} color="#B4D4FF" />
                <Text fontFamily={"poppins"} fontSize={5}>
                  Email:
                </Text>
              </Flex>{" "}
              <Text fontFamily={"poppins"} fontSize={5}>
                {props.profile?.email}
              </Text>
            </Flex>
            <Flex style={{ gap: 10 }}>
              <Flex style={{ gap: 10 }}>
                <CiPhone size={25} color="#B4D4FF" />
                <Text fontFamily={"poppins"} fontSize={5}>
                  Contact:
                </Text>
              </Flex>
              <Text fontFamily={"poppins"} fontSize={5}>
                0902914386
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {showChangePasswordModal && (
        <Modal
          open={showChangePasswordModal}
          setOpen={() => {
            setShowChangePasswordModal(false);
          }}
        >
          <Flex
            alignItems={"center"}
            width={"30%"}
            justifyContent={"center"}
            position={"relative"}
            background={"#fff"}
            flexDirection={"column"}
            p={1}
            borderRadius={1}
          >
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              width={"90%"}
              alignItems={"center"}
            >
              <Text fontFamily={"poppins"} fontSize={6} p={1}>
                Change Password
              </Text>
              <Text fontSize={2} fontFamily={"poppins"}>
                Your password must be at least 8 characters long and contain a
                combination of letters, numbers, and special characters.
              </Text>
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                  props.handleChangePassword(values);
                  setShowChangePasswordModal(false);
                }}
                validationSchema={changePasswordValidationSchema}
              >
                {({ handleSubmit }) => {
                  return (
                    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                      <Flex flexDirection={"column"} style={{ gap: "4px" }}>
                        <InputField
                          name="currentPassword"
                          type={showpassword ? "text" : "password"}
                          label={""}
                          placeholder="Enter current password"
                        />
                        <InputField
                          name="newPassword"
                          type={showpassword ? "text" : "password"}
                          label={""}
                          placeholder="Enter new password"
                        />
                        <InputField
                          name="confirmPassword"
                          type={showpassword ? "text" : "password"}
                          label={""}
                          placeholder="Re-type new password"
                        />
                      </Flex>
                      <Flex justifyContent={"space-between"}>
                        <ThemeProvider theme={muitheme}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={() => {
                                  setShowPassword(!showpassword);
                                }}
                              />
                            }
                            label="Show password"
                          />
                        </ThemeProvider>
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        justifyContent={"center"}
                        mt={2}
                        pb={50}
                        width={"100%"}
                        style={{ gap: "20px" }}
                      >
                        <Button
                          borderRadius={0}
                          variant="secondary"
                          color={"white"}
                          fontSize={5}
                          px={4}
                          type="submit"
                          width={"50%"}
                          py={1}
                        >
                          {false ? (
                            <Spinner style={{ marginLeft: "45%" }} />
                          ) : (
                            "Change"
                          )}
                        </Button>
                        <Button
                          backgroundColor={"#eaecef"}
                          borderRadius={0}
                          variant="warning"
                          width={"50%"}
                          color={"#fff"}
                          fontSize={5}
                          onClick={() => {
                            setShowChangePasswordModal(
                              !showChangePasswordModal
                            );
                          }}
                          px={4}
                          py={1}
                        >
                          Cancel
                        </Button>
                      </Flex>
                    </form>
                  );
                }}
              </Formik>
            </Flex>
          </Flex>
        </Modal>
      )}
    </Flex>
  );
};
export default AdminProfileComponent;
