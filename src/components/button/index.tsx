import React from 'react';
import {View, Text, Pressable} from 'react-native';
import IconFactory from 'helpers/icon-factory';
import {IButton} from './types';
import {styles} from './styles';

const Button: React.FC<IButton> = ({
  title,
  variant = 'primary',
  size = 'block',
  disable,
  icon,
  onPress,
  customStyle,
}) => {
  return (
    <Pressable
      disabled={disable}
      style={({pressed}) => [
        customStyle,
        styles.root,
        styles[variant],
        styles[size],
        pressed && styles[`${variant}Press`],
        disable && styles[`${variant}Disable`],
      ]}
      onPress={onPress}>
      {({pressed}) => (
        <View style={styles.wrapper}>
          {icon?.Icon ? (
            <IconFactory
              {...icon}
              pressed={pressed}
              enableColor={Object.values(styles[`${variant}Text`])[0]}
              pressColor={Object.values(styles[`${variant}TextPress`])[0]}
              disableColor={Object.values(styles[`${variant}TextDisable`])[0]}
              disable={disable}
            />
          ) : null}
          <Text
            style={[
              styles.text,
              styles[`${variant}Text`],
              pressed && styles[`${variant}TextPress`],
              disable && styles[`${variant}TextDisable`],
            ]}>
            {title}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default Button;
