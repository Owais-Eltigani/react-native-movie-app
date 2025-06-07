import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

export default function TabIcon({ title, img, icon, focused }: any) {
  if (!focused) {
    return (
      <View>
        <Image source={icon} tintColor={'#a8b5db'} className="size-5" />
      </View>
    );
  }
  return (
    <ImageBackground
      source={img}
      className="flex flex-row flex-1 w-full min-w-[112px] min-h-16 mt-4 justify-center  items-center rounded-full overflow-hidden">
      <Image source={icon} tintColor={'#151312'} />
      <Text className="text-secondary text-base font-semibold ml-2">
        {title}
      </Text>
    </ImageBackground>
  );
}
