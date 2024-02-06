import { Box, Flex } from "../../ui/Blocks";
import UserInfo from "./userInfo";
import { theme } from "../../../../styles/theme";
const Header = () => {
  return (
    <>
      <Flex
        backgroundColor={theme.colors.dark.black[8]}
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
            <UserInfo />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
export default Header;
