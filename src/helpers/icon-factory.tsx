/* eslint-disable curly */
import React, {memo} from 'react';
import {pixelHeight} from 'theme/metrics';
import {IconFactoryProps} from 'types/icon-factory-types';

const getIconColor = (props: IconFactoryProps) => {
  const {disable, pressed, enableColor, disableColor, pressColor} = props;

  if (disable) return disableColor;
  if (pressed && pressColor) return pressColor;
  return enableColor;
};

const IconFactory: React.FC<IconFactoryProps> = ({
  Icon,
  disable = false,
  enableColor,
  disableColor,
  pressColor,
  pressed = false,
  width = 24,
  height = 24,
}) => {
  return Icon ? (
    <Icon
      color={getIconColor({
        disable,
        pressed,
        enableColor,
        disableColor,
        pressColor,
      })}
      width={pixelHeight(width)}
      height={pixelHeight(height)}
    />
  ) : null;
};

export default memo(IconFactory);
