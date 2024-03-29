import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import cstyles from '../constants/cstyles';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { Feather } from '@expo/vector-icons';
import { Drawer } from 'react-native-paper';
import {List} from 'react-native-paper';

function DrawerContent(props) {
	return (
		<SafeAreaView style={cstyles.container}>
			<LinearGradient
				colors={[ Colors.primaryGradient, Colors.secondryGradient ]}
				start={[ 0.1, 0.1 ]}
				end={[ 0.5, 0.5 ]}
				style={cstyles.container}
			>
				<DrawerContentScrollView {...props}>
					<Drawer.Section>
						<View style={[ cstyles.container, styles.upperContainer ]}>
							<View style={[ cstyles.row, cstyles.flexCenter, cstyles.itemsCenter ]}>
								<View style={styles.avatar} />
								<View style={cstyles.ml_10}>
									<Text style={styles.mainText}>Danya Brainstow</Text>
									<Text style={styles.mainTextSm}>San Fransisco, USA</Text>
								</View>
							</View>
						</View>
					</Drawer.Section>
					<List.Section style={styles.sectionStyle}>
						<List.Accordion style={styles.listStyle} titleStyle={styles.labelStyle}  title="Profile">
							<List.Item style={styles.itemStyle} titleStyle={styles.labelStyle}  title="Info" onPress={() => props.navigation.navigate('World', {
								tab: 0
							})} />
							<List.Item style={styles.itemStyle} titleStyle={styles.labelStyle} title="World" onPress={() => props.navigation.navigate('World', {
								tab: 1
							})} />
							<List.Item style={styles.itemStyle} titleStyle={styles.labelStyle} title="Story" onPress={() => props.navigation.navigate('Story')} />
							<List.Item style={styles.itemStyle} titleStyle={styles.labelStyle} title="Show" onPress={() => props.navigation.navigate('World', {
								tab:2
							})} />
							<List.Item style={styles.itemStyle} titleStyle={styles.labelStyle} title="Roraa Gold" onPress={() => props.navigation.navigate('World', {
								tab: 3
							})} />
						</List.Accordion>
					</List.Section>
					<List.Section style={styles.sectionStyle}>
						<List.Accordion style={styles.listStyle} titleStyle={styles.labelStyle}  title="Roraa Ads">
							<List.Item style={styles.itemStyle} titleStyle={styles.labelStyle}  title="Create a Campaign" />
							<List.Item style={styles.itemStyle} titleStyle={styles.labelStyle} title="Budget and Schedule" />
							<List.Item style={styles.itemStyle} titleStyle={styles.labelStyle} title="Target Audience" />
							<List.Item style={styles.itemStyle} titleStyle={styles.labelStyle} title="Target Audience" />
							<List.Item style={styles.itemStyle} titleStyle={styles.labelStyle} title="Payment" />
						</List.Accordion>
					</List.Section>
					<List.Section style={styles.sectionStyle}>
						<List.Accordion style={styles.listStyle} titleStyle={styles.labelStyle}  title="Payments">
							<List.Item style={styles.itemStyle} titleStyle={styles.labelStyle}  title="Pricing Plan" onPress={() => props.navigation.navigate('PricePlan')} />
							<List.Item style={styles.itemStyle} titleStyle={styles.labelStyle} title="Plan purchased" onPress={() => props.navigation.navigate('PricePlan')} />
						</List.Accordion>
					</List.Section>
					<DrawerItem
						style={styles.drawerItemStyle}
						label="Settings"
						labelStyle={styles.labelStyle}
						onPress={() => props.navigation.navigate('Setting')}
					/>
					<DrawerItem style={styles.drawerItemStyle} label="Logout" labelStyle={styles.labelStyle} onPress={()=> props.navigation.navigate("Splash")} />
				</DrawerContentScrollView>
			</LinearGradient>
		</SafeAreaView>
	);
}

export default DrawerContent;

const styles = StyleSheet.create({
	upperContainer: {
		paddingVertical: 40
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: Colors.bright
	},
	mainText: {
		color: Colors.bright,
		fontSize: 20,
		fontWeight: 'bold'
	},
	mainTextSm: {
		color: Colors.bright,
		fontSize: 13,
		fontWeight: 'bold'
	},
	labelStyle: {
		color: Colors.bright,
		fontSize: 18,
		fontWeight: 'bold'
	},
	drawerItemStyle:{
		marginTop: 0,
		marginBottom: 0,
		padding:0,
		paddingLeft: 30,
		justifyContent: 'center'
	},
	sectionStyle:{
		marginTop: 0,
		marginBottom: 0,
		padding:0,
	},
	listStyle:{
		marginTop: 0,
		marginBottom: 0,
		padding:0,
		paddingLeft: 40,
		justifyContent: 'center',
	},
	itemStyle: {
		marginTop: 0,
		marginBottom: 0,
		padding:0,
		paddingLeft: 55,
		justifyContent: 'center'
	}
});
