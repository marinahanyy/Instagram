import React, {useState} from 'react';
import {StyleSheet,Text,View,FlatList} from 'react-native';
import  Header from '../components/header.js'
import  TodoItem from '../components/todoItem.js'
import  AddTodo from '../components/addTodo.js'

export default function Todo() {
  const [todos,setTodos] = useState([
   {text:'America',key:'1'},
   {text:'Amesterdam',key:'2'},
   {text:'Belgium',key:'3'},
   {text:'Paris',key:'4'},
   {text:'Australia',key:'5'},
   {text:'Berlin',key:'6'},
   
  ]);

   const pressHandler = (key) => {
       setTodos((prevTodos)=>{
           return prevTodos.filter(todo=>todo.key!=key);
       }) 
   }

   const submitHandler = (text) => {
     setTodos((prevTodos)=>{
       return[
         {text:text, key: Math.random().toString()},
         ...prevTodos
       ];
     })
   }


    return (
     <View style={styles.container}>
      <Header/>
  

     <View style={styles.content}>
      <AddTodo submitHandler={submitHandler}/>

      <View style={styles.list}>
        <FlatList

           data={todos}
           renderItem={({item})=>(
            <TodoItem item = {item} pressHandler={pressHandler}/>
           )}
       />


      </View>
     </View>
     </View>

    );
}

const styles = StyleSheet.create({
 container: {
   flex:1,
   backgroundColor:'#fff',
 },
 content:{
   padding:40,
 },

 list:{
   marginTop:20,
 }
});