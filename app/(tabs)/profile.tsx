import { icons } from '@/assets/constants/icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

const Profile = () => {
  return (
    <View className="bg-primary flex-1">
      <View className="flex-1  justify-center items-center  flex-col gap-4 ">
        <Image source={icons.person} className="size-10" tintColor={'#eff'} />
        <Text className="bg-gray-500 text-base">to be implemented</Text>
      </View>
    </View>
  );
};

export default Profile;
