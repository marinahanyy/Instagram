import * as React from 'react';
import { Text, View } from 'react-native';
import Navigator from './routes/homeStack.js';
export default function App() {
  return (
    <View>
       <Navigator/>
    </View>
  );
}