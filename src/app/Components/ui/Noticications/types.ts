import { INotificationData } from "app/Pages/Notification/slices/types";
import { INotification } from "app/Pages/Notification/types";

export interface NotificationProps {
  page: number;
  loading:boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  Notifications: INotificationData;
}
