import React, { Component} from 'react'
import {StyleSheet, Text,View,FlatList ,Image} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

var flatListData = [
  {
   "key": "12",
   "name":"Marina Hany",
   "imageUrl": "https://cdn.cnn.com/cnnnext/dam/assets/190625093403-kathryn-morgan-1-live-video.jpg",
   "likers":"100 likers",
   "time":"1 day ago",
  },

  {
   "key": "122",
   "name":"Monica Zakaria",
   "imageUrl": "https://cdn.mos.cms.futurecdn.net/eAHwsumMLJoJjTckiVBBDV-320-80.jpg",
   "likers":"50 likers",
   "time":"30 minutes ago",
  },

  {"key": "123",
   "name":"Mirette Wagdy",
  "imageUrl": "https://www.groovypost.com/wp-content/uploads/2019/07/sunset-beach-phone-photos-featured.jpg",
   "likers":"120 likers",
   "time":"1 day ago",

  },

  {"key": "124",
   "name":"Mohra Ayad",
   "imageUrl": "https://images.ctfassets.net/hrltx12pl8hq/5vGgHpIiOGjW9J17CphyxY/e731238a6bbd465ec14a08a3ac79f833/shutterstock_666610420_copy.jpg?fit=fill&w=480&h=270",
   "likers":"200 likers",
   "time":"2 days ago",
  },

  {"key": "126",
   "name":"Nardeen Hany",
   "imageUrl": "https://mymodernmet.com/wp/wp-content/uploads/2019/12/photos-of-indonesia-rarindra-prakarsa-17.jpg",
   "likers":"80 likers",
   "time":"2 hours ago",
  },

  {  "key": "129",
   "name":"Meyer Wafik",
   "imageUrl": "https://www.photoblog.com/learn/wp-content/uploads/2017/06/34961973010_6c8c9b5b47_h.jpg",
   "likers":"300 likers",
   "time":"3 days ago",

  },
];

function app(props){
   const navigation = props.navigation
   //Rest of your code

class FlatListItem extends Component {
   render() {
      return(
         <View style={{
            flex:1,
            backgroundColor:'white',
         }}>
            <Text style={styles.FlatListItem}>{this.props.item.name}</Text>
            <Image
                source={{uri:this.props.item.imageUrl}}
                style={{whidth:300,height:300}}
                  > 
                
            </Image>
            <Text style={styles.FlatListItem}>{this.props.item.likers}</Text>
            <Text style={styles.FlatListItemm}>{this.props.item.time}</Text>
         

         <View style={{
            height:1,
            backgroundColor:'black',
         }}>
         </View>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   
 FlatListItem:  {  
  color:'black',
  padding:20,
  fontSize:30,  
},
FlatListItemm:  {  
   color:'black',
   padding:20,
   fontSize:15,  
 }
 });




export default class BasicFlatList extends Component{

   render() {
   return(
     <View style={{flex:1, marginTop:50}}> 
     <FlatList
      data={flatListData}
      renderItem={({item,index})=>{
         return(
            <FlatListItem item ={item} index={index}>


            </FlatListItem>
         );
 
      }} 
      >
     </FlatList> 
     
     </View>
   );
 }
 
 
 }
}