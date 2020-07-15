import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { Header, Left, Body } from 'native-base';
import cstyles from '../../constants/cstyles';
import Colors from '../../constants/Colors';
import styles from './styles';
import { Entypo, AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonGradient from '../../components/ButtonGradient';
import HighLights from "./HighLights";
import Messages from './Messages';

function Chat({ navigation }) {
    const [ view, setView ] = useState('chat');
    return (
        <SafeAreaView style={[ cstyles.container, cstyles.bg_white ]}>
            <Header noShadow style={{ backgroundColor: Colors.lightGray }}>
                <Left>
                    <TouchableOpacity style={cstyles.mx_10} onPress={() => navigation.goBack()}>
                        <Entypo name="chevron-small-left" size={24} color="black" />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text style={styles.mainText}>Mezna</Text>
                </Body>
            </Header>
            <View
                style={[ { backgroundColor: Colors.lightGray, height: 50 }, cstyles.row, cstyles.px_10, cstyles.py_10 ]}
            >
                <TouchableOpacity
                    style={[ styles.headerButn, view === 'chat' && { borderBottomColor: Colors.secondryGradient } ]}
                    onPress={() => setView('chat')}
                >
                    <Text style={[ styles.headerButnText, view === 'chat' && { color: Colors.secondryGradient } ]}>
                        Chat
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.headerButn,
                        view === 'highlights' && { borderBottomColor: Colors.secondryGradient }
                    ]}
                    onPress={() => setView('highlights')}
                >
                    <Text
                        style={[ styles.headerButnText, view === 'highlights' && { color: Colors.secondryGradient } ]}
                    >
                        Highlights
                    </Text>
                </TouchableOpacity>
            </View>
            {
                view === "chat" ? <Messages /> : <HighLights />
            }
        </SafeAreaView>
    );
}

export default Chat;
