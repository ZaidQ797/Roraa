import React from 'react';
import { View, Text } from 'native-base';
import cstyles from '../../constants/cstyles';
import Avatar from './Avatar';
import styles from './styles';

function SentMessage({ image, message, isActive, time, showTime, showAvatar }) {
	return (
		<View>
			<View style={[ cstyles.row, cstyles.itemsCenter ]}>
				<Text style={styles.sMessage}>{message}</Text>
				{showAvatar ? <Avatar image={image} isActive={isActive} /> : <View style={styles.avatar} />}
			</View>
			<Text
				style={[
					styles.dividerText,
					!showTime ? styles.hideTime : { alignSelf: 'flex-start', marginLeft: 10 }
				]}
			>
				{time}
			</Text>
		</View>
	);
}

export default SentMessage;
