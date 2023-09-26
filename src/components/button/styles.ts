import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {
  gapHorizontal,
  pixelFont,
  pixelHorizontal,
  pixelVertical,
} from 'theme/metrics';

export const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderRadius: 48,
  },
  primaryDisable: {
    backgroundColor: colors.Sky.Light,
    borderColor: colors.Sky.Light,
  },
  wrapper: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: pixelHorizontal(15),
    gap: gapHorizontal(12),
  },
  primaryTextDisable: {
    color: colors.Sky.Dark,
  },
  secondaryDisable: {
    backgroundColor: colors.Sky.Light,
    borderColor: colors.Sky.Light,
  },
  secondaryTextDisable: {
    color: colors.Sky.Dark,
  },
  outlineDisable: {
    borderColor: colors.Sky.Base,
  },
  outlineTextDisable: {
    color: colors.Sky.Dark,
  },
  transparentDisable: {
    backgroundColor: 'transparent',
  },
  transparentTextDisable: {
    color: colors.Sky.Base,
  },
  primaryTextPress: {
    color: colors.Sky.White,
  },
  secondaryTextPress: {
    color: colors.Primary.Dark,
  },
  transparentTextPress: {
    color: colors.Primary.Dark,
  },
  outlineTextPress: {
    color: colors.Primary.Dark,
  },
  primaryText: {
    color: colors.Sky.White,
  },
  secondaryText: {
    color: colors.Primary.Base,
  },
  outlineText: {
    color: colors.Primary.Base,
  },
  transparentText: {
    color: colors.Primary.Base,
  },
  primary: {
    backgroundColor: colors.Primary.Base,
    borderColor: colors.Primary.Base,
  },
  secondary: {
    backgroundColor: colors.Primary.Lightest,
    borderColor: colors.Primary.Lightest,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: colors.Primary.Base,
  },
  transparent: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  primaryPress: {
    borderColor: colors.Primary.Dark,
    backgroundColor: colors.Primary.Dark,
  },
  secondaryPress: {
    backgroundColor: colors.Primary.Lighter,
    borderColor: colors.Primary.Lighter,
  },
  outlinePress: {
    backgroundColor: 'transparent',
    borderColor: colors.Primary.Dark,
  },
  transparentPress: {
    backgroundColor: colors.Primary.Lightest,
    borderColor: colors.Primary.Lightest,
  },
  block: {
    paddingVertical: pixelVertical(15),
  },
  large: {
    paddingVertical: pixelVertical(15),
    alignSelf: 'flex-start',
  },
  small: {
    paddingVertical: pixelVertical(7),
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: pixelFont(16),
    fontWeight: '500',
    textAlign: 'center',
    flexGrow: 1,
  },
});
