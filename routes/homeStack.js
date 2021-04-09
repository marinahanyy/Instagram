import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsFeedd from '../screens/newsFeed.js';
import Profile from '../screens/profile.js';
import Home from '../screens/home.js';
import todo from '../screens/Todo.js';





const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();
export default function Navigator(){

    return (

    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true }} >
       <AppStack.Screen name="Home" component={Home} />
   
    </AppStack.Navigator>

    <Tab.Navigator>
      
        <Tab.Screen name="newsfeed" component={NewsFeedd} />
        <Tab.Screen name="profile" component={Profile} />
        <Tab.Screen name="todo" component={todo} />   
    </Tab.Navigator>

     
    </NavigationContainer>
    );
}