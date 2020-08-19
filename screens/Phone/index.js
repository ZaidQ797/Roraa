import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList,Modal } from 'react-native';
import { List, ListItem } from 'native-base';
import cstyles from '../../constants/cstyles';
import ButtonGradient from '../../components/ButtonGradient';
import data from './Countries'
import Colors from "../../constants/Colors";


// Default render of country flag
const defaultFlag = data.filter(
	obj => obj.name === 'United Kingdom'
)[0].flag

//Default Country code
const defaultCode = data.filter(
	obj => obj.name === 'United Kingdom'
)[0].dial_code

function Phone({ navigation }) {
	const [modalVisible, setModalVisible] = useState(false);
	const [flag, setFlag] = useState(defaultFlag);
	const [dialCode, setDialCode] = useState(defaultCode);

	function getCountry(country) {
		const countryData = data;
			const countryCode = countryData.filter(
				obj => obj.name === country
			)[0].dial_code;
			const countryFlag = countryData.filter(
				obj => obj.name === country
			)[0].flag
			// Set data from user choice of country
		setDialCode(countryCode)
		setFlag(countryFlag)
		setModalVisible(false);

	}

	return (
		<SafeAreaView style={cstyles.container}>
			<Text style={styles.title}>Enter your Phone Number!</Text>
			<View style={[cstyles.row, cstyles.itemsCenter, styles.padder]}>
				<TouchableOpacity style={styles.flagContainer} onPress={()=> setModalVisible(true)}>
					<Text style={styles.flag}>{flag}</Text>
					<Text style={styles.codeText}>{dialCode}</Text>
				</TouchableOpacity>
				<TextInput style={styles.input} placeholder="Type phone No."  />
			</View>
			<Text style={[ styles.subtitle ]}>
				Tap Next to recieve an SMS confirmation from Account kit powered bt Facebook. Roraa uses Facebbok
				technology to help you sign in, but you don't need a Facebook account, Message and data rates may apply.
			</Text>
			<ButtonGradient text="NEXT" style={[ cstyles.padder, { marginTop: 20 } ]} onPress={()=> navigation.navigate("Confirmation")} />

       {/*Modal For Country Picker*/}
			<Modal
				animationType="slide" // fade
				transparent={false}
				visible={modalVisible}>
				<View style={{ flex: 1 }}>
					<List style={{flex:10}}>
						<FlatList
							data={data}
							keyExtractor={(item, index) => index.toString()}
							renderItem={
								({ item }) =>
									<ListItem
										style={[cstyles.row, cstyles.flexBetweeen, cstyles.itemsCenter,{marginLeft: 0, paddingHorizontal: 20}]}
									onPress={() => getCountry(item.name)}
									>
										<View style={[cstyles.row,cstyles.itemsCenter]}>
										<Text style={styles.flag}>{item.flag}</Text>
										<Text style={styles.codeText} >{item.name}</Text>
										</View>
										<Text style={[styles.codeText]} >{item.dial_code}</Text>
									</ListItem>
							}
						/>
					</List>
					<TouchableOpacity
						onPress={()=> setModalVisible(false)}
						style={styles.closeButtonStyle}>
						<Text style={styles.textStyle}>
							Close
						</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</SafeAreaView>
	);
}

export default Phone;

const styles = StyleSheet.create({
	title: {
		paddingTop: 50,
		color: '#000',
		fontSize: 25,
		fontWeight: '700',
		textAlign: 'center'
	},
	subtitle: {
		fontWeight: '700',
		fontSize: 13,
		paddingHorizontal: 50,
		paddingVertical: 20,
		textAlign: 'center',
		lineHeight: 20
	},
	flag: {
	  fontSize:20
	},
	flagContainer:{
		flexDirection:"row",
		backgroundColor:"white",
		paddingHorizontal: 10,
		borderRadius: 10,
		height: 50,
		justifyContent:"center",
		alignItems:"center",
	},
	input:{
		flex:1,
		backgroundColor:"white",
		paddingHorizontal: 15,
		borderRadius:10,
		height: 50,
		marginLeft: 10,
	},
	padder:{
		paddingHorizontal: 40,
		paddingVertical: 15
	},
	codeText:{
		fontSize: 15,
		fontWeight:"bold",
		paddingLeft: 8
	},
	closeButtonStyle:{
		height: 50,
		alignItems: 'center',
		justifyContent: "center",
		backgroundColor: Colors.secondryGradient
	},
	textStyle:{
		color:"white",
		fontSize:20,
		fontWeight:"bold"
	}
});
