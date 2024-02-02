import { Box } from "../ui/Blocks";
import Header from "./Header/header";
import { SideBar } from "./SideBar/sideBar";
import { LayoutsComponentProps } from "./types";

const Layouts = (props: LayoutsComponentProps) => {
  return (
    <Box>
      <Header />
      <SideBar />
      {props.children}
    </Box>
  );
};

export default Layouts;
