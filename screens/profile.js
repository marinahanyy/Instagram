import React , {Component} from 'react'

import { StyleSheet, Text, View, Image,TextInput,Button, TouchableOpacity,ScrollView} from 'react-native';


const Profile =()=>{
    return(
        <ScrollView>
      <View style={{borderBottomWidth:1,borderBottomColor:"grey"}}>     
                 <View style={{marginTop:40}}>
                  <Image
                   source={{uri:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}}
                   style={{width:160,height:160,borderRadius:80}}/>
                </View>
                <View> 
                    <Text style={{marginLeft:200,marginTop:-80,fontStyle:"italic",fontSize:30}}> Maria Adel</Text>
                </View>
                <View style={{marginLeft:110,marginBottom:10,flexDirection:'row',marginTop:20,justifyContent:'space-between',marginLeft:20,marginRight:20}}>
                    <Text style={{fontSize:17}}>8 posts</Text>
                    <Text style={{fontSize:17}}>70 followers</Text>
                    <Text style={{fontSize:17}}>50 following</Text>
               
                </View>
                
          </View>
          


               <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between',marginLeft:20,marginRight:20}}>
                 
               <Image
                   source={{uri:"https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"}}
                   style={{width:160,height:160}}/>
                <Image
                   source={{uri:"https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}}
                   style={{width:160,height:160}}/>
                   
                   </View>
            
               
                   <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between',marginLeft:20,marginRight:20}}>
            
                   <Image
                   source={{uri:"https://images.unsplash.com/photo-1515191107209-c28698631303?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"}}
                   style={{width:160,height:160}}/>
                <Image
                   source={{uri:"https://images.unsplash.com/photo-1549212926-920647491c5d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}}
                   style={{width:160,height:160}}/>
                   
                   </View>
            
                   <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between',marginLeft:20,marginRight:20}}>
            
            <Image
            source={{uri:"https://images.unsplash.com/photo-1551179939-b839002d0a18?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80"}}
            style={{width:160,height:160}}/>
         <Image
            source={{uri:"https://images.unsplash.com/photo-1593974107239-202f6210f09f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"}}
            style={{width:160,height:160}}/>
            
            </View>
     
              
            <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between',marginLeft:20,marginRight:20}}>
            
            <Image
            source={{uri:"https://images.unsplash.com/photo-1568917338259-3c797fa8d961?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}}
            style={{width:160,height:160}}/>
         <Image
            source={{uri:"https://images.unsplash.com/photo-1546052646-a88eafec0399?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=335&q=80"}}
            style={{width:160,height:160}}/>
            
            </View>
     

          </ScrollView>
          
    )
}


export default Profile