import { Box, Button, Flex, P, Text } from "../ui/Blocks";
import { InputField } from "../ui/InputComponent";
import { Form, Formik } from "formik";
import { editProfileComponentProp } from "./types";
import Dropzone, { useDropzone } from "react-dropzone";
import { H2 } from "../ui/Blocks/Text/Text";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import Header from "../ui/Header";
import Spinner from "react-activity/dist/Spinner";
import Modal from "../ui/Modal";

const ProfileComponent = (props: editProfileComponentProp) => {
  const { isFocused, isDragAccept } = useDropzone({ maxFiles: 1 });
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState(props.initialValues.avatar);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  return (
    <>
      <Header notifications={[]} />
      <Flex
        flexDirection={["column", "row"]}
        width={"100%"}
        height={"90vh"}
        alignSelf={"center"}
        justifySelf={"center"}
        marginLeft={"0px"}
        border={"1px  #d8cfcf solid"}
        marginTop={"50px"}
        backgroundColor={"#F5F5F5"}
        marginBottom={"0px"}
      >
        <Box
          marginY={"35px"}
          border={"1px  #d8cfcf solid"}
          width={["90%", "64%", "70%", "320px"]}
          borderRadius={"4%"}
          backgroundColor={"#fff"}
          marginLeft={"20px"}
        >
          <Flex
            flexDirection={"row"}
            marginLeft={"16px"}
            alignItems={"center"}
            hover={{
              backgroundColor: "#dadada95",
            }}
          >
            <CgProfile
              style={{
                fontSize: "24px",
                color: "#292a2b",
                marginRight: "14px",
              }}
            />
            <P fontFamily={"poppins"} color="#262829">
              Profile
            </P>
          </Flex>
          <Flex
            alignItems={"center"}
            hover={{
              backgroundColor: "#dadada95",
            }}
            marginLeft={"16px"}
          >
            <RiLockPasswordFill
              style={{
                fontSize: "30px",
                color: "#202122",
                marginRight: "14px",
              }}
            />
            <P
              fontFamily={"poppins"}
              color="#242525"
              onClick={() => {
                setShowChangePasswordModal(true);
              }}
            >
              Password and authentication
            </P>
          </Flex>
        </Box>

        <Box
          width={["90%", "64%", "70%", "60%"]}
          backgroundColor={"#fff"}
          marginY={["6px", "35px"]}
          border={"1px  #d8cfcf solid"}
          borderRadius={"4%"}
          marginLeft={["8px"]}
          marginRight={["14px", "18px", "22px", "30px"]}
        >
          <Flex
            justifyContent={["center", "center", "center", "center"]}
            marginLeft={["42%", "42%", "42%", "42%"]}
            marginRight={["20px", "40px", "50px", "74px"]}
            flexDirection={"column"}
            marginTop={"20px"}
            style={{ gap: 20 }}
          >
            <img
              src={
                selectedFile == null ? image : URL.createObjectURL(selectedFile)
              }
              alt=""
              width={"100px"}
              height={"100px"}
              style={{ borderRadius: "50%", border: "0.5px solid #ced3d6" }}
            />
          </Flex>
          <Formik
            initialValues={props.initialValues}
            onSubmit={(values) => {
              props.onSaveClick(values);
            }}
            validationSchema={props.EditSchema}
          >
            {({ handleSubmit }) => {
              return (
                <Form>
                  {edit ? (
                    <Flex
                      flexDirection={"column"}
                      marginLeft={["5%", "8%", "10%", "15%"]}
                      marginRight={["5%", "8%", "10%", "15%"]}
                      width={["90%", "80%", "75%", "70%"]}
                      padding={["4%", "3%", "2%", "2%"]}
                      pt={[6, 8, 10, 12]}
                      borderRadius={"10%"}
                      marginTop={"10px"}
                      marginBottom={"2px"}
                      style={{ gap: "2px" }}
                    >
                      <Flex
                        justifyContent={"center"}
                        mt={[-4, -6, -8, -10]}
                        mb={["10px", "15px", "20px", "25px"]}
                      >
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
                              marginLeft={["5%", "4%", "6%", "-14%"]}
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
                      <Box
                        marginLeft={["10%", "8%", "6%", "15%"]}
                        marginRight={["4%"]}
                      >
                        <InputField
                          label="Phone"
                          name={"phone"}
                          type={"text"}
                        />
                      </Box>
                      <Button
                        borderRadius={40}
                        fontWeight={"bold"}
                        fontFamily={"poppins"}
                        color={"white"}
                        fontSize={5}
                        my={2}
                        marginLeft={["2%", "3%", "3%", "6%"]}
                        variant="primary"
                        padding={1}
                        width={"100%"}
                        textAlign={"center"}
                        onClick={() => handleSubmit()}
                      >
                        {props.isEditing ? (
                          <Spinner style={{ marginLeft: "45%" }} />
                        ) : (
                          "Save"
                        )}
                      </Button>
                    </Flex>
                  ) : (
                    <Flex
                      flexDirection={"column"}
                      marginLeft={["20px", "40px", "50px", "74px"]}
                      marginRight={["20px", "40px", "50px", "74px"]}
                      width={["50%", "60%", "65%", "70%"]}
                      padding={"4%"}
                      pt={10}
                      borderRadius={"10%"}
                      marginTop={"10px"}
                      marginBottom={"2px"}
                      style={{ gap: "2px" }}
                    >
                      <Flex
                        ml={"35%"}
                        mb={"2%"}
                        mt={"-6%"}
                        flexDirection={"column"}
                      >
                        <Text
                          fontSize="16px"
                          fontFamily="poppins"
                          marginBottom="10px"
                          color="#181717"
                        >
                          First Name: {"  "}
                          {props.initialValues.firstName}
                        </Text>
                        <Text
                          fontSize="16px"
                          fontFamily="poppins"
                          marginBottom="10px"
                          color="#181717"
                        >
                          Last Name: {"  "}
                          {props.initialValues.lastName}
                        </Text>
                        <Text
                          fontSize={["14px", "16px"]}
                          fontFamily="poppins"
                          marginBottom={["5px", "10px"]}
                          color="#181717"
                          style={{ wordWrap: "break-word" }}
                        >
                          Email: {"  "}
                          {props.initialValues.email}
                        </Text>
                        <Text
                          fontSize="16px"
                          fontFamily="poppins"
                          marginBottom="10px"
                          color="#181717"
                        >
                          Phone: {props.initialValues.phone}
                        </Text>
                      </Flex>

                      <Button
                        borderRadius={40}
                        fontWeight={"bold"}
                        fontFamily={"poppins"}
                        color={"white"}
                        fontSize={5}
                        my={2}
                        variant="primary"
                        padding={1}
                        width={"100%"}
                        textAlign={"center"}
                        onClick={() => setEdit(true)}
                      >
                        Edit
                      </Button>
                    </Flex>
                  )}
                </Form>
              );
            }}
          </Formik>
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
                  initialValues={props.initialValues}
                  onSubmit={(values) => {
                    props.changePassword(values);
                  }}
                  validationSchema={props.PasswordValidationSchema}
                >
                  {({ handleSubmit }) => {
                    return (
                      <Form>
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
                            onClick={() => handleSubmit()}
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
    </>
  );
};
export default ProfileComponent;
