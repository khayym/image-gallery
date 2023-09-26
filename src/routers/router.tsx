import React, {memo, useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';

import MainRouter from './Main.Router';
import Offline from 'screens/offline';

import {styles} from 'configs/app-style.config';

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
        {isConnected ? <MainRouter /> : <Offline />}
      </NavigationContainer>
    </View>
  );
};

export default memo(Router);
