import * as React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import {Picker} from 'native-base';
import cstyles from '../constants/cstyles';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
const PickerUnderLineIcon = ({ placeholder, icon, value, onValueChange, pickerItems }) => {
	return (
		<View style={cstyles.pickerUnderLineContainer}>
			<View style={cstyles.inputUnderLineIconContainer}>
				<MaterialIcons name={icon} style={cstyles.inputUnderLineIcon} />
			</View>
			<Picker
				selectedValue={value}
				style={cstyles.inputUnderLineINPUT}
				placeholder={placeholder}
				onValueChange={(itemValue, itemIndex) => onValueChange && onValueChange(itemValue, itemIndex)}
			>
				<Picker.Item color="lightgray" label={placeholder} value="" />
				{pickerItems &&
					pickerItems.map((item) => <Picker.Item key={item} color="black" label={item} value={item} />)}
			</Picker>
		</View>
	);
};

export default PickerUnderLineIcon;
