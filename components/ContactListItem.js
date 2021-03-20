import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../utils/colors'
import Avatar from './Avatar'

export default function ContactListItem({name, lastname,faculty,onDeleteContact}){
    return(
        <TouchableOpacity  style={styles.container}>
            <View style={styles.contactInfo}>
            <Avatar name={name} size={40} />
                <View style={styles.details}>
                <Text style={styles.faculty}>{faculty}</Text>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTittle}>{lastname}</Text>
                </View>
                <View style={styles.DeleteIcon}>
                <MaterialCommunityIcons name="trash-can" color="red" size={24} onPress={onDeleteContact} />
            </View>
            </View>            
        </TouchableOpacity>
    )

} 

const styles = StyleSheet.create({
   container:{
       paddingLeft:24
   },
   contactInfo:{
       flex:1,
       flexDirection:'row',
       paddingVertical:16,
       paddingHorizontal:24,
       backgroundColor:colors.secondary,
       borderBottomWidth:0.5,
       borderBottomColor:'black'
   },
   details:{
       flex:2,
      marginLeft:20
  },
   title:{
    color:colors.black,
    fontSize:16,
    fontWeight:'blod'
},
    subTittle:{
        color:colors.black
    },
    DeleteIcon:{
        flex:1,
        marginLeft:100
    },


})