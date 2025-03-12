export type IPagesNavigation = {
  loginScreen: undefined;
  homeScreen: undefined;
  listAlarmsScreen: undefined;
  createAlarmScreen: {
    initialHour: number;
    initialMinute: number;
    initialIsPM: boolean;
  };
};
