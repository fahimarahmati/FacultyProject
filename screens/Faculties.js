import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { color } from 'react-native-reanimated'

const faculties = [
  {id:6, image: require("../assets/7.JPG"), name: "ComputerScience", detail: "ComputerScience faculty was established in 1990 and started working at Herat University in order to train specialist and experts in cultivating and stockbreeding.This faculty has three departments; Database, Software and Network ,Food Technology where students are studying. "},
  {id:1, image: require("../assets/1.JPG"), name: "Literature", detail: "As Herat University, Faculty of Language Literature and Humanities was established in 1988, and as a first faculty of Herat University has a historical and top position.Right now, it has five departments; Dari Language and Literature, English Language and Literature, Arabic Language and Literature, Pashto Language and Literature, and German Language and Literature."},
  {id:2, image: require("../assets/2.JPG"), name: "Public Administration", detail: "Herat University, as a dynamic and growing scientific center, understood the necessity of the Afghan community to specialize in policymaking, governance and management by presenting the proposal No.1987 dated January 1, 2011, and establishing the Faculty of Public Administration and Policy as the honorable Minister of Higher Education. "},
  {id:3, image: require("../assets/3.jpg"), name: "Agriculture", detail: "Agriculture faculty was established in 1989 and started working at Herat University in order to train specialist and experts in cultivating and stockbreeding.This faculty has eight departments; Agronomy, Horticulture, Plant Protection, Animal Science, Economics and Agricultural Extension, Soil Science and Irrigation, Forestry and Natural resources, Food Technology where students are studying. "},
  {id:4, image: require("../assets/4.jpg"), name: "Economic", detail: "Herat University’s Faculty of Economics was established in 1989 in line with the needs of Afghan society. The faculty was part of the development plan of the Ministry of Higher Education of Afghanistan.The first graduates of this faculty joined the workforce in 1994. The number of students currently studying at the three departments of the national economy, enterprise economics, and banking is currently 650. "},
  {id:5, image: require("../assets/5.jpg"), name: "Medical", detail: "Herat Faculty of Medicine is one of the 16 Faculties of Herat University. Initially, it was founded in 1990, under the authority of the Ministry of Public Health. In 1996, the management of Herat Faculty of Medicine was transferred to Herat University. The Faculty of Medicine is the third Faculty that was established in Herat University."},
  {id:6, image: require("../assets/6.jpg"), name: "Science", detail: "The Faculty of Law and Political Science was established in 2002, including 71 male and female students, as an academic and specialized faculty for propagation the culture of law jurisdiction and civility of experts (lawyers, politicians, judges, attorney generals, attorneys, and public service experts).Students of this faculty should take 8 semesters (4 years) for a bachelor degree. "},
]
import FacultiesList from '../components/FacultiesList'
export default function Faculties({navigation}){
   return(
    <View style={{flex: 1}}>
      <FlatList
      data={faculties}
      renderItem={({item}) => {
        return <FacultiesList image={item.image} name={item.name} detail={item.detail} onPress={()=>navigation.navigate("Details", item)}
      />
      }
    }
      />
    
  </View>
   )
  
} 
