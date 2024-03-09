import { Box, Flex, Text } from "../../ui/Blocks";
import UserInfo from "./userInfo";
import { IoMdNotificationsOutline } from "react-icons/io";
import Badge from "@mui/material/Badge";
import { useEffect, useState } from "react";
import Modal from "app/Components/ui/Modal";
import SideBarMenu from "../SideBar/sideBarMenu";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isCollapsed, setIsCollapsed] = useState(screenSize.width < 1000);
  const [ShowMenu, setShowMenu] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
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
  }, [ShowMenu, showLogout]);
  return (
    <>
      <Flex
        backgroundColor={"#E3E2FF"}
        height={"40px"}
        position={"fixed"}
        py={["10px"]}
        top={"0px"}
        width={"100%"}
        zIndex={200}
        marginLeft={isCollapsed ? "0px" : "180px"}
        justifyContent={isCollapsed ? "space-between" : "center"}
      >
        {isCollapsed ? (
          <Text
            onClick={() => {
              setShowMenu(true);
              setShowLogout(true);
            }}
            fontSize={10}
            ml={1}
            style={{ cursor: 'pointer' }}
          >
            <MdMenu />
          </Text>
        ) : (
          <Text></Text>
        )}

        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mx={3}
          px={3}
          marginLeft={"45%"}
        >
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
      {ShowMenu && (
        <Modal
          open={ShowMenu}
          setOpen={() => {
            setShowMenu(!ShowMenu);
          }}
          background="transparent"
        >
          <Flex
            backgroundColor={"#0D0F11"}
            height={"100%"}
            position="fixed"
            left={"0px"}
            top={"0px"}
            alignItems={"center"}
            flexDirection={"column"}
            width={"200px"}
          >
            <Text
              fontFamily={"poppins"}
              fontWeight={"bold"}
              fontSize={5}
              lineHeight={1}
              paddingY={3}
              color={"#fff "}
              style={{ cursor: 'pointer' }}
            >
              Medicine Locator
            </Text>

            <Flex
              flexDirection={"column"}
              justifyContent={"space-between"}
              width={"90%"}
            >
              <SideBarMenu />
            </Flex>
          </Flex>
        </Modal>
      )}
    </>
  );
};
export default Header;
