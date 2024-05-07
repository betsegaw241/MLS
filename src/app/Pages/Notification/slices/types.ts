export interface notificationPageState {
  isgettingNotification: boolean;
  isNotificationExist: boolean;
  notification: INotification[];
  notifications: [];
  count: number;
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
