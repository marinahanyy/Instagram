import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const STORAGE_KEY = '@save_place'

const Todo = () => {
  const [place, setPlace] = useState('')

  useEffect(() => {
    readData()
  }, [])

  // read data
  const readData = async () => {
    try {
      const place = await AsyncStorage.getItem(STORAGE_KEY)

      if (place !== null) {
        setPlace(place)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  // save data

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, place)
      setPlace(place)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear()
      alert('Storage successfully cleared!')
    } catch (e) {
      alert('Failed to clear the async storage.')
    }
  }
  const onChangeText = place => setPlace(place)

  const onSubmitEditing = () => {
    if (!place) return
    saveData(place)
    setPlace('')
  }

  return (
    <View>
         <View style={styles.header}>
        <Text style={styles.title}>My Togo Places</Text>
        </View>
      <View>
        <Text style={styles.text}>Enter The TOGO Place here:</Text>
        <TextInput
          style={styles.input}
          value={place}
          placeholder="Add your new desired place 😍"
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <Text style={styles.word}>The added place is {place}</Text>
        <TouchableOpacity  style ={styles.button}>
        <Button onPress={clearStorage} title ='Clear Storage' 
           color='white'/>
        </TouchableOpacity>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
 
  header: {
    height:110,
    padding:30,
    backgroundColor: 'black'
  },
  title: {
    textAlign:'center',
    paddingTop:25,
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  input: {
    padding: 15,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    margin: 50
  },
  button:{
   
    backgroundColor: "black",
    borderRadius:12,
    marginLeft:15,
    padding:1,
    width:160,
    height:40,
   },
  text: {
    padding: 15,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    margin: 10,
    fontSize:20,
    fontWeight:'bold'
  },
  word: {
    fontSize: 20,
    padding: 10,
    margin:50,
    backgroundColor: 'pink'
  }
})

export default Todo