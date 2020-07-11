import React, { Fragment, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import cstyles from '../../constants/cstyles';

import styles from './Styles';
import Info from './Info';
import MyStory from '../Story';
import World from './World';
import RoraaGold from './RoraaGold';
import ShowScreen from './Show';

function Profile(props) {
	const [ view, setView ] = useState('info');
	return (
		<Fragment>
			<SafeAreaView style={[ cstyles.container, cstyles.bg_white ]}>
				<View style={[ cstyles.row, cstyles.flexBetweeen, cstyles.padder ]}>
					<TouchableOpacity onPress={() => setView('info')}>
						<Text style={[ styles.buttonText, view === 'info' && styles.activeButton ]}>INFO</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setView('world')}>
						<Text style={[ styles.buttonText, view === 'world' && styles.activeButton ]}>WORLD</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setView('story')}>
						<Text style={[ styles.buttonText, view === 'story' && styles.activeButton ]}>STORY</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setView('show')}>
						<Text style={[ styles.buttonText, view === 'show' && styles.activeButton ]}>SHOW</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setView('roraa')}>
						<Text style={[ styles.buttonText, view === 'roraa' && styles.activeButton ]}>RORAA GOLD</Text>
					</TouchableOpacity>
				</View>
				{view === 'info' ? (
					<Info {...props} />
				) : view === 'story' ? (
					<MyStory {...props} />
				) : view === 'world' ? (
					<World {...props} />
				) : view === 'show' ? (
					<ShowScreen {...props} />
				) : (
					<RoraaGold {...props} />
				)}
			</SafeAreaView>
		</Fragment>
	);
}

export default Profile;
