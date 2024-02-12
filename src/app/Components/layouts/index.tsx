import { Box, Flex } from "../ui/Blocks";
import Header from "./Header/header";
import { SideBar } from "./SideBar/sideBar";
import { LayoutsComponentProps } from "./types";

const Layouts = (props: LayoutsComponentProps) => {
  return (
    <Box
      position={"absolute"}
      width={"100%"}
      top={"0px"}
      left={"0px"}
      right={"0px"}
      backgroundColor={"blue"}
    >
      <Header />
      <SideBar />
      <Flex
        backgroundColor={"#f5f5f5"}
        margin={"0px"}
        ml={"auto"}
        width={["95%", "86%"]}
        marginLeft={["45px", "14%"]}
        marginTop={"50px"}
      >
        {props.children}
      </Flex>
    </Box>
  );
};

export default Layouts;
