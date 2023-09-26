import {StyleProp, ViewStyle} from 'react-native';

type BarVariants = 'large' | 'standard';

type CommonBarSource = {
  variant: BarVariants;
  customStyle?: StyleProp<ViewStyle>;
};

export interface IStandardBar extends CommonBarSource {
  variant: 'standard';
  title?: string;
  isBack?: boolean;
  onPress?: () => void;
}

export interface ILargeBar extends CommonBarSource {
  variant: 'large';
  title?: string;
  cation?: string;
}

export type IBar = ILargeBar | IStandardBar;
