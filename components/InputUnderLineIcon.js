

import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from 'react-native';
import cstyles from '../constants/cstyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const InputUnderLineIcon = ({ placeholder, icon, secureTextEntry,autoCapitalize, value, onChangeText }) => {
    return (
        <View style={cstyles.inputUnderLineContainer}>
            <View style={cstyles.inputUnderLineIconContainer}>
                <MaterialCommunityIcons name={icon} style={cstyles.inputUnderLineIcon} />
            </View>
            <TextInput
                style={cstyles.inputUnderLineINPUT}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
                value={value}
                onChangeText={(val) =>{ onChangeText && onChangeText(val)}} />
        </View>
    )
};

export default InputUnderLineIcon;