import { useEffect, useState } from "react";
import { Flex, Text } from "../../ui/Blocks";
import SideBarMenu from "./sideBarMenu";

export function SideBar() {
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
      {!isCollapsed ? (
        <Flex
          backgroundColor={"#0D0F11"}
          height={"100%"}
          position="fixed"
          left={"0px"}
          top={"0px"}
          alignItems={"center"}
          flexDirection={"column"}
          zIndex={200}
          width={isCollapsed ? "55px" : "200px"}
        >
          <Text
            fontFamily={"poppins"}
            fontWeight={"bold"}
            fontSize={5}
            lineHeight={1}
            paddingY={3}
            color={"#fff "}
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
      ) : null}
    </>
  );
}
