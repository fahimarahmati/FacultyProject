import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity
} from 'react-native'

import colors from '../utils/colors'  
export default function FacultiesList({image, name, detail, onPress}){
   return(
    <TouchableOpacity style={styles.container}>
      <Text style={styles.TextName}>{name}</Text>

      <Image source={{uri:image}} style={{height: 200, marginTop:10, marginBottom:10,marginLeft:20,marginRight:20}}/>
      <TouchableOpacity style={{width: 200, marginLeft: 170}}>
        <Button title="More Detail" color="blue" onPress={onPress}/>
      </TouchableOpacity>
    </TouchableOpacity>

   )
  
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    button: {
      height:50,
      width:100,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:450,
      marginBottom:20,
      marginTop:20
      
  },
  buttonText: {
    color: colors.white 
 },
 TextName:{
   marginLeft:20,
   
   
 }
  });