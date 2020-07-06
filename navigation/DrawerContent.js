import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import cstyles from '../constants/cstyles';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { Feather } from '@expo/vector-icons';
import { Drawer } from 'react-native-paper';

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
					<DrawerItem style={styles.itemStyle} label="Dashboard" labelStyle={styles.labelStyle} />
					<DrawerItem style={styles.itemStyle} label="Discover" labelStyle={styles.labelStyle} />
					<DrawerItem style={styles.itemStyle} label="Messages" labelStyle={styles.labelStyle} />
					<DrawerItem style={styles.itemStyle} label="Chat" labelStyle={styles.labelStyle} />
					<DrawerItem style={styles.itemStyle} label="Invite Friends" labelStyle={styles.labelStyle} />
					<DrawerItem style={styles.itemStyle} label="Favorites" labelStyle={styles.labelStyle} />
					<DrawerItem style={styles.itemStyle} label="Settings" labelStyle={styles.labelStyle} />
					<DrawerItem style={styles.itemStyle} label="Logout" labelStyle={styles.labelStyle} />
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
	itemStyle: {
		marginTop: 0,
		marginBottom: 0,
		paddingLeft: 30,
		height: 35,
		justifyContent: 'center'
	}
});
