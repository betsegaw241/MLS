import { Box, Flex } from "../../ui/Blocks";
import UserInfo from "./userInfo";
import Search from "app/Components/ui/SearchBar";
import { IoMdNotificationsOutline } from "react-icons/io";
import Badge from "@mui/material/Badge";
import { useEffect, useState } from "react";
const Header = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isCollapsed, setIsCollapsed] = useState(screenSize.width < 1000);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsCollapsed(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Flex
        backgroundColor={"#E3E2FF"}
        height={"40px"}
        position={"fixed"}
        py={["10px"]}
        top={"0px"}
        width={isCollapsed ? "95%" : "86%"}
        marginLeft={isCollapsed ? "40px" : "190px"}
        paddingRight={2}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mx={3}
          width={"100%"}
        >
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
