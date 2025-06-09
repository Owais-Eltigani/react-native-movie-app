import { fetchMovies } from '@/actions/api';
import { useFetch } from '@/actions/hooks/useFetch';
import { trendingMovies } from '@/appwrite';
import { icons } from '@/assets/constants/icons';
import { images } from '@/assets/constants/images';
import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import TrendingCard from '@/components/TrendingCard';
import { useRouter } from 'expo-router';
import React from 'react';
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

  //? fetch the main data from the TMDP API
  const { movies, isLoading, error } = useFetch(() => fetchMovies(''));

  //? fetch the main data from the TMDP API
  const {
    movies: trending,
    isLoading: trendingLoading,
    error: trendingError,
  } = useFetch(() => trendingMovies());

  console.log('home/index: trending', trending);
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

        {isLoading || trendingLoading ? (
          <ActivityIndicator
            size={'large'}
            color={'#0000ff'}
            className="mt-10 self-center"
          />
        ) : error || trendingError ? (
          <Text className="text-3xl text-white">
            error: {error && error?.message}{' '}
            {trendingError && trendingError.message}{' '}
          </Text>
        ) : (
          <View>
            <SearchBar
              value=""
              placeHolder={'search a movie'}
              onPress={() => router.push('/search')}
            />

            {/* trending */}

            {trending && (
              <View className="mt-10">
                <Text className="text-lg text-white font-bold mb-3">
                  Trending Movies
                </Text>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="mb-4 mt-3"
                  data={trending}
                  contentContainerStyle={{
                    gap: 26,
                  }}
                  renderItem={({ item, index }) => (
                    <TrendingCard movie={item} index={index} />
                  )}
                  keyExtractor={item => item.id.toString()}
                  ItemSeparatorComponent={() => <View className="w-4" />}
                />
              </View>
            )}
            {/* trending */}

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
