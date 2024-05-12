import { useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Text } from "../Blocks";
import { NotificationProps } from "./types";

const NotificationComponent = ({ Notifications }: NotificationProps) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const navigate = useNavigate();
const id = localStorage.getItem("id");

  const formatDate = (createdAt: Date) => {
    const date = new Date(createdAt);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} ${years === 1 ? "year" : "years"} ago`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? "month" : "months"} ago`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else {
      return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
    }
  };

  return (
    <Flex
      alignItems="flex-start"
      justifyContent="center"
      position="fixed"
      width={["90%", "90%", "40%"]}
      right={["", "", "2%", "15%"]}
      top={75}
      background="#fff"
      flexDirection="column"
      borderRadius={1}
    >
      <Flex
        flexDirection="row"
        alignItems="center"
        width="100%"
        py={2}
        borderBottom={"3px solid #f5f5f5"}
      >
        <Flex px={4} alignItems={"center"}>
          <IoMdNotificationsOutline color="blue" style={{ fontSize: 28 }} />
          <Text fontSize={6} fontFamily={"poppins"}>
            Notifications
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection={"column"}
        width={"100%"}
        maxHeight="80vh"
        overflowY="auto"
        overflowX="hidden"
      >
        <Flex
          flexDirection="column"
          justifyContent={"center"}
          width="100%"
          style={{ gap: 5 }}
          mb={50}
        >
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            Notifications.data?.map((notification, index) => (
              <Flex
                key={index}
                p={1}
                onClick={() =>
                  navigate(`/pharmacist/request/${notification._id}`)
                }
                borderBottom="0.5px solid #e9e7e7"
                hover={{
                  backgroundColor: "#dce6e6",
                }}
                justifyContent={"flex-start"}
                style={{ gap: 10, cursor: "pointer" }}
              >
                <Flex pt={"8px"}>
                  <Box
                    background="blue"
                    width={1}
                    height={1}
                    borderRadius={"50%"}
                  />
                </Flex>

                <Flex flexDirection={"column"}>
                  <Text fontFamily="poppins">{notification.title}</Text>

                  <Text fontFamily="poppins" fontSize={3}>
                    {notification.message}
                  </Text>
                  <Text fontFamily="poppins" fontSize={1} py={1}>
                    {formatDate(notification.createdAt)}
                  </Text>
                </Flex>
              </Flex>
            ))
          )}
          {error && <Text>Error: {error.message}</Text>}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NotificationComponent;
