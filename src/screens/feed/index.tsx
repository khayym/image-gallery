import Bar from 'components/bar';
import Button from 'components/button';
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'icons/tab-icons/feed.svg';

const FeedScreen = () => {
  return (
    <View style={{paddingHorizontal: 20, gap: 10}}>
      <Text>FeedScreen</Text>
      <Bar variant="large" title="Large Title" cation="A caption" />
      <Bar variant="standard" title="Title" isBack />
      <Button
        title="primary"
        variant="primary"
        size="block"
        disable
        icon={{
          Icon: Icon,
        }}
        onPress={() => console.log('----')}
      />
      <Button
        title="secondary"
        variant="secondary"
        size="block"
        icon={{
          Icon: Icon,
        }}
        onPress={() => console.log('----')}
      />
      <Button
        title="outline"
        variant="outline"
        size="block"
        icon={{
          Icon: Icon,
        }}
        onPress={() => console.log('----')}
      />
      <Button
        title="transparent"
        variant="transparent"
        size="block"
        icon={{
          Icon: Icon,
        }}
        onPress={() => console.log('----')}
      />
      <Button
        title="primary"
        variant="primary"
        size="small"
        icon={{
          Icon: Icon,
        }}
        onPress={() => console.log('----')}
      />
      <Button
        title="Large + Primary"
        variant="primary"
        size="large"
        icon={{
          Icon: Icon,
        }}
        onPress={() => console.log('----')}
      />
      <Button
        title="Large + Primary"
        variant="primary"
        size="large"
        onPress={() => console.log('----')}
      />
    </View>
  );
};

export default FeedScreen;
