import { useState } from "react";
import { Box, Flex } from "../../ui/Blocks";
import SideBarMenu from "./sideBarMenu";

export function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const [mode] = useLocalStorage('mode','')
  return (
    <Box
      backgroundColor={"#0D0F11"}
      height={"100%"}
      position="fixed"
      left={0}
      top={0}
      width={"15%"}
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
        {/* <Flex
            bottom={1}
            position={"absolute"}
            right={1}
            paddingBottom={2}
            marginRight={2}
          >
            {isCollapsed ? (
              <AiFillCaretLeft
                fontSize={"20px"}
                onClick={() => {
                  setIsCollapsed(!isCollapsed);
                }}
              />
            ) : (
              <AiFillCaretRight
                fontSize={"20px"}
                onClick={() => {
                  setIsCollapsed(!isCollapsed);
                }}
              />
            )}
          </Flex> */}
      </Flex>
    </Box>
  );
}
