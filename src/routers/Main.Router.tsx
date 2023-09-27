import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {tabOptions} from 'configs/navigation-config';
import {MainStackParamList} from 'types/navigation-param-list';
import {TabBarIcon} from 'helpers/tab-element';

import FeedScreen from 'screens/feed';
import SavedScreen from 'screens/saved';

import FeedIcon from 'icons/tab-icons/feed.svg';
import HeartIcon from 'icons/tab-icons/heart.svg';
import {styles} from 'configs/app-style.config';

const Tab = createBottomTabNavigator<MainStackParamList>();

const MainRouter: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={tabOptions}
      sceneContainerStyle={styles.sceneContainerStyle}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({focused}) =>
            TabBarIcon({
              name: 'Feed',
              icon: <FeedIcon width={24} height={24} />,
              focus: focused,
            }),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: ({focused}) =>
            TabBarIcon({
              name: 'Saved',
              icon: <HeartIcon width={24} height={24} />,
              focus: focused,
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainRouter;
