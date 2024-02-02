import { useLocation, Link } from "react-router-dom";
import { Flex, Text } from "../../ui/Blocks";
import { SideBarMenuItemProp } from "./types";
import React from "react";

export function SideBarMenuItem(props: SideBarMenuItemProp) {
  const { label, to, icon } = props.menuItem;
  const { pathname } = useLocation();
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "",
      }}
      to={`/`}
    >
      <Flex
        alignItems={"center"}
        backgroundColor={pathname.includes(to) ? "#0C07FF" : ""}
        borderRadius={0}
        color={location.pathname.includes(to) ? "#fff" : ""}
        onClick={() => {
          props.setIsCollapsed?.(false);
          props.setshowMenu?.(false);
        }}
        p={"2px"}
        style={{ gap: "10px", cursor: "pointer" }}
      >
        <Text fontSize={3} fontWeight={2} color={'#fff'}>
          {React.createElement(icon)}
        </Text>

        {/* {props.isCollapsed && ( */}
          <Text
            fontFamily="Inter"
            fontSize={2}
            lineHeight={1}
            padding={1}
            color={'#fff '}
            // backgroundColor={"#0C07FF"}
          >
            {label}
          </Text>
        {/* )} */}
      </Flex>
    </Link>
  );
}

export default SideBarMenuItem;
