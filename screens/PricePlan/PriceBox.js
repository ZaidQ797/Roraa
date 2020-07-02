import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import cstyles from '../../constants/cstyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

function PriceBox({ item, index }) {
	return (
		<Fragment>
			<View style={styles.priceCard}>
				<View
					style={[
						styles.cardHeader,
						item === 'basic'
							? styles.bg_basic
							: item === 'standard' ? styles.bg_standard : styles.bg_premium
					]}
				>
					<Text style={[ styles.headerMain ]}>
						{item === 'basic' ? 'Basic' : item === 'standard' ? 'Standard' : 'Premium'}
					</Text>
					<Text style={[ styles.headerSubtite, cstyles.mt_10 ]}>
						{item === 'basic' ? '9.99$ / month' : item === 'standard' ? '15.99$ / month' : '20.99$ / month'}
					</Text>
				</View>
				<View style={[ styles.cardBody, cstyles.pt_15 ]}>
					<View style={[ cstyles.row, cstyles.ml_10, cstyles.itemsCenter ]}>
						<View
							style={[
								styles.circle,
								item === 'basic'
									? styles.border_basic
									: item === 'standard' ? styles.border_standard : styles.border_premium
							]}
						/>
						<Text style={[ styles.bodyText, cstyles.ml_10 ]}>Here a Feature</Text>
					</View>
					<View style={[ cstyles.row, cstyles.ml_10, cstyles.itemsCenter ]}>
						<View
							style={[
								styles.circle,
								item === 'basic'
									? styles.border_basic
									: item === 'standard' ? styles.border_standard : styles.border_premium
							]}
						/>
						<Text style={[ styles.bodyText, cstyles.ml_10 ]}>Here a Feature</Text>
					</View>
					<View style={[ cstyles.row, cstyles.ml_10, cstyles.itemsCenter ]}>
						<View
							style={[
								styles.circle,
								item === 'basic'
									? styles.border_basic
									: item === 'standard' ? styles.border_standard : styles.border_premium
							]}
						/>
						<Text style={[ styles.bodyText, cstyles.ml_10 ]}>Here a Feature</Text>
					</View>
				</View>
				<View style={styles.cardBottom}>
					<TouchableOpacity
						style={[
							styles.butnStyle,
							item === 'basic'
								? styles.bg_basic
								: item === 'standard' ? styles.bg_standard : styles.bg_premium
						]}
					>
						<Text style={styles.butnText}>Buy Now</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Fragment>
	);
}

export default PriceBox;

const styles = StyleSheet.create({
	priceCard: {
		flex: 1,
		width: Dimensions.get('window').width - 100,
		height: '100%',
		marginRight: 15
	},
	cardHeader: {
		height: '25%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20
	},
	cardBody: {
		height: '55%'
	},
	headerMain: {
		color: 'white',
		fontSize: 17,
		fontWeight: 'bold'
	},
	headerSubtite: {
		fontSize: 15,
		color: 'white'
	},
	cardBottom: {
		height: '15%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	butnStyle: {
		paddingVertical: 10,
		paddingHorizontal: 50,
		borderRadius: 100
	},
	butnText: {
		color: 'white',
		fontSize: 14
	},
	bg_basic: {
		backgroundColor: '#a719c3'
	},
	bg_standard: {
		backgroundColor: '#ff7794'
	},
	bg_premium: {
		backgroundColor: '#e23d7c'
	},
	border_basic: {
		borderColor: '#a719c3'
	},
	border_standard: {
		borderColor: '#ff7794'
	},
	border_premium: {
		borderColor: '#e23d7c'
	},
	circle: {
		width: 7,
		height: 7,
		borderRadius: 50,
		borderWidth: 2
	},
	bodyText: {
		fontSize: 15,
		color: 'grey'
	}
});
