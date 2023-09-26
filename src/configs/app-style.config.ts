import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {pixelFont} from 'theme/metrics';

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.Sky.White,
  },
  router: {
    flex: 1,
    backgroundColor: colors.Sky.White,
  },
  tabView: {
    alignItems: 'center',
    gap: 4,
    width: '100%',
  },
  tabLabel: {
    fontSize: pixelFont(13),
  },
  sceneContainerStyle: {
    backgroundColor: colors.Sky.White,
  },
});
