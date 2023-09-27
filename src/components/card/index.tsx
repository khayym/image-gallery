import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {ICard} from './types';
import {styles} from './styles';

const Card: React.FC<ICard> = ({
  height,
  width,
  photographer,
  title,
  uri,
  isFull,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.root, {height, width}]}
      disabled={isFull}
      activeOpacity={0.7}>
      <FastImage
        style={styles.image}
        source={{
          uri,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <LinearGradient
        colors={['#00000000', '#00000099']}
        style={styles.textRoot}>
        <Text style={[styles.text, isFull && styles.bigText]} numberOfLines={4}>
          {title}
        </Text>
        <Text
          style={[styles.description, isFull && styles.bigDescription]}
          numberOfLines={2}>
          {photographer}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Card;
