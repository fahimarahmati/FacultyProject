import React, { useEffect} from 'react'
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import * as SQLite from 'expo-sqlite';
import colors from '../utils/colors'
import ContactListItem from '../components/ContactListItem';
import { useState } from 'react';
const db =SQLite.openDatabase('faculties.db');
export default function SearchScreen(){
    const [allContacts, setAllContacts] =useState([]);
    const [filteredContacts, setfilteredContacts] =useState([]);
    useEffect(()=>{
        db.transaction(tx=>{
            tx.executeSql('select * from contact',[], (tx, {rows})=>{
                var data =[];
                for (var i = 0; i<rows.length; i++){
                    data.push(rows[i]);
                }
                setAllContacts(data);
            })
        })
    })
    const searchContacts=(text)=>{
        const filterText = text.toLowerCase(); 
        const newContacts = allContacts.filter((contact)=>{
            const item = contact.name.toLowerCase();
            return item.indexOf(filterText) > -1;
        })
        setfilteredContacts(newContacts);
        if(text.length <1){
            setfilteredContacts([])
        }
    }
    return(
        <View>
        <View style={styles.searchContainer}>
            <TextInput placeholder="Search..." style={styles.searchInput} onChangeText={(text) =>searchContacts(text)}/>
        </View>
        {filteredContacts.length > 0 ? <FlatList
            data={filteredContacts}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => {
                return <ContactListItem name={item.name} onDeleteContact={()=> deleteContact(item.id)} />
            }}
            /> : <View>
                <Text>Nothing to display</Text>
                </View>}
      
      </View>
    )

} 

const styles = StyleSheet.create({
    searchContainer:{
        backgroundColor:colors.secondary

    },
    searchInput:{
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10,
        margin:20,
        backgroundColor:colors.white

    }
 

})