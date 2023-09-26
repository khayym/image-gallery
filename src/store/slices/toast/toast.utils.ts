import type {StatusBarStyle} from 'react-native';
import {IToastStore} from './toast.types';
import {colors} from 'theme/colors';
const duration = 3000;

export const initialToastStore = {
  statusbar: 'dark-content' as StatusBarStyle,
  color: colors.Sky.White,
  message: null,
  timeoutId: null,
};

const createTimeout = (set: any) => {
  return setTimeout(() => {
    set({
      color: colors.Sky.White,
      message: null,
      statusbar: 'dark-content',
    });
  }, duration);
};

export const createToastHandler = (
  set: any,
  statusBarStyle: StatusBarStyle,
  color: string,
) => {
  return (message: string) => {
    set((state: IToastStore) => {
      clearTimeout(state.timeoutId);
      return {
        statusbar: statusBarStyle,
        color,
        message,
        timeoutId: createTimeout(set),
      };
    });
  };
};
