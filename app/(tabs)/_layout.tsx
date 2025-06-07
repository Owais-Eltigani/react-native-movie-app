import { icons } from '@/assets/constants/icons';
import { images } from '@/assets/constants/images';
import TabIcon from '@/components/tab-icon';
import { Tabs } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function _Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarItemStyle: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarStyle: {
            backgroundColor: '#0F0D23',
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 36,
            height: 52,
            position: 'absolute',
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: '#0F0D23',
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <TabIcon
                title={'Home'}
                img={images.highlight}
                icon={icons.home}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            title: 'Saved',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                title={'Saved'}
                img={images.highlight}
                icon={icons.save}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <TabIcon
                title={'Search'}
                img={images.highlight}
                icon={icons.search}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                title={'Profile'}
                img={images.highlight}
                icon={icons.person}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
