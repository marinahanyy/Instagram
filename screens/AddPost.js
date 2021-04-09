import React from 'react';
import {StyleSheet,Text,View,Image,Button,TouchableOpacity} from 'react-native';


export default function Header() {
    return(
        <View style={styles.header}>
        <Text style={styles.title}>Add Post</Text>
        
        
        <View style={{flexDirection:'row',marginTop:40,justifyContent:'space-between'}}>
                 
                 <Image
                     source={{uri:"https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"}}
                     style={{width:100,height:100}}/>
                  <Image
                     source={{uri:"https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}}
                     style={{width:100,height:100}}/>

                  
                <Image
                   source={{uri:"https://images.unsplash.com/photo-1515191107209-c28698631303?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"}}
                   style={{width:100,height:100}}/>
                
                     
                     </View>
                     <TouchableOpacity style ={styles.button}>
                     <Button  title ='Add' color='white'/>
        </TouchableOpacity>
  
        </View>

    )
}

const styles = StyleSheet.create({
     header:{
      height:100,
      padding:30,
      backgroundColor: 'black'
     },
     title:{
         textAlign:'center',
         paddingTop:20,
         color:'white',
         fontSize:20,
         fontWeight:'bold',
     },
     button:{
        backgroundColor: "black",
        borderRadius:10,
        marginLeft:15,
        padding:1,
        width:120,
        height:40,
        marginTop:200,
     }
});