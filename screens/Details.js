import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import {useRoute} from '@react-navigation/native'
import colors from '../utils/colors'
export default function Details({navigation}){
  const route = useRoute().params
    const {name, image, detail}= route
   return(
    <View>
    <View style={styles.container}>
    <Text style={styles.TextName}>{name} Faculty</Text>
      <Image source={{uri:image}} style={{height:200, width:300}}/>
      <br></br>
      <Text>
         {detail}
      </Text>
    
          <TouchableOpacity style={[styles.button,{backgroundColor:'blue', marginLeft: 250}]} onPress={()=> navigation.navigate('Contacts')}>
              <Text style={styles.buttonText}>Teachers</Text>
          </TouchableOpacity>
    </View>
  </View>
   )
  
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:20,
      paddingLeft:20,
      
    },
    button: {
      height:50,
      width:100,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:20,
      marginBottom:20,
      marginTop:20
      
  },
  buttonText: {
  color:colors.white
  },
  TextName:{
    marginBottom:20
  }
  });