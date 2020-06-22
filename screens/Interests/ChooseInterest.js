import React, { Fragment } from 'react';
import { View, Text } from 'native-base';
import { TextInput } from 'react-native';
import cstyles from '../../constants/cstyles';

function ChooseInterest() {
	return (
		<Fragment>
			<View style={cstyles.container}>
				<View>
					<Text>Upload Photo</Text>
				</View>
				<TextInput placeholder="Title" />
				<View>
					<Text>categories</Text>
					<View />
				</View>
			</View>
		</Fragment>
	);
}

export default ChooseInterest;
