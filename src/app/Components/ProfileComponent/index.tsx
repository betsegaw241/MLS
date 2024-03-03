import { Box, Button, Flex, P } from "../ui/Blocks";
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

const ProfileComponent = (props: editProfileComponentProp) => {
  const { isFocused, isDragAccept } = useDropzone({ maxFiles: 1 });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <>
      <Header />
      <Flex
        flexDirection={["column", "row"]}
        width={"100%"}
        height={"100%"}
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
          width={["100%", "320px"]}
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
            <P fontFamily={"poppins"} color="#242525">
              Password and authentication
            </P>
          </Flex>
        </Box>

        <Box
          width={["100%", "62%"]}
          backgroundColor={"#fff"}
          marginY={"35px"}
          border={"1px  #d8cfcf solid"}
          borderRadius={"4%"}
          marginLeft={"20px"}
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
                selectedFile
                  ? URL.createObjectURL(selectedFile)
                  : props.initialValues.avatar
              }
              alt=""
              width={"100px"}
              height={"100px"}
              style={{ borderRadius: "50%" }}
            />
            <Flex>
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
                    marginLeft={["-30px", "-30px", "-30px", "-30px"]}
                    borderColor={isDragAccept ? "red" : null}
                    border={"1px #d8cfcf solid"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={"8px"}
                    {...getRootProps({
                      className: "dropzone",
                      onDrop: (event) => event.stopPropagation(),
                    })}
                  >
                    <input {...getInputProps()} />
                    <H2 fontFamily={"poppins"} fontSize={[2, 1]}>
                      Choose File
                    </H2>
                  </Flex>
                )}
              </Dropzone>
              <P></P>
            </Flex>
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
                    <InputField
                      label="First Name:"
                      name={"firstName"}
                      type={"text"}
                    ></InputField>
                    <InputField
                      label="Last Name:"
                      name={"lastName"}
                      type={"text"}
                    ></InputField>
                    <InputField
                      label="Email:"
                      name={"email"}
                      type={"text"}
                    ></InputField>
                    <InputField
                      label="Phone:"
                      name={"phone"}
                      type={"text"}
                    ></InputField>
                    <Button
                      backgroundColor="#399bdd"
                      color={"#fff"}
                      type="button"
                      borderRadius={"8%"}
                      height={"40px"}
                      width={["50px", "80px", "100px", "130px"]}
                      marginLeft={["30%", "40%"]}
                      fontWeight={"bold"}
                      onClick={() => handleSubmit()}
                    >
                      {props.isEditing ? (
                        <Spinner style={{ marginLeft: "45%" }} />
                      ) : (
                        "Save"
                      )}
                    </Button>
                  </Flex>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Flex>
    </>
  );
};
export default ProfileComponent;
