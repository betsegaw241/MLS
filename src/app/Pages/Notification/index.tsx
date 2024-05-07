import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNotificationPageSlice } from "app/Pages/Notification/slices";
import { useParams } from "react-router-dom";
import NotificationComponent from "app/Components/ui/Noticications/Notification";
import { INotification } from "./types";

function NotificationPage() {
  const dispatch = useDispatch();
  const { actions } = useNotificationPageSlice();
  // const notifications = useSelector(selectNotification);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actions.fetchNotifications({ id: id }));
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     dispatch(actions.incrementCount());
  //   }, 100);
  //   return () => clearInterval(interval);
  // }, [dispatch]);

  const generateRandomDate = (start: Date, end: Date) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };

  const notifications: INotification[] = [
    {
      userId: "user1",
      title: "New Message",
      message: "You have a new message in your inbox.",
      isRead: false,
      type: "info",
      createdAt: generateRandomDate(new Date(2022, 0, 1), new Date()),
      updatedAt: generateRandomDate(new Date(2022, 0, 1), new Date()),
    },
    {
      userId: "user2",
      title: "Payment Received",
      message: "You've received a payment of $100.",
      isRead: true,
      type: "success",
      createdAt: generateRandomDate(new Date(2022, 0, 1), new Date()),
      updatedAt: generateRandomDate(new Date(2022, 0, 1), new Date()),
    },
    {
      userId: "user3",
      title: "Error",
      message: "An unexpected error occurred.",
      type: "error",
      createdAt: generateRandomDate(new Date(2022, 0, 1), new Date()),
      updatedAt: generateRandomDate(new Date(2022, 0, 1), new Date()),
    },
    {
      userId: "user1",
      title: "New Message",
      message: "You have a new message in your inbox.",
      isRead: false,
      type: "info",
      createdAt: generateRandomDate(new Date(2022, 0, 1), new Date()),
      updatedAt: generateRandomDate(new Date(2022, 0, 1), new Date()),
    },
    {
      userId: "user2",
      title: "Payment Received",
      message: "You've received a payment of $100.",
      isRead: true,
      type: "success",
      createdAt: generateRandomDate(new Date(2022, 0, 1), new Date()),
      updatedAt: generateRandomDate(new Date(2022, 0, 1), new Date()),
    },
    {
      userId: "user3",
      title: "Error",
      message: "An unexpected error occurred.",
      type: "error",
      createdAt: generateRandomDate(new Date(2022, 0, 1), new Date()),
      updatedAt: generateRandomDate(new Date(2022, 0, 1), new Date()),
    },
    // Add more notifications as needed
  ];

  return <NotificationComponent notifications={notifications} />;
}
export default NotificationPage;
