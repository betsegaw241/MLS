import { useState } from "react";
import { Box, Button, Flex, Text } from "../../ui/Blocks";
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

const UserInfo = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { actions } = useLoginSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profilePicture: any = localStorage.getItem("avatar");
  const name = localStorage.getItem("name");
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
          paddingX={2}
          display={["none", "none", "none", "block"]}
        >
          <Text fontFamily={"poppins"}>{name}</Text>
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
                  <IoMdSettings />
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
                  <CgProfile />
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
                <GrPowerShutdown />

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

      <Modal
        open={showLogout}
        setOpen={() => {
          setShowLogout(false);
        }}
      >
        <Flex
          alignItems={"center"}
          height={"20%"}
          justifyContent={"center"}
          position={"relative"}
        >
          <Box backgroundColor={"white"} borderRadius={1} p={4}>
            <Text fontSize={3} fontWeight={4}>
              Are you sure you want to log out?
            </Text>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              mt={2}
              style={{ gap: "20px" }}
            >
              <Button
                borderRadius={0}
                variant="warning"
                color={"white"}
                fontSize={2}
                onClick={() => {
                  dispatch(actions.logout());
                  navigate("/login");
                  setShowLogout(!showLogout);
                }}
                px={4}
                py={1}
              >
                Log out
              </Button>
              <Button
                backgroundColor={"#eaecef"}
                borderRadius={0}
                color={"#2e3a59"}
                fontSize={2}
                onClick={() => {
                  setShowLogout(!showLogout);
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
    </>
  );
};

export default UserInfo;
