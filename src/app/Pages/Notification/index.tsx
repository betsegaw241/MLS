import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNotificationPageSlice } from "app/Pages/Notification/slices";
import NotificationComponent from "app/Components/ui/Header/notification";
import { selectNotification } from "./slices/selector";
import LoadingPage from "utils/LoadingPage";
import { useParams } from "react-router-dom";
import { Inotification } from "./slices/types";

function NotificationPage() {
  const dispatch = useDispatch();
  const { actions } = useNotificationPageSlice();
   const notifications = useSelector(selectNotification);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actions.fetchNotifications({ id: id }));
  }, []);
  console.log(notifications);
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

  // You can add more objects as needed


  return <></>; 
}
export default NotificationPage;
