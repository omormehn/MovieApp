
import React from 'react'
import { Tabs } from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/Entypo';
const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    tabBarIcon: ({ size, color }) => {
                        return <Icon name="home" size={size} color={color} />
                    },
                    headerShown: false
                }} />

            <Tabs.Screen
                name='games'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="gamepad" size={size} color={color} />
                    ),
                    headerShown: false
                }} />
            <Tabs.Screen
                name='news'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Iconn name="news" size={size} color={color} />
                    ),
                    headerShown: false
                }} />
            <Tabs.Screen
                name='profile'
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" size={size} color={color} />
                    ),
                    headerShown: false
                }} />
        </Tabs>
    )
}

export default _Layout