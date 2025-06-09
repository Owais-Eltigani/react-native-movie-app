import { icons } from '@/assets/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

export default function SearchBar({
  placeHolder,
  onPress,
  value,
  onchange,
  type,
}: {
  placeHolder: string;
  onPress?: () => void;
  value: string;
  onchange?: (text: string) => void;
  type?: boolean;
}) {
  return (
    <View className="flex-1 flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      tintColor={'#ab8bff'}
      <Image source={icons.search} className="size-5" resizeMode="contain" />
      <TextInput
        placeholder={placeHolder}
        onPress={onPress}
        // onSubmitEditing={onPress}
        value={value}
        onChangeText={onchange}
        placeholderTextColor={'#ab8bff'}
        className="flex-1 ml-2 text-white"
        inputMode={type ? 'search' : 'none'}
      />
    </View>
  );
}
