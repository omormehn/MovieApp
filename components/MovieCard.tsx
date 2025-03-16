import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Image } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";


const MovieCard = ({ id, poster_path, title, release_date, vote_average }: Movie) => {
  return (
    <Link
      //@ts-ignore
      href={`/movies/${id}`} asChild
    >
      <TouchableOpacity className='w-[102px]'>
        <Image
          source={{ uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://placehold.co/600x400/1a1a1a/ffffff.png' }}
          className='w-full h-52 rounded-lg'
          resizeMode='cover'
        />
        <Text className='text-white text-sm font-bold' numberOfLines={1}>{title}</Text>

        <View className='justify-between flex-row'>

          <View  className='flex-row items-center justify-start gap-x-1'>
            <Icon name="star" size={10} color={'yellow'} />
            <Text className='text-white text-xs font-bold uppercase'>{Math.round(vote_average / 2)}</Text>
          </View>


          <View className="text-end">
            <Text className='movie-card-texts text-end'>
              {release_date?.split('-')[0]}
            </Text>
            {/* identify movie or tv show */}
            {/* <Text className='movie-card-texts'></Text> */}
          </View>
        </View>


      </TouchableOpacity>
    </Link>
  )
}

export default MovieCard