export interface notificationPageState {
  isgettingNotification: boolean;
  isNotificationExist: boolean;
  notification:Inotification[];
  notifications:[];
}

export interface Inotification {
  [x: string]: any;
  userId: string;
  title: string;
  message: string;
  isRead?: boolean;
  type: "info" | "warning" | "error" | "success";
  createdAt: any;
  updatedAt: Date;
}
