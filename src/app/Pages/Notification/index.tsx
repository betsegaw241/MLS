import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNotificationPageSlice } from "app/Pages/Notification/slices";
import NotificationComponent from "app/Components/ui/Noticications/Notification";
import { selectNotification } from "./slices/selector";

function NotificationPage() {
  const dispatch = useDispatch();
  const { actions } = useNotificationPageSlice();
  const notifications = useSelector(selectNotification);
  // const { id } = useParams();
  const id = localStorage.getItem("id");


  
  const generateRandomDate = (start: Date, end: Date) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };
   useEffect(() => {
    dispatch(actions.fetchNotifications(id));
 }, []);
 

  return <NotificationComponent Notifications={notifications} />;
}
export default NotificationPage;
