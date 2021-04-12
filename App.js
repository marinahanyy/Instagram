import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/home"
import NewsFeedd from "./screens/newsFeed"
import Profile from "./screens/profile"
import Todo from "./screens/Todo"
const Tab = createBottomTabNavigator();
function NewsFeed() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News Feed" component={NewsFeedd} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="todo" component={Todo} />
      
      
    </Tab.Navigator>
  );
}

// function HomeScreen({ navigation }) {
//   return (
//  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Login"
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// }

const RootStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Newsfeed" component={NewsFeed} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

