import { useState } from "react";
import { Box, Flex, Text } from "../../ui/Blocks";
import Modal from "../../ui/Modal";
import MenuList from "./menu";
import UserInfo from "./userInfo";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Flex
        backgroundColor={"#fff"}
        height={"30px"}
        position={"fixed"}
        py={["10px"]}
        top={"0px"}
        width={"86%"}
        marginLeft={"14%"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mx={3}
          width={"100%"}
        >
          <Text
            color={"white"}
            display={["block", "block", "none"]}
            fontSize={7}
            fontWeight={7}
          >
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              // backgroundColor={"red"}
              // hover ={{backgroundColor:'#fff'}}
              padding={"6px"}
              borderRadius={"50%"}
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
              style={{ cursor: "pointer" }}
            ></Flex>
          </Text>
          <Box marginLeft={"auto"}>
            <UserInfo />
          </Box>
        </Flex>
      </Flex>

      <Modal
        open={openMenu}
        setOpen={() => {
          setOpenMenu(false);
        }}
        top={"60px"}
      >
        <MenuList
          setshowMenu={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Modal>
    </>
  );
};
export default Header;
