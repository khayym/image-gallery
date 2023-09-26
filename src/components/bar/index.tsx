import React from 'react';
import StandardBar from './variation/standard/Standard.Bar';
import LargeBar from './variation/large/Large.Bar';
import {IBar, ILargeBar, IStandardBar} from './types';

const Bar: React.FC<IBar> = props => {
  const {variant = 'standard'} = props;

  switch (variant) {
    case 'standard':
      return <StandardBar {...(props as IStandardBar)} />;
    case 'large':
      return <LargeBar {...(props as ILargeBar)} />;
    default:
      return null;
  }
};

export default Bar;
