import {StyleSheet} from 'react-native';
import {gapVertical, pixelHeight, pixelHorizontal} from 'theme/metrics';

export const styles = StyleSheet.create({
  root: {
    paddingHorizontal: pixelHorizontal(16),
    flex: 1,
  },
  scroll: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: gapVertical(5),
  },
  indicator: {
    height: '100%',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  separator: {
    height: pixelHeight(10),
  },
});
