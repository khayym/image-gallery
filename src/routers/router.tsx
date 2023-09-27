import React, {memo, useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';

import MainRouter from './Main.Router';
import Offline from 'screens/offline';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenOptions} from 'configs/navigation-config';
import {styles} from 'configs/app-style.config';
import DetailScreen from 'screens/detail';

const Stack = createNativeStackNavigator();

const Router = (): JSX.Element => {
  const padding = useSafeAreaInsets().bottom;
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected || false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={[styles.router, {paddingBottom: padding}]}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          {isConnected ? (
            <>
              <Stack.Screen name="TabRouter" component={MainRouter} />
              <Stack.Screen name="Detail" component={DetailScreen} />
            </>
          ) : (
            <Stack.Screen name="Offline" component={Offline} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default memo(Router);
