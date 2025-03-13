export type IPagesNavigation = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  ListAlarmsScreen: undefined;
  CreateAlarmScreen?: {
    initialHour?: number;
    initialMinute?: number;
    initialIsPM?: boolean;
  };
  ConfirmDeleteAlarmScreen: undefined;
  NotificationsScreen: undefined;
  SoundListScreen: undefined;
};
