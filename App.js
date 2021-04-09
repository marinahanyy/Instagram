import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/home.js';
import Bucket from './screens/Bucketlist.js';
import NewsFeedd from './screens/newsFeed.js';
import Profile from './screens/profile.js';





const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View>
      <Text>hi</Text>
    </View>
  );
}