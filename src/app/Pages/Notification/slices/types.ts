export interface notificationPageState {
  isgettingNotification: boolean;
  isNotificationExist: boolean;
  notification: INotificationData;
  notifications: INotificationData;
  count: number;
}
export interface INotificationData {
  data: INotification[];
}

export interface INotification {
  _id?: string;
  userId: string;
  title: string;
  message: string;
  isRead?: boolean;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}
