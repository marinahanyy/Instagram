import React, {useState} from 'react';
import {TextInput,Button,StyleSheet,View} from 'react-native';


export default function AddTodo({submitHandler}){
    const [text,setText] = useState('')
    
    const changeHandler =(val)=>{
     setText(val);
    }
    return(
        <View>
            <TextInput style = {styles.input}
            placeholder='Add your new desired place 😍'
            onChangeText={changeHandler}             
            />
            <Button onPress={()=>submitHandler(text) }  title="Add Place" color='purple'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})