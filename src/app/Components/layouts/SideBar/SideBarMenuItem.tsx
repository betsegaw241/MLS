import { useLocation, Link } from "react-router-dom";
import { Flex, Text } from "../../ui/Blocks";
import { SideBarMenuItemProp } from "./types";
import React, { useState } from "react";
import "styles/fonts.css";
// import { selectRole } from "app/Pages/Layout/slice/selectors";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const SideBarMenuItem = (props: SideBarMenuItemProp) => {
  const { label, to, icon, subMenuItems } = props.menuItem;
  const { pathname } = useLocation();
  // const role = useSelector(selectRole);pharmacyId
  // const id = useSelector(selectpharmacyId);
  const role = localStorage.getItem("role");
  const id = localStorage.getItem("pharmacyId");
  const [openSubMenu, setOpenSubMenu] = useState(false);
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      to={role == "pharmacist" ? `/${role}${to}/${id}` : `${to}`}
    >
      <Flex
        // alignItems={"center"}
        justifyContent={"flex-start"}
        backgroundColor={pathname.includes(to) ? "#0C07FF" : ""}
        borderRadius={"4px"}
        color={location.pathname.includes(to) ? "#fff" : ""}
        p={"5px"}
        style={{ gap: "10px", cursor: "pointer" }}
        flexDirection={"column"}
      >
        <Flex
          alignItems={"center"}
          onClick={() => setOpenSubMenu(!openSubMenu)}
        >
          <Text fontSize={5} fontWeight={2} color={"#fff"}>
            {React.createElement(icon)}
          </Text>
          <Text
            fontFamily={"poppins"}
            fontSize={5}
            lineHeight={1}
            padding={1}
            color={"#fff "}
          >
            {label}
          </Text>

          {subMenuItems && subMenuItems.length > 0 ? (
            <Flex ml={"auto"}>
              {openSubMenu && subMenuItems ? (
                <IoIosArrowUp color="#fff" />
              ) : (
                <IoIosArrowDown color="#fff" />
              )}
            </Flex>
          ) : null}
        </Flex>
      </Flex>
      {openSubMenu && subMenuItems && subMenuItems.length > 0 && (
        <Flex flexDirection={"column"} style={{ gap: "2px" }} mt={"3px"}>
          {subMenuItems.map((subMenuItem, index) => (
            <Link
              key={index}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to={
                role == "pharmacist"
                  ? `/${role}${subMenuItem.to}/${id}`
                  : `${subMenuItem.to}`
              }
            >
              <Flex
                alignItems={"center"}
                backgroundColor={
                  pathname.includes(subMenuItem.to) ? "#0C07FF" : "#19191c"
                }
                // borderRadius={0}
                color={location.pathname.includes(to) ? "#fff" : ""}
                onClick={() => {
                  props.setIsCollapsed?.(false);
                  props.setshowMenu?.(false);
                }}
                style={{ gap: "5x", cursor: "pointer" }}
              >
                <Text fontSize={5} fontWeight={2} color={"transparent"}>
                  {React.createElement(icon)}
                </Text>
                <Text
                  fontFamily={"poppins"}
                  fontSize={5}
                  lineHeight={1}
                  padding={1}
                  color={"#fff "}
                >
                  {subMenuItem.label}
                </Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      )}
    </Link>
  );
};

export default SideBarMenuItem;
