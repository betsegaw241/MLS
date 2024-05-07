import { Box, Button, Flex, Grid, P, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { Form, Formik } from "formik";
import { editProfileComponentProp } from "./types";
import Dropzone, { useDropzone } from "react-dropzone";
import { H2 } from "../ui/Blocks/Text/Text";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import Header from "../ui/Header";
import Spinner from "react-activity/dist/Spinner";
import Modal from "../ui/Modal";
import {
  Checkbox,
  FormControlLabel,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { GridBox } from "../ui/Blocks/GridBox";

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

const ProfileComponent = (props: editProfileComponentProp) => {
  const { isFocused, isDragAccept } = useDropzone({ maxFiles: 1 });
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState(props.initialValues.avatar);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showpassword, setShowPassword] = useState(false);

  return (
    <Flex
      flexDirection={["column", "row"]}
      minHeight={"calc(100vh - 90px)"}
      left={"0px"}
      justifyContent={"center"}
      pt={70}
      style={{ gap: 5 }}
    >
      <Header notifications={[]} />

      <Box
        width={["100%", "25%"]}
        borderRadius={1}
        border={"1px solid #f5f5f5"}
        backgroundColor={"rgba(242, 238, 222, 0.2)"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        p={1}
      >
        <Flex
          flexDirection={"row"}
          alignItems={"center"}
          hover={{
            backgroundColor: "#dadada95",
          }}
          onClick={() => setEdit(false)}
        >
          <CgProfile
            color="#B4D4FF"
            style={{
              fontSize: "24px",

              marginRight: "14px",
            }}
          />
          <P fontFamily={"lato"}>Profile</P>
        </Flex>
        <Flex
          alignItems={"center"}
          hover={{
            backgroundColor: "#dadada95",
          }}
        >
          <RiLockPasswordFill
            color="#B4D4FF"
            style={{
              fontSize: "30px",

              marginRight: "14px",
            }}
          />
          <P
            fontFamily={"lato"}
            onClick={() => {
              setShowChangePasswordModal(true);
            }}
          >
            Password and authentication
          </P>
        </Flex>
      </Box>

      <Box width={["100%", "75%"]} backgroundColor={"#fff"} borderRadius={1}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          pt={1}
        >
          <img
            src={
              selectedFile == null ? image : URL.createObjectURL(selectedFile)
            }
            alt=""
            width={"150px"}
            height={"150px"}
            style={{ borderRadius: "50%", border: "2px solid #ced3d6" }}
          />
        </Flex>

        {edit ? (
          <Formik
            initialValues={props.initialValues}
            onSubmit={(values) => {
              props.onSaveClick(values);
            }}
            validationSchema={props.EditSchema}
          >
            {({ handleSubmit }) => {
              return (
                <Form style={{ display: "flex", justifyContent: "center" }}>
                  <Flex
                    flexDirection={"column"}
                    borderRadius={1}
                    style={{ gap: 5 }}
                    pt={1}
                    width={["80%", "50%"]}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Flex justifyContent={"center"}>
                      <Dropzone
                        onDrop={(files) => {
                          props.profile(files[0]);
                          setSelectedFile(files[0]);
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <Flex
                            backgroundColor={isFocused ? "green" : "#fff"}
                            width={"140px"}
                            height={"40px"}
                            borderColor={isDragAccept ? "red" : null}
                            border={"1px #d8cfcf solid"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            display={"flex"}
                            borderRadius={"8px"}
                            {...getRootProps({
                              className: "dropzone",
                              onDrop: (event) => event.stopPropagation(),
                            })}
                          >
                            <input {...getInputProps()} />
                            <H2 fontFamily={"poppins"} fontSize={[1, 0]}>
                              Choose File
                            </H2>
                          </Flex>
                        )}
                      </Dropzone>
                    </Flex>
                    <Flex flexDirection={"column"} width={"100%"}>
                      <InputField label="Phone" name={"phone"} type={"text"} />
                    </Flex>

                    <Button
                      borderRadius={1}
                      fontWeight={"bold"}
                      fontFamily={"poppins"}
                      color={"white"}
                      fontSize={5}
                      variant="primary"
                      padding={1}
                      width={"100%"}
                      textAlign={"center"}
                    >
                      {props.isEditing ? (
                        <Spinner style={{ marginLeft: "45%" }} />
                      ) : (
                        "Change"
                      )}
                    </Button>
                  </Flex>
                </Form>
              );
            }}
          </Formik>
        ) : (
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{ gap: "2px" }}
          >
            <Flex flexDirection={"column"}>
              <Text fontFamily={"poppins"} p={1}>
                Personal Information
              </Text>
              <Grid
                borderRadius={0}
                gridColumnGap={50}
                gridRowGap={"15px"}
                gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                p={1}
              >
                <GridBox
                  lable={"First Name"}
                  value={`${props.initialValues.firstName}`}
                />
                <GridBox
                  lable={"Last Name"}
                  value={`${props.initialValues.lastName}`}
                />

                <GridBox
                  lable={"Email"}
                  value={`${props.initialValues.email}`}
                />
                <GridBox
                  lable={"Phone"}
                  value={`${props.initialValues.phone}`}
                />
              </Grid>
              <Button
                borderRadius={1}
                fontWeight={"bold"}
                fontFamily={"poppins"}
                color={"white"}
                fontSize={5}
                my={10}
                variant="primary"
                padding={1}
                width={"100%"}
                textAlign={"center"}
                onClick={() => setEdit(true)}
              >
                Edit
              </Button>
            </Flex>
          </Flex>
        )}
      </Box>

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
                initialValues={props.PinitialValue}
                onSubmit={(values) => {
                  props.changePassword(values);
                }}
                validationSchema={props.PasswordValidationSchema}
              >
                {({ handleSubmit }) => {
                  return (
                    <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
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
                        style={{ gap: "20px" }}
                      >
                        <Button
                          borderRadius={0}
                          variant="secondary"
                          color={"white"}
                          fontSize={2}
                          type="submit"
                          px={4}
                          py={1}
                        >
                          {props.ischangingPassword ? (
                            <Spinner style={{ marginLeft: "45%" }} />
                          ) : (
                            "Change password"
                          )}{" "}
                        </Button>
                        <Button
                          backgroundColor={"#eaecef"}
                          borderRadius={0}
                          variant="warning"
                          color={"#fff"}
                          fontSize={2}
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
                    </Form>
                  );
                }}
              </Formik>
            </Box>
          </Flex>
        </Modal>
      )}
    </Flex>
  );
};
export default ProfileComponent;
