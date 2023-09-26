import {StatusBarStyle} from 'react-native';

export type IToastStore = {
  color: string;
  message: string | null;
  statusbar: StatusBarStyle;
  error: (message: string) => void;
  success: (message: string) => void;
  info: (message: string) => void;
  clearToast: () => void;
  timeoutId: any;
};
