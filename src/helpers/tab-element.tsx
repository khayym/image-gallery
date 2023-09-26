import React from 'react';
import {Text, View} from 'react-native';
import {colors} from 'theme/colors';
import {styles} from 'configs/app-style.config';

type ITabBarIcon = {
  icon: React.ReactElement;
  name: string;
  focus: boolean;
};

export const TabBarIcon: React.FC<ITabBarIcon> = ({focus, icon, name}) => {
  const color = focus ? colors.Primary.Base : colors.Sky.Dark;

  return (
    <View style={styles.tabView}>
      {React.cloneElement(icon, {color})}
      <Text style={[styles.tabLabel, {color: color}]}>{name}</Text>
    </View>
  );
};
