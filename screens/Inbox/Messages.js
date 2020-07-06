import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import cstyles from '../../constants/cstyles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Header, Left, Right, Body, Item, Icon, Input, View } from 'native-base';
import { Entypo, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import styles from './styles';
import Divider from './Divider';
import RecievedMessage from './RecievedMessage';
import SentMessage from './SentMessage';
import { LinearGradient } from 'expo-linear-gradient';

function Messages({ navigation }) {
	return (
		<SafeAreaView style={[ cstyles.container ]}>
			<Header
				noShadow
				style={[ { backgroundColor: 'transparent' }, cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen ]}
			>
				<TouchableOpacity style={cstyles.mx_10} onPress={() => navigation.goBack()}>
					<Entypo name="chevron-small-left" size={24} color="black" />
				</TouchableOpacity>
				<Item rounded style={[ styles.input ]}>
					<Icon active name="search" />
					<Input placeholder="Search" />
				</Item>

				<TouchableOpacity style={cstyles.mx_10}>
					<AntDesign name="pluscircleo" size={24} color={Colors.primaryLightColor} />
				</TouchableOpacity>
			</Header>

			<ScrollView style={[ cstyles.container, cstyles.padder ]}>
				<Divider time="Monday, 10:50AM" />
				<RecievedMessage message="Hey Hi Danya Bairstow" />
				<RecievedMessage message="Hi Danya, How's your days going?" time="10:50AM" showAvatar showTime />
				<Divider time="Tuseday, 10:50AM" />
				<RecievedMessage
					message="Would you like to go to the john's party with me"
					time="05:50PM"
					showAvatar
					showTime
				/>
				<SentMessage message="Thanks all things went well just a little boring at home." />
				<SentMessage message="Ok sure! see you tonight" time="05:50PM" showAvatar showTime />
			</ScrollView>
			<View>
				<LinearGradient
					colors={[ Colors.primaryGradient, Colors.secondryGradient ]}
					start={[ 0.1, 0.1 ]}
					end={[ 0.5, 0.5 ]}
					style={styles.messageFooter}
				>
					<View style={[ cstyles.row, cstyles.itemsCenter ]}>
						<Item rounded style={[ styles.input ]}>
							<Input style={cstyles.px_10} placeholder="Type here" />
							<MaterialIcons name="attachment" size={24} color="gray" />
						</Item>

						<TouchableOpacity style={[ cstyles.mx_10, styles.sentButton ]}>
							<Ionicons name="ios-send" size={18} color="white" />
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</View>
		</SafeAreaView>
	);
}

export default Messages;
