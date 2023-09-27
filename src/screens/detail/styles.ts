import {StyleSheet} from 'react-native';
import {pixelHorizontal, pixelVertical} from 'theme/metrics';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: pixelHorizontal(16),
    paddingBottom: pixelVertical(10),
  },
  view: {
    flex: 0.9,
  },
});
