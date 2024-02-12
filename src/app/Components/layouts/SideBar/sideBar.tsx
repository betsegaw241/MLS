import { useSelector } from "react-redux";
import { Box, Flex } from "../../ui/Blocks";
import SideBarMenuItem from "./SideBarMenuItem";
import { getMenu } from "utils/getMenu";
import { selectRole } from "app/Pages/Layout/slice/selectors";

export function SideBar() {
  const role = useSelector(selectRole);
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
        <Flex
          flexDirection={"column"}
          // backgroundColor={'#ffff'}
          height={"90%"}
          overflow={"none"}
          p={1}
          pt={2}
          style={{ gap: "10px" }}
        >
          {getMenu(role || localStorage.getItem("role"))?.map(
            (menuItem, index) => {
              return <SideBarMenuItem key={index} menuItem={menuItem} />;
            }
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
