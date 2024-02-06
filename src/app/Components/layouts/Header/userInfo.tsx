import { useState } from "react";
import { Box, Button, Flex, Text } from "../../ui/Blocks";
import Modal from "../../ui/Modal";
// import { Cross2Icon } from "@radix-ui/react-icons";
// import useLocalStorage from "use-local-storage";
import { FiChevronDown } from "react-icons/fi";
import "styles/fonts.css";

const UserInfo = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  // const { actions } = useDefaultLayoutSlice();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [mode] = useLocalStorage("mode", "dark");

  return (
    <>
      <Flex
        alignItems={"center"}
        // border={"1px solid transparent"}
        backgroundColor={"#fff"}
        width={200}
        borderRadius={2}
        hover={{
          border: "1px solid #0cb7b8",
        }}
        // border={mode == "dark" ? "1px solid #FFF" : "1px solid black"}
        onClick={() => {
          setShowUserInfo(!showUserInfo);
        }}
        p={0}
        position={"relative"}
        justifyContent={"space-between"}
        // style={{ gap: "5px", cursor: "pointer" }}
      >
        <Flex flexDirection={"column"}>
          <Box>omar Bill</Box>
          <Box>admin</Box>
        </Flex>
        <Box>
          <FiChevronDown />
        </Box>
      </Flex>
      {showUserInfo && (
        <Box
          backgroundColor={"#fff"}
          border={"1px solid #dbdbdb"}
          borderRadius={2}
          position={"fixed"}
          right={"0%"}
          top={"60px"}
          margin={"4px"}
          padding={"10px"}
          // top={['100%', '100%', '140%', '100%']}
          width={["200px", "200px", "200px"]}
        >
          <Flex justifyContent={"flex-end"}>
            <Flex borderRadius={1} hover={{ background: "#E5D4FF" }}>
              {/* <Cross2Icon
                onClick={() => {
                  setShowUserInfo(!showUserInfo);
                }}
              /> */}
            </Flex>
          </Flex>
          <Flex
            flexDirection={"column"}
            hover={{
              backgroundColor: "#E5D4FF",
            }}
            p={1}
            borderRadius={1}
            pl={3}
            style={{ cursor: "pointer" }}
          >
            <Text
              color={"#363636"}
              fontFamily={"Poppins"}
              fontSize={2}
              padding={1}
              fontWeight={3}
              lineHeight={1}
              onClick={() => {
                setShowUserInfo(!showUserInfo);
              }}
            >
              {localStorage.getItem("name")}
            </Text>
            <Text
              color={"#303030"}
              fontFamily={"Poppins"}
              fontSize={1}
              fontWeight={1}
              lineHeight={1}
              onClick={() => {
                setShowUserInfo(false);
              }}
            >
              {localStorage.getItem("email")}
            </Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            hover={{
              backgroundColor: "#E5D4FF",
            }}
            p={1}
            borderRadius={1}
            pl={3}
            style={{ cursor: "pointer" }}
          >
            <Text
              color={"#303030"}
              fontFamily={"Poppins"}
              fontSize={2}
              padding={1}
              fontWeight={3}
              lineHeight={1}
              onClick={() => {
                setShowUserInfo(false);
                setShowLogout(true);
              }}
            >
              Sign out
            </Text>
          </Flex>
        </Box>
      )}

      <Modal
        open={showLogout}
        setOpen={() => {
          setShowLogout(false);
        }}
      >
        <Flex
          justifyContent={"center"}
          borderRadius={2}
          p={4}
          flexDirection={"column"}
          backgroundColor={"white"}
          alignItems={"center"}
        >
          <Text fontSize={3} fontWeight={3} fontFamily={"poppins"}>
            Are you sure you want to log out?
          </Text>
          <Flex
            alignItems={"center"}
            justifyContent={"flex-end"}
            mt={2}
            style={{ gap: "20px" }}
          >
            <Button
              backgroundColor={"#eaecef"}
              borderRadius={1}
              color={"#2e3a59"}
              fontSize={3}
              fontFamily={"poppins"}
              onClick={() => {
                setShowLogout(!showLogout);
              }}
              px={3}
              py={1}
            >
              Cancel
            </Button>
            <Button
              variant="warning"
              borderRadius={1}
              fontFamily={"poppins"}
              fontSize={3}
              onClick={() => {
                // dispatch(actions.logout());
                // navigate('/login');
                setShowLogout(!showLogout);
              }}
              px={3}
              py={1}
            >
              Log out
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

export default UserInfo;
