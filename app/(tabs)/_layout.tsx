
import React, { useState } from 'react'
import { Tabs } from 'expo-router'
import TabIcon from '@/components/TabIcon';
import { View } from 'react-native';
import { hide } from 'expo-router/build/utils/splash';
const _Layout = () => {

    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 7,
                    alignContent: 'center'
                },
                tabBarStyle: {
                    backgroundColor: '#0f0d23',
                    marginBottom: 20,
                    height: 60,
                    marginHorizontal: 20,
                    borderRadius: 30,
                    overflow: 'hidden',
                    position: 'absolute',
                    borderWidth: 1,
                    borderColor: "#0F0D23"
                }
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <View className=''>
                            <TabIcon name='Home' iconName='home' focused={focused} />

                        </View>
                    ),
                    headerShown: false
                }} />

            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon name='Search' iconName='search' focused={focused} />
                    ),
                    headerShown: false
                }} />
            <Tabs.Screen
                name='news'
                options={{
                    title: 'News',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon name='Save' iconName='bookmark' focused={focused} />

                    ),
                    headerShown: false
                }} />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon name='Profile' iconName='user' focused={focused} />

                    ),
                    headerShown: false
                }} />
        </Tabs>
    )
}

export default _Layout