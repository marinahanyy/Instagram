import React from 'react';
import { Text, View, Button,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    

  
  const navigation = useNavigation();
  function navigateToList() {
    navigation.navigate("Profile");
}
 
    return (
      <View style={styles.container}>
        <ScrollView>
         <Image source={require('../assets/logo.jpg')} alt="image" style={styles.image} />
        <TextInput style={styles.input} placeholder ='   email' />
        <TextInput style={styles.input1} placeholder ='   password' />
        <TouchableOpacity style ={styles.button}>
        <Button  title ='Login' onPress={()=>navigateToList()}
           color='white'/>
        </TouchableOpacity>
        </ScrollView>
      </View>   
    );
   }
  
   


const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
    
  },

  image:{
    marginTop:110, 
    height: 200,
    width: 200,
    
  },
  input:{
   borderWidth:1,
   borderColor: "#FFFFFF",
   backgroundColor: "lightgrey",
   marginTop:60,
   marginBottom:20,
   padding:8,
   width:200,
   
  },
  input1:{
    borderWidth:1,
    borderColor: "#FFFFFF",
    backgroundColor: "lightgrey",
    marginBottom:40,
    padding:8,
    width:200,
   },
  
 
  button:{
   
   backgroundColor: "#fb607f",
   borderRadius:12,
   marginLeft:15,
   padding:1,
   width:160,
   height:40,
  }});

