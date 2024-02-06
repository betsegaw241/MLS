import { useEffect, useState } from "react";
import { Box, Flex,Text } from "../../ui/Blocks";
import SideBarMenu from "./sideBarMenu";

export function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const [mode] = useLocalStorage('mode','')
 
  return (
    <Box
      backgroundColor={"#0D0F11"}
      height={"100%"}
      position="fixed"
      left={"0px"}
      top={"0px"}
      width={["55px", "200px", "200px", "15%"]}

      // width={isCollapsed ? ["24%", "25%", "15%"] : ["9%", "8%", "8%", "5%"]}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        paddingTop={100}
      >
        <SideBarMenu
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        
      </Flex>
    </Box>
  );
}
