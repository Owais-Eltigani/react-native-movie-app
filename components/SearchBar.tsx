import { icons } from '@/assets/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

export default function SearchBar({
  placeholderText,
  onPress,
}: {
  placeholderText: string;
  onPress?: () => void;
}) {
  return (
    <View className="flex-1 flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      tintColor={'#ab8bff'}
      <Image source={icons.search} className="size-5" resizeMode="contain" />
      <TextInput
        placeholder={placeholderText}
        onPress={onPress}
        // onSubmitEditing={onPress}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={'#ab8bff'}
        className="flex-1 ml-2 text-white"
        inputMode="search"
      />
    </View>
  );
}
