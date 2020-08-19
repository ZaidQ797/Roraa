import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Header, Left, Body } from 'native-base';
import cstyles from '../../constants/cstyles';
import Colors from '../../constants/Colors';
import styles from './styles';
import { Entypo, AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonGradient from '../../components/ButtonGradient';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getHighlights } from '../../_actions/messages'
function HighLights({ navigation, getHighlights, user, chat_id }) {
	const [view, setView] = useState('highlights');
	const [highlights, setHighlights] = useState(null)
	useEffect(() => {
		const data = new FormData();
		data.append("u_id", user.u_id)
		data.append("u_id", chat_id)
		new Promise((rsl, rej) => {
			getHighlights(data, rsl, rej)
		}).then((res) => {
			setHighlights(res)
		}).catch(err => {
			Alert.alert("Roraa", err.message)
		})
	}, [])
	return (
		<ScrollView style={[cstyles.container, cstyles.padder]}>
			{highlights &&
				<View>
					<View style={[cstyles.itemsCenter, cstyles.flexCenter]}>
						<View style={styles.circle}>
							<AntDesign name="heart" size={30} color={Colors.secondryGradient} />
							<Text style={[styles.circleText]}>25</Text>
						</View>
						<Text style={[styles.subtitle1, cstyles.mt_10]}>Relationship level</Text>
					</View>
					<View style={[cstyles.row, cstyles.itemsCenter, cstyles.mt_25]}>
						<View style={[cstyles.itemsCenter, cstyles.container, cstyles.mx_5]}>
							<Text style={styles.subtitle2}>Lifetime</Text>
							<View style={[styles.box]}>
								<Feather name="check-circle" size={24} color="#f5d7db" />
								<Text style={[styles.boxText, cstyles.mt_10]}>{highlights.life_time}</Text>
								<Text style={[styles.boxTextGray]}>hours</Text>
							</View>
						</View>
						<View style={[cstyles.itemsCenter, cstyles.container, cstyles.mx_5]}>
							<Text style={styles.subtitle2}>Words</Text>
							<View style={[styles.box]}>
								<FontAwesome5 name="fonticons-fi" size={24} color="#E1C067" />
								<Text style={[styles.boxText, cstyles.mt_10]}>{highlights.words}</Text>
							</View>
						</View>
						<View style={[cstyles.itemsCenter, cstyles.container, cstyles.mx_5]}>
							<Text style={styles.subtitle2}>Best time</Text>
							<View style={[styles.box]}>
								<Feather name="clock" size={24} color="#B7DEBB" />
								<Text style={[styles.boxText, cstyles.mt_10]}>{highlights.best_time}</Text>
								<Text style={[styles.boxTextGray]}>PM</Text>
							</View>
						</View>
					</View>
					<View style={[cstyles.row, cstyles.itemsCenter, cstyles.mt_15]}>
						<View style={[cstyles.itemsCenter, cstyles.container, cstyles.mx_5]}>
							<Text style={styles.subtitle2}>Reply Within</Text>
							<View style={[styles.box]}>
								<Feather name="sun" size={30} color="#979fd0" />
								<Text style={[styles.boxText, cstyles.mt_10]}>{highlights.reply_within}</Text>
								<Text style={[styles.boxTextGray]}>hours</Text>
							</View>
						</View>
						<View style={[cstyles.itemsCenter, cstyles.container, cstyles.mx_5]}>
							<Text style={styles.subtitle2}>Family</Text>
							<View style={[styles.box]}>
								<Feather name="heart" size={30} color={Colors.secondryGradient} />
							</View>
						</View>
					</View>
					<View style={cstyles.my_25}>
						<ButtonGradient text="Media" style={cstyles.my_10} />
						<ButtonGradient text="Block" />
					</View>
				</View>
			}
		</ScrollView>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.authReducer.user,
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return bindActionCreators({
		getHighlights
	}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HighLights);
