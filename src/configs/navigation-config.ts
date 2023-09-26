import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {colors} from 'theme/colors';

export const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  orientation: 'portrait',
  animation: 'slide_from_right',
  contentStyle: {backgroundColor: colors.Sky.White},
};

export interface NavigationProp {
  navigation: NativeStackNavigationProp<any>;
}
