import React from 'react';
import {StyleSheet,Text,View} from 'react-native';


export default function Header() {
    return(
        <View style={styles.header}>
        <Text style={styles.title}>My Todos Places</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     header:{
      height:110,
      padding:30,
      backgroundColor: 'black'
     },
     title:{
         textAlign:'center',
         paddingTop:25,
         color:'white',
         fontSize:20,
         fontWeight:'bold',
     }
});