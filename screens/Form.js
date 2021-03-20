import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import * as SQLite from "expo-sqlite";
import colors from "../utils/colors";
const db = SQLite.openDatabase("faculties.db");

export default function Form({ navigation }) {
	const [name, setName] = useState("");
	const [lastname, setLastName] = useState("");
	const [faculty, setFaculty] = useState("");

	const addContact = (name, lastname, faculty) => {
		db.transaction((tx) => {
			tx.executeSql(
				"insert into contact(name,lastName,faculty) values (?, ?, ?)",
				[name, lastname, faculty],
				() => navigation.navigate("Contacts")
			);
		});
	};
	return (
		<View style={styles.formContainer}>
			<TextInput
				placeholder="Name"
				style={styles.input}
				value={name}
				onChangeText={(name) => setName(name)}
			/>
			<TextInput
				placeholder="LastName"
				style={styles.input}
				value={lastname}
				onChangeText={(lastname) => setLastName(lastname)}
			/>
			<TextInput
				placeholder="Faculty"
				style={styles.input}
				value={faculty}
				onChangeText={(faculty) => setFaculty(faculty)}
			/>
			<TouchableOpacity
				style={[styles.button, { backgroundColor: "blue" }]}
				onPress={() => addContact(name, lastname, faculty)}>
				<Text
					style={styles.buttonText}>
					Save
				</Text>
			</TouchableOpacity>
			
		</View>
	);
}
const styles = StyleSheet.create({
	formContainer: {
		borderRadius: 30,
		marginTop: 60,
		paddingVertical: 20,
		paddingHorizontal: 40,
	},
	input: {
		paddingBottom: 10,
		marginBottom: 10,
		borderBottomWidth: 1,
	},
	button: {
		padding: 20,
		marginTop: 20,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: colors.white,
	},
});
