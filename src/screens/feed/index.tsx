import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  RefreshControl,
  View,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import Card from 'components/card';
import {useFeedStore} from 'store/slices/feed';
import {IFeedStore} from 'store/slices/feed/feed.types';

import {
  ItemSeparatorComponent,
  renderFooter,
  renderHeader,
} from './renderComponents';

import {colors} from 'theme/colors';
import {styles} from './styles';
import {useNavigator} from 'hooks/useNavigator';

const height = Dimensions.get('screen').height / 4;

const FeedScreen = () => {
  const [page, setPage] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const navigateDetail = useNavigator({route: 'Detail'});

  const {
    data,
    fetchData,
    loading,
    feedController,
    paginateData,
    wait,
    setSelectedFeed,
  } = useFeedStore<IFeedStore>(state => state);

  const handleRefresh = async () => {
    feedController.abort();
    setRefreshing(true);
    await fetchData();
    setPage(1);
    setRefreshing(false);
  };

  const fetchMoreData = () => {
    if (!wait) {
      const nextPage = page + 1;
      paginateData(nextPage);
      setPage(nextPage);
    }
  };

  const handleCardPress = (item: any) => {
    setSelectedFeed(item);
    navigateDetail();
  };

  useEffect(() => {
    fetchData();

    return () => {
      feedController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.root}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.Primary.Base}
          style={styles.indicator}
        />
      ) : (
        <FlashList
          data={data?.photos}
          extraData={page}
          numColumns={2}
          estimatedItemSize={100}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any) => item.id.toString()}
          ListFooterComponent={() => renderFooter(wait)}
          ListHeaderComponent={renderHeader}
          ItemSeparatorComponent={ItemSeparatorComponent}
          onEndReached={fetchMoreData}
          onEndReachedThreshold={1}
          renderItem={({item}: any) => (
            <Card
              width={'96%'}
              height={height}
              uri={item.src.medium}
              photographer={item.photographer}
              onPress={() => handleCardPress(item)}
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

export default FeedScreen;
