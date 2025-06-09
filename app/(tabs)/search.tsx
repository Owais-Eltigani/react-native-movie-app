import { fetchMovies } from '@/actions/api';
import { useFetch } from '@/actions/hooks/useFetch';
import { updateSearchCount } from '@/appwrite';
import { icons } from '@/assets/constants/icons';
import { images } from '@/assets/constants/images';
import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const { movies, isLoading, error, fetchData, reset } = useFetch(
    () => fetchMovies(searchTerm),
    false
  );

  useEffect(() => {
    // search after some time
    const refetchWithDebounce = setTimeout(async () => {
      if (searchTerm.trim() && searchTerm.length >= 3) {
        if (movies) {
          updateSearchCount(searchTerm.trim(), movies[0]);
          console.log('searchTerm', searchTerm);
        }
        await fetchData();
      } else {
        reset();
      }
    }, 1000);

    return () => clearTimeout(refetchWithDebounce);
  }, [searchTerm]);

  return (
    <View className="flex-1 bg-primary ">
      <Image source={images.bg} className="absolute w-full z-2" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-10 min-h-full">
        {/* if didnt work correctly fix this to an object */}

        {/*  */}
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieCard {...item} />}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: 'flex-start',
            gap: 16,
            marginVertical: 16,
          }}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListHeaderComponent={
            <>
              <View className="w-full flex-row justify-center mt-20 items-center">
                <Image source={icons.logo} className="w-12 h-10" />
              </View>

              <View className="my-6">
                <SearchBar
                  placeHolder="Search for a movie"
                  value={searchTerm}
                  onchange={text => setSearchTerm(text)}
                  type={true}
                />
              </View>

              {isLoading && (
                <ActivityIndicator
                  size="large"
                  color="#0000ff"
                  className="my-3"
                />
              )}

              {error && (
                <Text className="text-red-500 px-5 my-3">
                  Error: {error?.message}
                </Text>
              )}

              {searchTerm.trim() && movies && (
                <Text className="text-lg text-white font-bold  mt-5 mb-3">
                  Search Results for &apos;{searchTerm}&apos;
                </Text>
              )}
            </>
          }
          ListEmptyComponent={
            isLoading && !error ? (
              <View className="mt-10 px-5">
                <Text className="text-center text-gray-500">
                  {searchTerm.trim()
                    ? 'No movies found'
                    : 'Start typing to search for movies'}
                </Text>
              </View>
            ) : null
          }
        />
      </ScrollView>
    </View>
  );
}
