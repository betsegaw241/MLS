import { Box } from "../ui/Blocks";
import Header from "./Header/header";
import { SideBar } from "./SideBar/sideBar";
import DataTable from "./Main";

import { LayoutsComponentProps } from "./types";

const Layouts = (props: LayoutsComponentProps) => {
  return (
    <Box top={"0px"} left={"0px"}>
      <Header />
      <SideBar />
      <Box
        height={"84%"}
        width={"84%"}
        marginLeft={["55px", "200px", "200px", "15%"]}
        marginTop={"70px"}
      >
        <DataTable />
      </Box>
      {props.children}
    </Box>
  );
};

export default Layouts;
