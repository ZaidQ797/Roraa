import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from 'react-native';
import cstyles from '../constants/cstyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
const ButtonGradient = ({ text, style, onPress }) => {
	return (
		<TouchableOpacity style={style && style} onPress={onPress}>
			<LinearGradient
				colors={[ Colors.primaryGradient, Colors.secondryGradient ]}
				start={[ 0.1, 0.1 ]}
				end={[ 0.5, 0.5 ]}
				style={cstyles.gradientButton}
			>
				<Text style={cstyles.gradientButtonText}>{text}</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default ButtonGradient;
