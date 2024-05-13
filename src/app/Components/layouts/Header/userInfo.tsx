import { useState } from "react";
import { Box, Button, Flex, Input, Text } from "../../ui/Blocks";
import Modal from "../../ui/Modal";
// import { Cross2Icon } from "@radix-ui/react-icons";
// import useLocalStorage from "use-local-storage";
import "styles/fonts.css";
import { useLoginSlice } from "app/Pages/Login/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { IoMdSettings } from "react-icons/io";
import { GrPowerShutdown } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdFeedback } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { GrStatusCritical } from "react-icons/gr";
import { InputField } from "../../ui/InputComponent";
import { Form, Formik } from "formik";
import { userInfoComponentProp } from "./types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserInfo = (props: userInfoComponentProp) => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showIfeedback, setShowIfeedback] = useState(false);
  const { actions } = useLoginSlice();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profilePicture: any = localStorage.getItem("avatar");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
  
  return (
    <>
      <Flex
        alignItems={"center"}
        backgroundColor={["#fff"]}
        borderRadius={["50%", "50%", "50%", 1]}
        flexWrap={"wrap"}
        onClick={() => {
          setShowUserInfo(!showUserInfo);
        }}
        padding={["0px", "0px", "0px", "2px"]}
        justifyContent={"space-around"}
        style={{ gap: "5px", cursor: "pointer" }}
      >
        <img
          src={profilePicture}
          alt=""
          width={"40px"}
          height={"40px"}
          style={{ borderRadius: "50%", border: "1px solid #f5f5f5" }}
        />

        <Flex
          flexDirection={"column"}
          display={["none", "none", "none", "block"]}
        >
          <Text fontFamily={"poppins"} px={1}>
            {name}
          </Text>
        </Flex>
      </Flex>
      {showUserInfo && (
        <Box onClick={() => setShowUserInfo(!showUserInfo)}>
          <Modal
            open={showUserInfo}
            setOpen={() => {
              setShowLogout(false);
            }}
            background="transparent"
          >
            <Box
              backgroundColor={"#fff"}
              border={"1px solid #dbdbdb"}
              borderRadius={"8px"}
              position={"fixed"}
              right={"10px"}
              top={"70px"}
              margin={"4px"}
              width={["200px", "200px", "200px"]}
            >
              <Flex flexDirection={"column"}>
                <Flex
                  alignItems={"center"}
                  hover={{
                    backgroundColor: "#E5D4FF",
                  }}
                  p={1}
                  style={{ cursor: "pointer" }}
                >
                  <IoMdSettings color="blue" />
                  <Text
                    color={"#363636"}
                    fontFamily={"Poppins"}
                    fontSize={5}
                    padding={1}
                    fontWeight={3}
                    lineHeight={0}
                    onClick={() => {
                      setShowUserInfo(!showUserInfo);
                    
                    }}
                  >
                    Settings
                  </Text>
                </Flex>

                <Flex
                  alignItems={"center"}
                  hover={{
                    backgroundColor: "#E5D4FF",
                  }}
                  p={1}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    role && role == "pharmacist"
                      ? navigate("/pharmacist/profile")
                      : navigate("/account");
                  }}
                >
                  <CgProfile color="blue" />
                  <Text
                    color={"#363636"}
                    fontFamily={"Poppins"}
                    fontSize={5}
                    padding={1}
                    fontWeight={3}
                    lineHeight={0}
                  >
                    Profile
                  </Text>
                </Flex>
                {role && role === "pharmacist" && (
                  <Flex
                    alignItems={"center"}
                    hover={{
                      backgroundColor: "#E5D4FF",
                    }}
                    p={1}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setShowFeedback(!showFeedback);
                    }}
                  >
                    <MdFeedback color="blue" />
                    <Text
                      color={"#363636"}
                      fontFamily={"Poppins"}
                      fontSize={5}
                      padding={1}
                      fontWeight={3}
                      lineHeight={0}
                    >
                      Feedback
                    </Text>
                  </Flex>
                )}
              </Flex>
              <Flex
                alignItems={"center"}
                hover={{
                  backgroundColor: "#E5D4FF",
                }}
                p={1}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowUserInfo(false);
                  setShowLogout(true);
                }}
              >
                <GrPowerShutdown color="blue" />

                <Text
                  color={"#303030"}
                  fontFamily={"Poppins"}
                  fontSize={4}
                  padding={1}
                  fontWeight={3}
                  lineHeight={0}
                >
                  Sign out
                </Text>
              </Flex>
            </Box>
          </Modal>
        </Box>
      )}
      {showFeedback && (
        <Modal
          open={showFeedback}
          setOpen={() => {
            setShowFeedback(false);
          }}
          background="transparent"
        >
          <Box
            backgroundColor={"#fff"}
            border={"1px solid #dbdbdb"}
            borderRadius={"8px"}
            position={"fixed"}
            right={"10px"}
            top={"70px"}
            margin={"4px"}
            width={["200px", "200px", "200px"]}
          >
            <Flex flexDirection={"column"}>
              <Flex
                alignItems={"center"}
                hover={{
                  backgroundColor: "#E5D4FF",
                }}
                p={1}
                style={{ cursor: "pointer" }}
              >
                <GrStatusCritical color="blue" />
                <Text
                  color={"#363636"}
                  fontFamily={"Poppins"}
                  fontSize={5}
                  padding={1}
                  fontWeight={3}
                  lineHeight={0}
                  onClick={() => {
                    setShowIfeedback(true);
                      props.setType("complaint");
                  }}
                >
                  Complaint
                </Text>
              </Flex>
              <Flex
                alignItems={"center"}
                hover={{
                  backgroundColor: "#E5D4FF",
                }}
                p={1}
                style={{ cursor: "pointer" }}
              >
                <MdOutlineSettingsSuggest color="blue" />
                <Text
                  color={"#363636"}
                  fontFamily={"Poppins"}
                  fontSize={5}
                  padding={1}
                  fontWeight={3}
                  lineHeight={0}
                  onClick={() => {
                    setShowIfeedback(true);
                      props.setType("suggestion");
                  }}
                >
                  Suggestion
                </Text>
              </Flex>{" "}
              <Flex
                alignItems={"center"}
                hover={{
                  backgroundColor: "#E5D4FF",
                }}
                p={1}
                style={{ cursor: "pointer" }}
              >
                <FaQuestionCircle color="blue" />
                <Text
                  color={"#363636"}
                  fontFamily={"Poppins"}
                  fontSize={5}
                  padding={1}
                  fontWeight={3}
                  lineHeight={0}
                  onClick={() => {
                    setShowIfeedback(true);
                      props.setType("question");
                  }}
                >
                  Question
                </Text>
              </Flex>{" "}
            </Flex>
          </Box>
        </Modal>
      )}

      <Formik
        initialValues={props.initialValues}
        onSubmit={(values) => {
          props.handleCreateFeedback(values);
        }}
      >
        {({ handleSubmit }) => {
          const handleCreate = () => {
            if (props.isCreated) {
              setShowIfeedback(false);
              toast.success("Feedback successfully submitted");
            }
          };

          return (
            <Form>
              {showIfeedback && (
                <Modal
                  open={showIfeedback}
                  setOpen={() => {
                    setShowIfeedback(false);
                  }}
                >
                  <Flex
                    flexDirection={"column"}
                    alignItems={"center"}
                    py={2}
                    width={["90%", "40%"]}
                    justifyContent={"center"}
                    position={"relative"}
                    borderRadius={1}
                    backgroundColor={"#ffffff"}
                  >
                    <Flex
                      width={"70%"}
                      flexDirection={"column"}
                      style={{gap:"8px"}}
                      
                    >
                      <InputField
                        name="title"
                        type={"text"}
                        label={"Title"}
                        placeholder="Enter title"
                      />

                      <InputField
                        name="content"
                        type={"textarea"}
                        label={"Message"}
                        placeholder="Enter Message"
                      />
                      <Flex flexDirection={"row"} style={{gap:10}}>
                        <Button
                          borderRadius={1}
                          fontWeight={"bold"}
                          fontFamily={"poppins"}
                          color={"white"}
                          fontSize={5}
                          my={2}
                          variant="primary"
                          padding={1}
                          width={"50%"}
                          type="submit"
                          textAlign={"center"}
                          onClick={() => handleCreate()}
                        >
                          Submit
                        </Button>
                        <Button
                          borderRadius={1}
                          fontWeight={"bold"}
                          fontFamily={"poppins"}
                          color={"white"}
                          fontSize={5}
                          my={2}
                          backgroundColor="#d34a14"
                          padding={1}
                          width={"50%"}
                          textAlign={"center"}
                          onClick={() => setShowIfeedback(false)}
                        >
                          Cancel
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Modal>
              )}
            </Form>
          );
        }}
      </Formik>

      <Modal
        open={showLogout}
        setOpen={() => {
          setShowLogout(false);
        }}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
          width={["50%", "30%"]}
          background={"#fff"}
          height={["50%", "20%"]}
          flexDirection={"column"}
          borderRadius={1}
          p={1}
          py={3}
        >
          <Text fontSize={5} fontFamily={"poppins"} p={2}>
            Are you sure you want to log out?
          </Text>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={["column", "row"]}
            style={{ gap: "20px" }}
            p={1}
            width={"70%"}
          >
            <Button
              borderRadius={0}
              variant="warning"
              fontFamily={"poppins"}
              fontSize={4}
              onClick={() => {
                dispatch(actions.logout());
                navigate("/login");
                setShowLogout(!showLogout);
              }}
              p={1}
              width={"100%"}
            >
              Logout
            </Button>
            <Button
              backgroundColor={"#eaecef"}
              borderRadius={0}
              fontFamily={"poppins"}
              fontSize={4}
              onClick={() => {
                setShowLogout(!showLogout);
              }}
              width={"100%"}
              p={1}
            >
              Cancel
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

export default UserInfo;
