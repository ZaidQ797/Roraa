import React from 'react';
import { View, Text } from 'native-base';
import cstyles from '../../constants/cstyles';
import Avatar from './Avatar';
import styles from './styles';

function RecievedMessage({ image, message, isActive, time, showTime, showAvatar }) {
	return (
		<View>
			<View style={[ cstyles.row, cstyles.itemsCenter ]}>
				{showAvatar ? <Avatar image={image} isActive={isActive} /> : <View style={styles.avatar} />}
				<Text style={styles.message}>{message}</Text>
			</View>
			<Text
				style={[ styles.dividerText, !showTime ? styles.hideTime : { alignSelf: 'flex-end', marginRight: 10 } ]}
			>
				{time}
			</Text>
		</View>
	);
}

export default RecievedMessage;
