import { useState } from "react";
import { Box, Button, Flex, Text } from "../../ui/Blocks";
import Modal from "../../ui/Modal";
import { Cross2Icon } from "@radix-ui/react-icons";
import useLocalStorage from "use-local-storage";
import { FiChevronDown } from "react-icons/fi";


const UserInfo = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  // const { actions } = useDefaultLayoutSlice();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [mode] = useLocalStorage("mode", "dark");
  localStorage.setItem("name", "admin");
  localStorage.setItem("email", "admin@mail.com");
  localStorage.setItem("role", "admin");
  return (
    <>
      <Flex
        alignItems={"center"}
        // border={"1px solid transparent"}
        backgroundColor={"#fff"}
        width={200}
        borderRadius={6}
        hover={{
          border: "1px solid #0cb7b8",
        }}
        border={mode == "dark" ? "1px solid #FFF" : "1px solid black"}
        onClick={() => {
          setShowUserInfo(!showUserInfo);
        }}
        p={0}
        position={"relative"}
        justifyContent={"space-between"}
        style={{ gap: "5px", cursor: "pointer" }}
      >
        <Box borderRadius={"50%"} height={40} width={40} overflow={"none"}>
          <img
            src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </Box>
        <Flex flexDirection={"column"}>
          <Box>omar Bill</Box>
          <Box>admin</Box>
        </Flex>
        <Box> 
        <FiChevronDown  />
        </Box>
      </Flex>
      {showUserInfo && (
        <Box
          backgroundColor={"#fff"}
          border={"1px solid #dbdbdb"}
          borderRadius={8}
          position={"fixed"}
          right={"0%"}
          top={"60px"}
          margin={"4px"}
          padding={"10px"}
          // top={['100%', '100%', '140%', '100%']}
          width={["200px", "200px", "200px"]}
        >
          <Flex justifyContent={"flex-end"}>
            <Flex borderRadius={50} hover={{ background: "#E5D4FF" }}>
              <Cross2Icon
                onClick={() => {
                  setShowUserInfo(!showUserInfo);
                }}
              />
            </Flex>
          </Flex>
          <Flex
            flexDirection={"column"}
            hover={{
              backgroundColor: "#E5D4FF",
            }}
            p={1}
            borderRadius={5}
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
            borderRadius={6}
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
        <Flex>
          <Box backgroundColor={"white"} borderRadius={8} p={4}>
            <Text fontSize={2} fontWeight={3}>
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
                borderRadius={5}
                color={"#2e3a59"}
                fontSize={2}
                onClick={() => {
                  setShowLogout(!showLogout);
                }}
                px={3}
                py={2}
              >
                Cancel
              </Button>
              <Button
                backgroundColor={"#e5484d"}
                borderRadius={5}
                color={"white"}
                fontSize={2}
                onClick={() => {
                  // dispatch(actions.logout());
                  // navigate('/login');
                  setShowLogout(!showLogout);
                }}
                px={3}
                py={2}
              >
                Log out
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Modal>
    </>
  );
};

export default UserInfo;
