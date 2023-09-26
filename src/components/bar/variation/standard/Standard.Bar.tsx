import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IStandardBar} from 'components/bar/types';
import IconFactory from 'helpers/icon-factory';
import ChevronLeft from 'icons/chevron-left.svg';
import {colors} from 'theme/colors';
import {styles} from './styles';

const StandardBar: React.FC<IStandardBar> = ({
  title,
  onPress,
  isBack,
  customStyle,
}) => {
  return (
    <View style={[styles.root, customStyle]}>
      {isBack ? (
        <TouchableOpacity onPress={onPress}>
          <IconFactory
            Icon={ChevronLeft}
            enableColor={colors.Ink.Darkest}
            height={24}
            width={24}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.empty} />
      )}
      <Text style={styles.text}>{title}</Text>
      <View style={styles.empty} />
    </View>
  );
};

export default StandardBar;
