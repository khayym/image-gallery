/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'components/toast';
import Router from 'routers/router';

import {useToast} from 'store/slices/toast';
import {IToastStore} from './src/store/slices/toast/toast.types';
import {styles} from 'configs/app-style.config';

const App: React.FC = () => {
  const {clearToast, color, statusbar} = useToast<IToastStore>(state => state);

  useEffect(() => {
    return () => {
      clearToast();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaProvider>
      <Toast />
      <StatusBar
        barStyle={statusbar}
        backgroundColor={color}
        animated={false}
      />
      <SafeAreaView
        style={[styles.safe, {backgroundColor: color}]}
        edges={{
          bottom: 'off',
          top: 'additive',
        }}>
        <Router />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default gestureHandlerRootHOC(App);
