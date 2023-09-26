import {ReactElement} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

type Icon = {
  Icon: ReactElement<SVGElement> | any;
  height?: number;
  width?: number;
  position?: 'left' | 'right';
};

type ButtonVariants = 'primary' | 'secondary' | 'outline' | 'transparent';
type ButtonSizes = 'small' | 'large' | 'block';

export type IButton = {
  title?: string;
  variant?: ButtonVariants;
  onPress?: () => void;
  size?: ButtonSizes;
  icon?: Icon;
  disable?: boolean;
  customStyle?: StyleProp<ViewStyle>;
};
