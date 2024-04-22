export interface NotificationProps {
  notifications: Notification[];
};
export interface Notification {
  userId: string;
  title: string;
  message: string;
  isRead?: boolean;
  type: "info" | "warning" | "error" | "success";
  createdAt: Date;
  updatedAt: Date;
};


