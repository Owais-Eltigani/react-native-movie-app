import { fetchMovies } from '@/actions/api';
import { useFetch } from '@/actions/hooks/useFetch';
import { icons } from '@/assets/constants/icons';
import { images } from '@/assets/constants/images';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'expo-router';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

export default function Index() {
  const router = useRouter();
  const { data, isLoading, error } = useFetch(() => fetchMovies(''));
  return (
    <View className="flex-1 bg-primary ">
      <StatusBar backgroundColor={'#030014'} barStyle={'default'} translucent />
      <Image source={images.bg} className="absolute w-full z-2" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-10 min-h-full">
        {/* if didnt work correctly fix this to an object */}
        <Image source={icons.logo} className="mx-auto mt-20 w-12 h-10 mb-5" />

        {/* dynamic data */}

        {isLoading ? (
          <ActivityIndicator
            size={'large'}
            color={'#0000ff'}
            className="mt-10 self-center"
          />
        ) : error ? (
          <Text className="text-3xl text-white">error: {error?.message}</Text>
        ) : (
          <View>
            <SearchBar
              placeholderText={'search a movie'}
              onPress={() => router.push('/search')}
            />

            <Text className="text-lg text-white font-bold  mt-5 mb-3">
              Latest Movies
            </Text>
          </View>
        )}

        {/* dynamic data */}
      </ScrollView>
    </View>
  );
}
