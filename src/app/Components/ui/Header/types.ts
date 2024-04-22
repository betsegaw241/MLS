export interface notificationProp {
  notifications: NotificationData;

  initialValues: Inotification[];
  onSaveClick: (values: Inotification) => void;
  errorMessage: string;
}

export interface Inotification {
  userId: string;
  title: string;
  message: string;
  isRead?: boolean;
  type: "info" | "warning" | "error" | "success";
  createdAt: Date;
  updatedAt: Date;
}

interface NotificationData {
  data: Notification[];
}