import React, { Fragment, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import { Header, Left, Right } from 'native-base';
import cstyle from '../../constants/cstyles';
import { ScrollView } from 'react-native-gesture-handler';
import { Col, Row, Grid } from 'react-native-easy-grid';
import StarsList from './StarList';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

function Home({ navigation }) {
	const [ list, setList ] = useState([
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'p',
		'q'
	]);
	return (
		<Fragment>
			<SafeAreaView style={[ cstyle.container, cstyle.bg_white ]}>
				<Header noShadow style={{ backgroundColor: 'transparent' }}>
					<Left>
						<Entypo name="chevron-small-left" size={24} color="black" />
					</Left>
					<Right>
						<TouchableOpacity>
							<Ionicons name="ios-menu" size={24} color="black" />
						</TouchableOpacity>
					</Right>
				</Header>
				<ScrollView style={[ cstyle.container, cstyle.padder, { paddingTop: 0 } ]}>
					<View style={cstyle.py_10}>
						<Text style={styles.mainText}>Top 200 Stars</Text>
					</View>
					<View>
						<Grid style={[ styles.grid, cstyle.py_20 ]}>
							<Col style={[ cstyle.px_5, cstyle.pt_30 ]}>
								<Image
									style={[ styles.smImg, cstyle.selfCenter ]}
									source={{
										uri:
											'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
									}}
								/>
								<Text style={[ styles.secondryColor, styles.number, cstyle.selfCenter ]}>2</Text>
								<Text style={[ styles.subTitle, cstyle.selfCenter ]}>Larry Porter</Text>
								<Text style={[ cstyle.selfCenter, styles.percent ]}>85%</Text>
							</Col>
							<Col style={[ cstyle.px_5 ]}>
								<Image
									style={[ styles.lgImg ]}
									source={{
										uri:
											'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
									}}
								/>
								<Text style={[ styles.secondryColor, styles.number, cstyle.selfCenter ]}>1</Text>
								<Text style={[ styles.subTitle2, cstyle.selfCenter ]}>Flora T. Chapel</Text>
								<Text style={[ cstyle.selfCenter, styles.percent ]}>90%</Text>
							</Col>
							<Col style={[ cstyle.px_5, cstyle.pt_30 ]}>
								<Image
									style={[ styles.smImg, cstyle.selfCenter ]}
									source={{
										uri:
											'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
									}}
								/>
								<Text style={[ styles.secondryColor, styles.number, cstyle.selfCenter ]}>3</Text>
								<Text style={[ styles.subTitle, cstyle.selfCenter ]}>Bette Beach</Text>
								<Text style={[ cstyle.selfCenter, styles.percent ]}>85%</Text>
							</Col>
						</Grid>
					</View>
					<View>{list.map((l, index) => <StarsList key={l} index={index} />)}</View>
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	);
}

export default Home;

const styles = StyleSheet.create({
	mainText: {
		fontSize: 30,
		fontWeight: 'bold'
	},
	smImg: {
		height: 80,
		width: '80%',
		borderRadius: 20
	},
	lgImg: {
		height: 90,
		width: 'auto',
		borderRadius: 20
	},
	secondryColor: {
		color: '#C41851'
	},
	number: {
		fontSize: 18
	},
	subTitle: {
		fontSize: 13,
		fontWeight: 'bold'
	},
	subTitle2: {
		fontSize: 15,
		fontWeight: 'bold'
	},
	percent: {
		color: 'grey',
		fontWeight: 'bold'
	},
	grid: {
		backgroundColor: '#fbfcfe',
		borderRadius: 30
	}
});
