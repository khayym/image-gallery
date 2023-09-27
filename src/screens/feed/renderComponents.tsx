import React, {memo} from 'react';
import Bar from 'components/bar';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';

export const renderHeader = () => {
  return (
    <Bar variant="large" title="Image" cation="Discover beautiful images" />
  );
};

export const renderFooter = (loading: boolean) =>
  loading ? <ActivityIndicator size="large" color="#0000ff" /> : null;

export const ItemSeparatorComponent = memo(() => (
  <View style={styles.separator} />
));
