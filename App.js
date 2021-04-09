import * as React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
export default function App() {
  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  const Stack = createStackNavigator();

  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  return(
    <NavigationNativeContainer>
      <Stack.Navigator>
       <Stack.Screen name="settings" component={SettingsScreen}/>
      </Stack.Navigator>
    </NavigationNativeContainer>
    
  );
}