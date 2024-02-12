import { useLocation, Link } from "react-router-dom";
import { Flex, Text } from "../../ui/Blocks";
import { SideBarMenuItemProp } from "./types";
import React, { useEffect, useState } from "react";
import "styles/fonts.css";
import { useSelector } from "react-redux";
import { selectRole } from "app/Pages/Layout/slice/selectors";

export function SideBarMenuItem(props: SideBarMenuItemProp) {
  const { label, to, icon } = props.menuItem;
  const { pathname } = useLocation();
  const role = useSelector(selectRole);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Link
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      to={`/${role}${to}`}
    >
      <Flex
        alignItems={"center"}
        backgroundColor={pathname.includes(to) ? "#0C07FF" : ""}
        borderRadius={0}
        color={location.pathname.includes(to) ? "#fff" : ""}
        onClick={() => {
          props.setshowMenu?.(false);
        }}
        paddingLeft={"10px"}
        style={{ gap: "10px", cursor: "pointer" }}
      >
        <Text fontSize={3} fontWeight={2} color={"#fff"}>
          {React.createElement(icon)}
        </Text>

        {screenSize.width > 600 && (
          <Text
            fontFamily={"poppins"}
            fontSize={5}
            lineHeight={1}
            padding={1}
            color={"#fff "}

            // backgroundColor={"#0C07FF"}
          >
            {label}
          </Text>
        )}
      </Flex>
    </Link>
  );
}

export default SideBarMenuItem;
