import React, { useState } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { SafeAreaView, StyleSheet } from 'react-native';
import PersonalTab from './Personal';
import BusinessTab from './Business';
import cstyles from '../../constants/cstyles';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';

export default function Register(props) {
	const [ actibeTab, setActiveTab ] = useState(0);
	return (
		<SafeAreaView style={cstyles.container}>
			<Container>
				<ScrollView style={cstyles.container}>
					<Tabs
						tabBarUnderlineStyle={{ backgroundColor: Colors.secondryGradient, height: 1.5 }}
						tabBarPosition="top"
						onChangeTab={({ i }) => setActiveTab(i)}
					>
						<Tab
							heading={
								<TabHeading style={{ backgroundColor: '#fff' }}>
									<Text style={[ actibeTab === 0 ? styles.activeText : styles.inActiveText ]}>
										Personal
									</Text>
								</TabHeading>
							}
						>
							<PersonalTab {...props} />
						</Tab>
						<Tab
							heading={
								<TabHeading style={{ backgroundColor: '#fff' }}>
									<Text style={[ actibeTab === 1 ? styles.activeText : styles.inActiveText ]}>
										Business
									</Text>
								</TabHeading>
							}
						>
							<BusinessTab {...props} />
						</Tab>
					</Tabs>
				</ScrollView>
			</Container>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	activeText: {
		color: Colors.secondryGradient,
		fontSize: 16,
		fontWeight: 'bold',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inActiveText: {
		color: Colors.secondryGradient,
		fontSize: 16,
		fontWeight: 'bold',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
