import React, {useEffect, useState} from 'react';
import {View, Dimensions} from 'react-native';
import Bar from 'components/bar';
import Card from 'components/card';

import {imageMMKV} from 'store/mmkv';
import {FlashList} from '@shopify/flash-list';
import {ItemSeparatorComponent} from 'screens/feed/renderComponents';
import {RefreshControl} from 'react-native-gesture-handler';
import {colors} from 'theme/colors';
import {styles} from './styles';

const height = Dimensions.get('screen').height / 4;

const SavedScreen: React.FC = () => {
  const [images, setImages] = useState(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const initScreen = async () => {
    const data = await imageMMKV('get');
    setImages(data);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await initScreen();
    setRefreshing(false);
  };

  useEffect(() => {
    initScreen();
  }, []);

  return (
    <View style={styles.root}>
      <Bar variant="large" title="Saved images" />
      {!images ? null : (
        <FlashList
          data={images}
          numColumns={2}
          estimatedItemSize={100}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any) => item.id.toString()}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={({item}: any) => (
            <Card
              width={'96%'}
              height={height}
              uri={item.src.medium}
              photographer={item.photographer}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={[colors.Primary.Base]}
            />
          }
        />
      )}
    </View>
  );
};

export default SavedScreen;
