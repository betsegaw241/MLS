import { useSelector } from "react-redux";
import { getMenu } from "../../../../utils/getMenu";
import { Flex } from "../../ui/Blocks";
import SideBarMenuItem from "./SideBarMenuItem";
import { selectRole } from "app/Pages/Layout/slice/selectors";

const SideBarMenu = () => {
  const role = useSelector(selectRole);
  const menuItems = getMenu(role || localStorage.getItem("role")) || [];
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
      {menuItems.map((menuItem, index) => (
        <SideBarMenuItem key={index} menuItem={menuItem} />
      ))}
    </Flex>
  );
};
export default SideBarMenu;
