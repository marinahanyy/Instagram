import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsFeedd from '../screens/newsFeed.js';
import Profile from '../screens/profile.js';
import Bucket from './screens/Bucketlist.js';
import Home from './screens/home.js';
import AddPost from './screens/AddPost.js';
const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true }} >
    <AppStack.Screen name="News" component={NewsFeedd} />
    <AppStack.Screen name="Profile" component={Profile} />
    <AppStack.Screen name="Todo" component={Bucket} />
    <AppStack.Screen name="Addpost" component={AddPost} />
    </AppStack.Navigator>

    </NavigationContainer>
    );
}