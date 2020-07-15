import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { Header, Left, Body } from 'native-base';
import cstyles from '../../constants/cstyles';
import Colors from '../../constants/Colors';
import styles from './styles';
import { Entypo, AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonGradient from '../../components/ButtonGradient';

function HighLights({ navigation }) {
	const [ view, setView ] = useState('highlights');
	return (
			<ScrollView style={[ cstyles.container, cstyles.padder ]}>
				<View style={[ cstyles.itemsCenter, cstyles.flexCenter ]}>
					<View style={styles.circle}>
						<AntDesign name="heart" size={30} color={Colors.secondryGradient} />
						<Text style={[ styles.circleText ]}>25</Text>
					</View>
					<Text style={[ styles.subtitle1, cstyles.mt_10 ]}>Relationship level</Text>
				</View>
				<View style={[ cstyles.row, cstyles.itemsCenter, cstyles.mt_25 ]}>
					<View style={[ cstyles.itemsCenter, cstyles.container, cstyles.mx_5 ]}>
						<Text style={styles.subtitle2}>Lifetime</Text>
						<View style={[ styles.box ]}>
							<Feather name="check-circle" size={24} color="#f5d7db" />
							<Text style={[ styles.boxText, cstyles.mt_10 ]}>00:02</Text>
							<Text style={[ styles.boxTextGray ]}>hours</Text>
						</View>
					</View>
					<View style={[ cstyles.itemsCenter, cstyles.container, cstyles.mx_5 ]}>
						<Text style={styles.subtitle2}>Words</Text>
						<View style={[ styles.box ]}>
							<FontAwesome5 name="fonticons-fi" size={24} color="#E1C067" />
							<Text style={[ styles.boxText, cstyles.mt_10 ]}>12</Text>
						</View>
					</View>
					<View style={[ cstyles.itemsCenter, cstyles.container, cstyles.mx_5 ]}>
						<Text style={styles.subtitle2}>Best time</Text>
						<View style={[ styles.box ]}>
							<Feather name="clock" size={24} color="#B7DEBB" />
							<Text style={[ styles.boxText, cstyles.mt_10 ]}>07:00</Text>
							<Text style={[ styles.boxTextGray ]}>PM</Text>
						</View>
					</View>
				</View>
				<View style={[ cstyles.row, cstyles.itemsCenter, cstyles.mt_15 ]}>
					<View style={[ cstyles.itemsCenter, cstyles.container, cstyles.mx_5 ]}>
						<Text style={styles.subtitle2}>Reply Within</Text>
						<View style={[ styles.box ]}>
							<Feather name="sun" size={30} color="#979fd0" />
							<Text style={[ styles.boxText, cstyles.mt_10 ]}>04:55</Text>
							<Text style={[ styles.boxTextGray ]}>hours</Text>
						</View>
					</View>
					<View style={[ cstyles.itemsCenter, cstyles.container, cstyles.mx_5 ]}>
						<Text style={styles.subtitle2}>Family</Text>
						<View style={[ styles.box ]}>
							<Feather name="heart" size={30} color={Colors.secondryGradient} />
						</View>
					</View>
				</View>
				<View style={cstyles.my_25}>
					<ButtonGradient text="Media" style={cstyles.my_10} />
					<ButtonGradient text="Block" />
				</View>
			</ScrollView>
	);
}

export default HighLights;
