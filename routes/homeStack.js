import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsFeedd from '../screens/newsFeed.js';
import Profile from '../screens/profile.js';
const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true }} >
    <AppStack.Screen name="Profile" component={Profile} />
    <AppStack.Screen name="Dashboard" component={NewsFeedd} />
    </AppStack.Navigator>

    </NavigationContainer>
    );
}