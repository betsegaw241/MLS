import { useSelector } from "react-redux";
import { getMenu } from "../../../../utils/getMenu";
import { Flex } from "../../ui/Blocks";
import SideBarMenuItem from "./SideBarMenuItem";
import { ISideBarMenu, SideBarMenuProp } from "./types";
import { selectRole } from "app/Pages/Layout/slice/selectors";

function SideBarMenu(props: SideBarMenuProp) {
  const role = useSelector(selectRole);
  return (
    <Flex
      flexDirection={"column"}
      // backgroundColor={'#ffff'}
      height={"90%"}
      overflow={"none"}
      p={1}
      pt={2}
      style={{ gap: "10px" }}

    >
      {getMenu(role || localStorage.getItem("role"))?.map((menuItem, index) => {
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
