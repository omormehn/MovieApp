import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icon } from '@/constants/image'

interface Props {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = ({onPress, placeholder}: Props) => {
  return (
    <View 
        style={{flexDirection: 'row', alignItems: 'center'}}
        className=' bg-dark-200 rounded-full px-5 py-4'
    >

        <Image source={icon.search} className='size-5' resizeMode='contain' tintColor='#ab8bff'/>

        <TextInput
            onPress={onPress}
            value=''
            placeholder={placeholder}
            onChangeText={() => {}}
            placeholderTextColor='#a8b5db'
            className='flex-1 mx-2 text-white'
        />
    </View>
  )
}

export default SearchBar