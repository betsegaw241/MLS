import Badge from "@mui/material/Badge";
import { Box, Flex, Text } from "../Blocks";
import { IoMdNotificationsOutline } from "react-icons/io";
import UserInfo from "../../layouts/Header/userInfo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Flex
        backgroundColor={"#E3E2FF"}
        height={"70px"}
        position={"fixed"}
        py={["0px"]}
        px={["0px"]}
        top={"0px"}
        left={"0px"}
        width={"100%"}
        alignItems={"center"}
      >
        <Flex
          justifyContent={"space-between"}
          width={"100%"}
          alignItems={"center"}
          paddingX={10}
        >
          <Text fontFamily={"poppins"} fontSize={6} fontWeight={"bold"}>
            Medicine Locator
          </Text>
          <Flex style={{ gap: 50 }}>
            <Text fontFamily={"poppins"}>My Pharmacy</Text>
            <Text fontFamily={"poppins"}>Profile</Text>
            <Text fontFamily={"poppins"}>Settings</Text>
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            style={{ gap: 50 }}
          >
            <Box>
              <Badge badgeContent={4} color="error">
                <IoMdNotificationsOutline
                  color="action"
                  style={{ fontSize: 28 }}
                />
              </Badge>
            </Box>
            <Box marginLeft={"auto"}>
              <UserInfo />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Header;
