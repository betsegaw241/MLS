import { Box, Flex } from "../../ui/Blocks";
import SideBarMenuItem from "../SideBar/SideBarMenuItem";
import { getMenu } from "../../../../utils/getMenu";
import { MenuListProp } from "../SideBar/types";

function MenuList({ setshowMenu }: MenuListProp) {
    const role = localStorage.getItem('admin');
    return (
      <>
        <Box height={"100%"} width={"100%"}>
          <Flex
            backgroundColor={"#636f83"}
            flexDirection={"column"}
            height={"100%"}
            overflow={"auto"}
            p={1}
            position={"relative"}
            pt={4}
            width="70%"
          >
            {getMenu(role) ? getMenu(role).map((menuItem, index) => {
              return (
                <SideBarMenuItem
                  key={index}
                  menuItem={menuItem}
                  setshowMenu={setshowMenu}
                />
              );
            }):null}
          </Flex>
        </Box>
      </>
    );
  }


  export default MenuList;