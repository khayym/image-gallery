import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Feed: undefined;
  Saved: undefined;
};

export interface NavigationInterface {
  navigation: NativeStackNavigationProp<any>;
}
