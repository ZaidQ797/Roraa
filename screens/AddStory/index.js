import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import cstyles from '../../constants/cstyles';
import { Thumbnail, Text } from 'native-base';
import {Entypo, FontAwesome} from '@expo/vector-icons';

function MyStory({ navigation }) {
    return (
        <SafeAreaView style={cstyles.container}>
            <ScrollView style={[ cstyles.container, cstyles.padder ]}>
                <View style={[ cstyles.row, cstyles.itemsEnd, {paddingVertical: 25} ]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name="chevron-small-left" size={30} color="black" />
                    </TouchableOpacity>
                    <Thumbnail
                        small
                        source={{
                            uri:
                                'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg'
                        }}
                    />
                    <Text style={[ cstyles.ml_10, styles.mainText ]}>My Story</Text>
                </View>
                <View
                    style={[
                        cstyles.boxShadow,
                        cstyles.my_10,
                        styles.br_10,
                        cstyles.px_10,
                        cstyles.py_20,
                        cstyles.bg_white
                    ]}
                >
                    <View style={[ cstyles.py_10 ]}>
                        <TextInput style={styles.storyHeader} placeholder="Add a title" />
                    </View>
                    <View>
                        <TextInput multiline style={styles.storyText} placeholder="everyone want to read your story" />
                    </View>
                </View>
                <View style={[cstyles.my_20, { marginBottom: 30 }]}>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.butnText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MyStory;

const styles = StyleSheet.create({
    mainText: {
        fontSize: 22,
        fontWeight: '600'
    },
    br_10: {
        borderRadius: 10
    },
    storyHeader: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    storyText: {
        fontSize: 14,
        fontWeight: '100',
        lineHeight: 22,
        paddingHorizontal: 5
    },
    iconButton: {
        backgroundColor: '#f5656b',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    buttonStyle: {
        width: '60%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#f4636a',
        alignSelf: 'center'
    },
    butnText: {
        fontSize: 19,
        color: 'white',
        textTransform: 'uppercase'
    }
});
