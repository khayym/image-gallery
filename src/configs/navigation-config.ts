import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {colors} from 'theme/colors';
import {pixelHeight} from 'theme/metrics';

export const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  orientation: 'portrait',
  animation: 'slide_from_right',
  contentStyle: {backgroundColor: colors.Sky.White},
};

export const tabOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: colors.Primary.Base,
  tabBarStyle: {
    backgroundColor: colors.Sky.White,
    height: pixelHeight(56),
    elevation: 0,
    shadowColor: '#C2C0C029',
    borderTopColor: '#C2C0C029',
    borderTopWidth: 0.8,
  },
  tabBarItemStyle: {
    height: 72,
  },
};

export interface NavigationProp {
  navigation: NativeStackNavigationProp<any>;
}
