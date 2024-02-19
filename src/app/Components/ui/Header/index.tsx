import Badge from "@mui/material/Badge";
import { Box, Flex, Text } from "../Blocks";
import { IoMdNotificationsOutline } from "react-icons/io";
import UserInfo from "../../layouts/Header/userInfo";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
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
          <Text
            fontFamily={"poppins"}
            fontSize={6}
            fontWeight={"bold"}
            onClick={() => navigate("/pharmacist/home")}
          >
            Medicine Locator
          </Text>

          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            style={{ gap: 50 }}
            marginLeft={"auto"}
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
