import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from 'screens/feed';
import {screenOptions} from 'configs/navigation-config';
import {MainStackParamList} from 'types/navigation-param-list';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainRouter: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Feed" component={FeedScreen} />
    </Stack.Navigator>
  );
};

export default MainRouter;
