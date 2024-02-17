import { Box, Flex } from "../../ui/Blocks";
import UserInfo from "./userInfo";
import Search from "app/Components/ui/SearchBar";
import { IoMdNotificationsOutline } from "react-icons/io";
import Badge from "@mui/material/Badge";
const Header = () => {
  return (
    <>
      <Flex
        backgroundColor={"#E3E2FF"}
        height={"25px"}
        position={"fixed"}
        py={["10px"]}
        top={"0px"}
        width={["95%", "86%"]}
        // width={["50px",'15%']}
        marginLeft={["45px", "14%"]}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mx={3}
          width={"100%"}
        >
          <Box marginLeft={"auto"}>
            <Search/>
          </Box>

          <Box marginLeft={"50%"}>
            <Badge badgeContent={4} color="error">
              <IoMdNotificationsOutline
                color="action"
                style={{ fontSize: 28 }}
              />
            </Badge>
          </Box>
          <Box marginBottom={"2"} marginLeft={"auto"}>
            <UserInfo />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
export default Header;
