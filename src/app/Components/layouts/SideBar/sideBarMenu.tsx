import { getMenu } from "../../../../utils/getMenu";
import { Flex } from "../../ui/Blocks";
import SideBarMenuItem from "./SideBarMenuItem";
import { ISideBarMenu, SideBarMenuProp } from "./types";



 function SideBarMenu(props: SideBarMenuProp) {
    // const role = localStorage.getItem('admin');
    return (
      <Flex
        flexDirection={"column"}
        height={"90%"}
        overflow={"auto"}
        p={1}
        pt={1}
        pl={2}
        style={{ gap: "10px" }}

      >
        {getMenu('admin')?.map((menuItem: ISideBarMenu, index: number) => {
          return (
            <SideBarMenuItem
              isCollapsed={props.isCollapsed}
              key={index}
              menuItem={menuItem}
              setIsCollapsed={props.setIsCollapsed}
            />
          );
        })}
      </Flex>
    );
  }
  export default SideBarMenu;