import React, { Fragment } from 'react';
import { View, Text } from 'native-base';
import cstyles from '../../constants/cstyles';
import { TextInput } from 'react-native';

function CreateInterest() {
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

export default CreateInterest;
