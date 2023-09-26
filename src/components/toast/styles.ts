import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {pixelFont} from 'theme/metrics';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 5,
    position: 'absolute',
    zIndex: 999,
    width: '100%',
    top: -100,
  },
  text: {
    fontSize: pixelFont(14),
    flexShrink: 1,
    textAlign: 'center',
    flex: 1,
    color: colors.Sky.White,
  },
});
