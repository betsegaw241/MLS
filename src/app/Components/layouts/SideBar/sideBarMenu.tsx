import { useSelector } from "react-redux";
import { getMenu } from "../../../../utils/getMenu";
import { Flex } from "../../ui/Blocks";
import { ISideBarMenu } from "./types";
import { selectRole } from "app/Pages/Layout/slice/selectors";
import SideBarMenuItem from "./SideBarMenuItem";

function SideBarMenu() {
  const role = useSelector(selectRole);
  return (
    <Flex
      flexDirection={"column"}
      height={"90%"}
      overflow={"none"}
      width={"100%"}
      pt={2}
      style={{ gap: "10px" }}
    >
      {getMenu(role || localStorage.getItem("role"))?.map(
        (menuItem: ISideBarMenu, index: number) => {
          return <SideBarMenuItem key={index} menuItem={menuItem} />;
        }
      )}
    </Flex>
  );
}
export default SideBarMenu;
