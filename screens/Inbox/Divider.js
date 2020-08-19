import React from 'react';
import { View, Text } from 'react-native';
import cstyles from '../../constants/cstyles';
import styles from './styles';

function Divider({ time }) {
	return (
		<View style={[ cstyles.row, cstyles.itemsCenter, cstyles.my_10 ]}>
			<View style={styles.divider} />
			<Text style={styles.dividerText}>{time}</Text>
			<View style={styles.divider} />
		</View>
	);
}

export default Divider;
