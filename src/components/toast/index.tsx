import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useToast} from 'store/slices/toast';
import {styles} from './styles';

const Toast: React.FC = () => {
  const insets = useSafeAreaInsets();
  const {message, color} = useToast(state => state);

  return (
    <View
      style={[
        styles.root,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: color,
          top: insets.top,
          display: message ? 'flex' : 'none',
        },
      ]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default memo(Toast);
