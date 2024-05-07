import { useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Flex, Text } from "../Blocks";
import { Inotification } from "app/Pages/Notification/slices/types";
import { MdMessage } from "react-icons/md";

const NotificationComponent = (props: any) => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const navigate = useNavigate();
  // const notifications: Inotification[] = [
  //   {
  //     userId: "user1",
  //     title: "New Message",
  //     message: "You have a new message in your inbox.",
  //     isRead: false,
  //     type: "info",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     userId: "user2",
  //     title: "Payment Received",
  //     message: "You've received a payment of $100.",
  //     isRead: true,
  //     type: "success",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     userId: "user3",
  //     title: "Error",
  //     message: "An unexpected error occurred.",
  //     type: "error",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  // ];

  const formatDate = (dateString: string) => {
    // Create a Date object from the provided date string
    const date = new Date(dateString);
    // Extract date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month starts from 0
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

    return formattedDate;
  };

  useEffect(() => {
    setLoading(true);
    try {
      const eventSource = new EventSource("http://localhost:3000/notification/new");

      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setNotifications(data);
      };

      return () => {
        eventSource.close();
      };
    } catch (error) {
      setError(error);
    }
     finally {
       setLoading(false);
     }
  }, []);

  // useEffect(() => {
  //   const fetchNotifications = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await api({
  //         route: "/notification",
  //         method: "GET",
  //         isSecureRoute: true,
  //         query: {
  //           page: 1,
  //         },
  //       });
  //       if (res) {
  //         setNotifications(res.data);
  //       }
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchNotifications();
  // }, []);

  return (
    <Flex
      alignItems="flex-start"
      justifyContent="center"
      position="relative"
      width={["90%", "30%"]}
      style={{ position: "fixed", top: 90, right: "2%" }}
      background="#fff"
      flexDirection="column"
      p={2}
      borderRadius={1}
    >
      <Flex
        flexDirection="row"
        alignItems="center"
        width="100%"
        justifyContent="center"
        marginLeft={"4%"}
        marginBottom={2}
      >
        <IoMdNotificationsOutline color="#06a3a8f4" style={{ fontSize: 28 }} />
        <Text fontSize={8}>Notifications</Text>
      </Flex>

      <Flex
        flexDirection="column"
        width="100%"
        borderRadius="10%"
        style={{ gap: 20 }}
      >
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          notifications.map((notification, index) => (
            <Flex
              key={index}
              flexDirection="column"
              onClick={() => navigate(`/pharmacist/request/${notification.id}`)}
              borderBottom="0.5px solid #e9e7e7"
              hover={{
                backgroundColor: "#dce6e6",
              }}
              marginLeft={"40px"}
            >
              <Text fontFamily="poppins" fontSize={7}>
                <MdMessage color="#1197ccf4" style={{ fontSize: 18 }} />{" "}
                {notification.title}
              </Text>
              <Text fontFamily="poppins" fontSize={3}>
                {notification.message}
              </Text>
              <Text fontFamily="poppins" fontSize={3}>
                {formatDate(notification.createdAt)}
              </Text>
            </Flex>
          ))
        )}
        {error && <Text>Error: {error.message}</Text>}
      </Flex>
    </Flex>
  );
};

export default NotificationComponent;
