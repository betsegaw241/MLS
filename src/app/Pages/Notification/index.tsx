import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNotificationPageSlice } from "app/Pages/Notification/slices";
import NotificationComponent from "app/Components/ui/Noticications/Notification";
import { selectLoading, selectNotification } from "./slices/selector";

function NotificationPage() {
  const dispatch = useDispatch();
  const { actions } = useNotificationPageSlice();
  const notifications = useSelector(selectNotification);
  const loading = useSelector(selectLoading);
  const [page, setPage] = useState(1);

 
 useEffect(() => {
   dispatch(actions.markAsReadAllNotifications());
 }, []);

  useEffect(() => {
    dispatch(actions.fetchNotifications({ limit: 10, page: page }));
  }, [page]);

  return (
    <NotificationComponent
      Notifications={notifications}
      setPage={setPage}
      page={page}
      loading={loading}
    />
  );
}
export default NotificationPage;
