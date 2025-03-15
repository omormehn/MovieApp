import SearchBar from '@/compoonents/SearchBar';
import { icon, images } from '@/constants/image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Home = () => {

    const router = useRouter();

    return (
        <View
            className='flex-1 bg-primary'
        >
            <Image source={images.bg} className='w-full absolute z-0'/>

            <ScrollView 
                className='flex-1 px-5'
                showsVerticalScrollIndicator={false}
                contentContainerStyle= {{minHeight: '100%', paddingBottom: 10}}
            >
                <Image source={icon.logo} className='w-12 h-14 mx-auto mt-16 mb-5'/>

                <View className="flex-1 mt-5">
                    <SearchBar
                        onPress={() => router.push("/search")}
                        placeholder="Search for a Movie"
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
