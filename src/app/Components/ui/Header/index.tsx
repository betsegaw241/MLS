import Badge from "@mui/material/Badge";
import { Box, Flex, Text } from "../Blocks";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import { NotificationProps } from "app/Pages/Notification/types";
import NotificationPage from "app/Pages/Notification";
import HeaderPage from "app/Pages/HeaderPage";

const Header = (props: NotificationProps) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  // const count = useSelector(selectCount);
  const [showNotification, setShowNotification] = useState(false);
  if (showNotification) {
    document.body.style.overflow = "hidden"; // Disable scrolling on the body when modal is open
  } else {
    document.body.style.overflow = "auto"; // Re-enable scrolling on the body when modal is closed
  }
const id = localStorage.getItem("id");
    useEffect(() => {

      try {
        const eventSource = new EventSource(
          `https://medicin-locator-service.onrender.com/api/notification/new/?id=${id}`
        );

        eventSource.onmessage = (event) => {
          const data = JSON.parse(event.data);
          setCount(data);
        };

      return () => {
        eventSource.close();
      };
    } catch (error) {
    } finally {
    }
  }, []);
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
              <HeaderPage />
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
