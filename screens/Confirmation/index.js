import { Animated, Image, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ButtonGradient from '../../components/ButtonGradient';

import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

import styles, {
	ACTIVE_CELL_BG_COLOR,
	CELL_BORDER_RADIUS,
	CELL_SIZE,
	DEFAULT_CELL_BG_COLOR,
	NOT_EMPTY_CELL_BG_COLOR
} from './styles';

const { Value, Text: AnimatedText } = Animated;

const CELL_COUNT = 5;

const animationsColor = [ ...new Array(CELL_COUNT) ].map(() => new Value(0));
const animationsScale = [ ...new Array(CELL_COUNT) ].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }) => {
	Animated.parallel([
		Animated.timing(animationsColor[index], {
			useNativeDriver: false,
			toValue: isFocused ? 1 : 0,
			duration: 250
		}),
		Animated.spring(animationsScale[index], {
			useNativeDriver: false,
			toValue: hasValue ? 0 : 1,
			duration: hasValue ? 300 : 250
		})
	]).start();
};

const AnimatedExample = () => {
	const [ value, setValue ] = useState('');
	const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
	const [ props, getCellOnLayoutHandler ] = useClearByFocusCell({
		value,
		setValue
	});

	const renderCell = ({ index, symbol, isFocused }) => {
		const hasValue = Boolean(symbol);
		const animatedCellStyle = {
			backgroundColor: hasValue
				? animationsScale[index].interpolate({
						inputRange: [ 0, 1 ],
						outputRange: [ NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR ]
					})
				: animationsColor[index].interpolate({
						inputRange: [ 0, 1 ],
						outputRange: [ DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR ]
					}),
			borderRadius: animationsScale[index].interpolate({
				inputRange: [ 0, 1 ],
				outputRange: [ CELL_SIZE, CELL_BORDER_RADIUS ]
			}),
			transform: [
				{
					scale: animationsScale[index].interpolate({
						inputRange: [ 0, 1 ],
						outputRange: [ 0.2, 1 ]
					})
				}
			]
		};

		// Run animation on next event loop tik
		// Because we need first return new style prop and then animate this value
		setTimeout(() => {
			animateCell({ hasValue, index, isFocused });
		}, 0);

		return (
			<AnimatedText
				key={index}
				style={[ styles.cell, animatedCellStyle ]}
				onLayout={getCellOnLayoutHandler(index)}
			>
				{symbol || (isFocused ? <Cursor /> : null)}
			</AnimatedText>
		);
	};

	return (
		<SafeAreaView style={styles.root}>
			<Text style={styles.title}>Enter your code!</Text>
			<Text style={styles.phoneNo}>+1-604-999-1234</Text>
			<CodeField
				ref={ref}
				{...props}
				value={value}
				onChangeText={setValue}
				cellCount={CELL_COUNT}
				rootStyle={styles.codeFieldRoot}
				keyboardType="number-pad"
				textContentType="oneTimeCode"
				renderCell={renderCell}
			/>
			<ButtonGradient style={{ marginTop: 30 }} text="CONTINUE" />
			<TouchableOpacity>
				<Text style={styles.gradientText}>I didn't recieve a code</Text>
			</TouchableOpacity>
			<Text style={styles.subTitle}>Tap continue to accept facebook's terms.</Text>
		</SafeAreaView>
	);
};

export default AnimatedExample;
