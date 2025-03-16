import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import { icon, images } from '@/constants/image';
import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import { useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Home = () => {

    const router = useRouter();

    const { data: movies, loading, error } = useFetch(() => fetchMovies({ query: '' }));

    return (
        <View
            className='flex-1 bg-primary'
        >
            <Image source={images.bg} className='w-full absolute z-0' />

            <ScrollView
                className='flex-1 px-5'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}
            >
                <Image source={icon.logo} className='w-12 h-14 mx-auto mt-16 mb-5' />

                {loading ? (
                    <ActivityIndicator
                        size='large'
                        color='#0000ff'
                        className='mt-10 self-center'
                    />
                ) : error ? (
                    <Text>Error: {error?.message}</Text>
                ) : (
                    <View className="flex-1 ">
                        <SearchBar
                            onPress={() => router.push("/search")}
                            placeholder="Search for a Movie" value={''} onChangeText={function (text: string): void {
                                throw new Error('Function not implemented.');
                            }} />

                        <>
                            <Text className='text-lg text-white font-bold mt-5 mb-3'>Latest Movies</Text>

                            <FlatList
                                data={movies}
                                renderItem={({ item }) => (
                                    <Text className='text-white text-sm'>
                                        <MovieCard
                                            {...item}
                                        />
                                    </Text>
                                )}
                                keyExtractor={(item) => item.id.toString()}
                                numColumns={3}
                                columnWrapperStyle={{
                                    justifyContent: 'flex-start',
                                    gap: 20,
                                    paddingRight: 5,
                                    marginBottom: 10
                                }}
                                className='mt-2 pb-32'
                                scrollEnabled={false}
                            />
                        </>
                    </View>
                )}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
