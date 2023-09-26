import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {pixelFont, pixelHeight, pixelWidth} from 'theme/metrics';

export const styles = StyleSheet.create({
  root: {
    height: pixelHeight(48),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  empty: {
    width: pixelWidth(24),
  },
  text: {
    color: colors.Ink.Darkest,
    fontSize: pixelFont(16),
  },
});
