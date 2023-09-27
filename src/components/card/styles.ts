import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {gapVertical, pixelFont, pixelHorizontal} from 'theme/metrics';

export const styles = StyleSheet.create({
  root: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  description: {
    color: colors.Sky.Base,
    fontSize: pixelFont(12),
    fontWeight: '400',
  },
  bigDescription: {
    color: colors.Sky.Base,
    fontSize: pixelFont(18),
    fontWeight: '400',
  },
  textRoot: {
    padding: pixelHorizontal(16),
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    gap: gapVertical(8),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: colors.Sky.White,
    fontSize: pixelFont(14),
    fontWeight: '700',
  },
  bigText: {
    color: colors.Sky.White,
    fontSize: pixelFont(20),
    fontWeight: '700',
  },
});
