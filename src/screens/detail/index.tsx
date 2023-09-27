import React, {useEffect} from 'react';
import {View} from 'react-native';

import Bar from 'components/bar';
import Button from 'components/button';
import Card from 'components/card';

import {useFeedStore} from 'store/slices/feed';
import {IFeedStore} from 'store/slices/feed/feed.types';

import {NavigationInterface} from 'types/navigation-param-list';
import {styles} from './styles';
import {imageMMKV} from 'store/mmkv';
import {useToast} from 'store/slices/toast';
import {IToastStore} from 'store/slices/toast/toast.types';

const DetailScreen: React.FC<NavigationInterface> = ({navigation}) => {
  const {selectedFeed, setSelectedFeed} = useFeedStore<IFeedStore>(
    state => state,
  );

  const {clearToast, success} = useToast<IToastStore>(state => state);

  const handleButtonPress = () => {
    imageMMKV('set', selectedFeed);
    success('Image saved successfully');
  };

  useEffect(() => {
    return () => {
      clearToast();
      setSelectedFeed(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.view}>
        <Bar variant="standard" isBack onPress={() => navigation.pop()} />
        <Card
          width={'100%'}
          height={'100%'}
          uri={selectedFeed?.src?.large2x}
          title={selectedFeed?.alt}
          photographer={selectedFeed?.photographer}
          isFull
        />
      </View>
      <Button title="Save" onPress={handleButtonPress} />
    </View>
  );
};

export default DetailScreen;
