import { icons } from '@/assets/constants/icons';
import { images } from '@/assets/constants/images';
import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import { moviesResults } from '@/constant/mockData';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

export default function Index() {
  const router = useRouter();
  const [movies, setMovies] = useState(moviesResults);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);

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
          <Text className="text-3xl text-white">error: </Text>
        ) : (
          <View>
            <SearchBar
              placeholderText={'search a movie'}
              onPress={() => router.push('/search')}
            />

            <Text className="text-lg text-white font-bold  mt-5 mb-3">
              Latest Movies
            </Text>
            {/*  */}
            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={item => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
                gap: 20,
                paddingRight: 4,
                marginBottom: 10,
              }}
              scrollEnabled={false}
            />
          </View>
        )}

        {/* dynamic data */}
      </ScrollView>
    </View>
  );
}
