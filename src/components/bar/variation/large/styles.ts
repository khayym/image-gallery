import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {
  gapVertical,
  pixelFont,
  pixelHorizontal,
  pixelVertical,
} from 'theme/metrics';

export const styles = StyleSheet.create({
  root: {
    paddingVertical: pixelVertical(12),
    paddingHorizontal: pixelHorizontal(24),
    gap: gapVertical(8),
  },
  text: {
    fontWeight: '700',
    fontSize: pixelFont(32),
    color: colors.Ink.Darkest,
  },
  caption: {
    fontSize: pixelFont(16),
    fontWeight: '400',
  },
});
