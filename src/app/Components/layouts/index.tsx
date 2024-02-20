import { useEffect, useState } from "react";
import { Box, Flex } from "../ui/Blocks";
import Header from "./Header/header";
import { SideBar } from "./SideBar/sideBar";
import { LayoutsComponentProps } from "./types";

const Layouts = (props: LayoutsComponentProps) => {
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
    <Box top={"0px"} left={"0px"}>
      <Header />
      <SideBar />
      <Flex marginTop={"60px"} marginLeft={isCollapsed ? "50px" : "195px"}>
        {props.children}
      </Flex>
    </Box>
  );
};

export default Layouts;
