import { useSearchParams } from 'expo-router/build/hooks';
import React from 'react';
import { Text, View } from 'react-native';

const Details = () => {
  const params = useSearchParams().get('id');
  return (
    <View>
      <Text>Details:{params} </Text>
    </View>
  );
};

export default Details;
