import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/profile";
import Todo from "../screens/Todo";
import NewsFeed from "../screens/newsFeed";

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="news_feed" component={NewsFeed} />
      <Tab.Screen name="todo" component={Todo} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}
