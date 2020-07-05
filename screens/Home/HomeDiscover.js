import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Item, Input } from 'native-base';
import cstyles from '../../constants/cstyles';
import { EvilIcons } from '@expo/vector-icons';
import styles from './styles';
import DiscoverList from './DiscoverList';

const dummyData = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q' ];

function HomeDiscover() {
	return (
		<Fragment>
			<View style={cstyles.container}>
				<Item rounded style={[ cstyles.boxShadow, styles.inputText, cstyles.my_15 ]}>
					<EvilIcons name="search" size={18} color="grey" />
					<Input placeholder="search" />
				</Item>
				<View>{dummyData.map((i) => <DiscoverList key={i} />)}</View>
			</View>
		</Fragment>
	);
}

export default HomeDiscover;
