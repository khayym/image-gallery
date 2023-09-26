import {gapVertical, pixelFont, pixelHorizontal} from 'theme/metrics';
import {colors} from 'theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    gap: gapVertical(24),
    paddingHorizontal: pixelHorizontal(16),
  },
  texts: {
    gap: gapVertical(12),
  },
  text: {
    textAlign: 'center',
    fontSize: pixelFont(20),
    color: colors.Ink.Darkest,
  },
  description: {
    fontSize: pixelFont(14),
    color: colors.Ink.Lighter,
    textAlign: 'center',
  },
});
