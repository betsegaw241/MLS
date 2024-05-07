import Badge from "@mui/material/Badge";
import { Box, Flex, Text } from "../Blocks";
import { IoMdNotificationsOutline } from "react-icons/io";
import UserInfo from "../../layouts/Header/userInfo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../Modal";
import { NotificationProps } from "app/Pages/Notification/types";
import NotificationComponent from "../Noticications/Notification";
import NotificationPage from "app/Pages/Notification";
import { useSelector } from "react-redux";
import { selectCount } from "app/Pages/Notification/slices/selector";

const Header = (props: NotificationProps) => {
  const navigate = useNavigate();
  // const [count, setCount] = useState(0);
  const count = useSelector(selectCount);
  const [showNotification, setShowNotification] = useState(false);
  if (showNotification) {
    document.body.style.overflow = "hidden"; // Disable scrolling on the body when modal is open
  } else {
    document.body.style.overflow = "auto"; // Re-enable scrolling on the body when modal is closed
  }
  return (
    <>
      <Flex
        backgroundColor={"#E3E2FF"}
        height={"70px"}
        position={"fixed"}
        py={["0px"]}
        px={["0px"]}
        top={"0px"}
        left={"0px"}
        width={"100%"}
        alignItems={"center"}
      >
        <Flex
          justifyContent={"space-between"}
          width={"100%"}
          alignItems={"center"}
          paddingX={10}
        >
          <Text
            fontFamily={"lobster"}
            fontSize={8}
            color={"#065AD8"}
            fontWeight={"bold"}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/pharmacist/home")}
          >
            Medicine Locator
          </Text>

          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            style={{ gap: 50 }}
            marginLeft={"auto"}
          >
            <Box
              onClick={() => {
                setShowNotification(!showNotification);
              }}
            >
              <Badge badgeContent={count} color="error">
                <IoMdNotificationsOutline
                  color="action"
                  style={{ fontSize: 30 }}
                />
              </Badge>
            </Box>
            <Box marginLeft={"auto"}>
              <UserInfo type={"AAAA"} address={""} ttl={0} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Modal
        open={showNotification}
        setOpen={() => {
          setShowNotification(!showNotification);
        }}
      >
        <NotificationPage />
      </Modal>
    </>
  );
};
export default Header;
