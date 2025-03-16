import { fetchRecommendations } from '@/services/api';
import useFetch from '@/services/useFetch';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MovieRecommendation = () => {

    const { data: movies, loading, error } = useFetch(() => fetchRecommendations());

    return (
        <View>
            <Text className='text-white font-extrabold text-xl mb-5'>Movie Recommendations</Text>
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Link href={`/movies/${item.id}`} asChild>
                <TouchableOpacity className='flex-row my-3 gap-6'>
                    <Image
                        source={{ uri: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'https://placehold.co/600x400/1a1a1a/ffffff.png' }}
                        className='size-24 rounded-lg'
                        resizeMode='cover'
                    />
                    <Text className='text-white z-50 text-base font-bold' numberOfLines={1}>{item.original_name}</Text>

                </TouchableOpacity>
            </Link>}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default MovieRecommendation;
