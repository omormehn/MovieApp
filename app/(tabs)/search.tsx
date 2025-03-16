import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { icon, images } from '@/constants/image'
import MovieCard from '@/components/MovieCard'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import { useRouter } from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome'
import SearchBar from '@/components/SearchBar'
import MovieRecommendation from '@/components/MovieRecommendation'
import { updateSearchCount } from '@/services/appwrite'

const SearchScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const { data: movies, loading, error, refetch, reset } = useFetch(() => fetchMovies({ query: searchQuery }), false)

  useEffect(() => {

    const timeout = setTimeout(async () => {
      if (searchQuery.trim()) {
        await refetch();

        if (movies?.length! > 0 && movies?.[0] ) {
          await updateSearchCount(searchQuery, movies[0])
        }
      } else {
        reset();
      }
    })
    return () => clearTimeout(timeout);
  }, [searchQuery])

  return (
    <View className='flex-1 bg-primary'>
      <Image
        source={images.bg}
        className='flex-1 absolute w-full z-0'
        resizeMode='cover'
      />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'center',
          gap: 16,
          marginVertical: 16
        }}
        contentContainerStyle={{
          paddingBottom: 100
        }}

        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center items-center'>
              <Image
                source={icon.logo}
                className='w-12 h-14 mx-auto mt-16 mb-5'
              />
            </View>

            <View className='px-5'>
              <SearchBar placeholder='Search movies...' value={searchQuery} onChangeText={(text: string) => setSearchQuery(text)} />
            </View>

            {loading && (
              <ActivityIndicator
                size='large'
                color='#0000ff'
                className='my-auto mx-auto'
              />
            )}
            {error && (
              <Text className='text-red-500 px-5 py-3'>Error: {error.message}</Text>

            )}

            {!loading && !error && searchQuery.trim() && movies?.length! > 0 && (
              <Text className='text-xl text-white font-bold px-5'>
                Search results for {' '}
                <Text className='text-accent'>{searchQuery}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className='mt-10 px-5'>
              {searchQuery.trim() ?
                <Text className='text-gray-500 text-center'>
                  No Movies Found
                </Text> :
                <MovieRecommendation />
              }
            </View>
          ) : null
        }
      />
    </View>
  )
}

export default SearchScreen