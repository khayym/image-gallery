import {Text, View} from 'react-native';
import React from 'react';
import NetInfo from '@react-native-community/netinfo';
import {styles} from './styles';
import Button from 'components/button';

const Offline: React.FC = () => {
  const refreshConnection = () => NetInfo.refresh();

  return (
    <View style={styles.root}>
      <View style={styles.texts}>
        <Text style={styles.text}>It looks like you’re offline</Text>
        <Text style={styles.description}>
          Check your connection and try again
        </Text>
      </View>
      <Button title="Try again" onPress={refreshConnection} />
    </View>
  );
};

export default Offline;
