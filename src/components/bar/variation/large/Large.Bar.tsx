import React from 'react';
import {View, Text} from 'react-native';
import {ILargeBar} from 'components/bar/types';
import {styles} from './styles';

const LargeBar: React.FC<ILargeBar> = ({title, cation, customStyle}) => {
  return (
    <View style={[styles.root, customStyle]}>
      <Text style={styles.text}>{title}</Text>
      {cation ? <Text style={styles.caption}>{cation}</Text> : null}
    </View>
  );
};

export default LargeBar;
