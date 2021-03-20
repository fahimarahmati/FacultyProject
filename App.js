import React, {useState, useEffect} from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SQLite from "expo-sqlite";
const Stack = createStackNavigator();
const db = SQLite.openDatabase("contacts.db");
import Contacts from "./screens/Contacts";
import Details from "./screens/Details";
import Form from "./screens/Form";
import Faculties from "./screens/Faculties";
import Search from "./screens/searchScreen";

export default function App() {
	useEffect(() => {
		db.transaction((tx) => {
			tx.executeSql(
				"create table if not exists contact(id integer primary key autoincrement,name text, lastName text,degree text);",
				[],
				() => console.log("table created successfully")
			);
		});
	});
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Faculties" component={Faculties}/>
			<Stack.Screen name="Details" component={Details}/>
				<Stack.Screen
					name="Contacts"
					component={Contacts}
					options={({ navigation }) => ({
						headerRight: () => (
							<TouchableOpacity
								style={{ paddingRight: 20 }}
								onPress={() => navigation.navigate("Search")}>
								<Text>
									<MaterialIcons name="search" size={24} color="black" />
								</Text>
							</TouchableOpacity>
						),
					})}
				/>
				<Stack.Screen name="Form" component={Form} />
				<Stack.Screen name="Search" component={Search} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		paddingLeft: 20,
	},
	button: {
		height: 50,
		width: 60,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {},
});
