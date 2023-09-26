import {create} from 'zustand';
import {IToastStore} from './toast.types';
import {createToastHandler, initialToastStore} from './toast.utils';
import {colors} from 'theme/colors';

export const useToast = create<IToastStore>(set => ({
  ...initialToastStore,
  error: createToastHandler(set, 'light-content', colors.Red.Darkest),
  success: createToastHandler(set, 'light-content', colors.Green.Lightest),
  info: createToastHandler(set, 'light-content', colors.Sky.Dark),
  clearToast: () => {
    set(state => {
      clearTimeout(state.timeoutId);
      return {
        ...initialToastStore,
      };
    });
  },
}));
