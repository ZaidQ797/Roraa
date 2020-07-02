import React, { Fragment, useState } from 'react';
import { View, Header, Left, Body, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import cstyles from '../../constants/cstyles';
import { Entypo } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import PriceBox from './PriceBox';

function PricePlan() {
	const [ plan, setPlan ] = useState([ 'basic', 'standard', 'premium' ]);
	return (
		<Fragment>
			<View style={cstyles.container}>
				<Header noShadow style={{ backgroundColor: 'transparent' }}>
					<Left>
						<Entypo name="chevron-small-left" size={24} color="black" />
					</Left>
					<Body>
						<Text style={styles.mainText}>Price Plan</Text>
					</Body>
				</Header>
				<View style={[ cstyles.container, cstyles.padder ]}>
					<View style={[ cstyles.row, cstyles.flexBetweeen ]}>
						<Text style={[ styles.mainText, { fontWeight: '100' } ]}>Select Your Plan</Text>
						<TouchableOpacity style={styles.butnStyle}>
							<Text style={styles.butnText}>Restore</Text>
						</TouchableOpacity>
					</View>
					<View style={[ cstyles.container, cstyles.my_20 ]}>
						<FlatList
							data={plan}
							horizontal
							showsHorizontalScrollIndicator={false}
							keyExtractor={(item) => item}
							renderItem={({ item, index }) => <PriceBox item={item} index={index} />}
						/>
					</View>
				</View>
			</View>
		</Fragment>
	);
}

export default PricePlan;

const styles = StyleSheet.create({
	mainText: {
		fontSize: 17,
		fontWeight: 'bold'
	},
	butnStyle: {
		backgroundColor: '#e23d7c',
		paddingVertical: 7,
		paddingHorizontal: 22,
		borderRadius: 100
	},
	butnText: {
		color: 'white',
		fontSize: 13
	}
});
