import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {colors} from 'theme/colors';

export const tabOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: colors.Primary.Base,
  tabBarStyle: {
    backgroundColor: colors.Sky.White,
    height: 72,
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
