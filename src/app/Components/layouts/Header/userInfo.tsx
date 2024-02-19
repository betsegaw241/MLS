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

const UserInfo = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { actions } = useLoginSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          src="data:image/jpeg;base64,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"
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
          <Text fontFamily={"poppins"}>John Doe</Text>
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
              <Flex
                alignItems={"center"}
                hover={{
                  backgroundColor: "#E5D4FF",
                }}
                onClick={() => navigate("/profile")}
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
              >
                <GrPowerShutdown />

                <Text
                  color={"#303030"}
                  fontFamily={"Poppins"}
                  fontSize={4}
                  padding={1}
                  fontWeight={3}
                  lineHeight={0}
                  onClick={() => {
                    setShowUserInfo(false);
                    setShowLogout(true);
                  }}
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
