import React from 'react';
import {View, Text, Button} from 'react-native';
import {useToast} from 'store/slices/toast';

const FeedScreen = () => {
  const success = useToast(state => state.success);
  return (
    <View>
      <Text>FeedScreen</Text>
      <Button title="Susses" onPress={() => success('This si message')} />
    </View>
  );
};

export default FeedScreen;
