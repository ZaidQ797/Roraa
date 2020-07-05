import React, { Fragment } from 'react';
import { View, Text, Image } from 'react-native';
import cstyle from '../../constants/cstyles';
import { Col, Row, Grid } from 'react-native-easy-grid';
import StarsList from './StarList';
import styles from './styles';

const dummyData = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q' ];

function TopStars() {
	return (
		<Fragment>
			<View style={cstyle.py_10}>
				<Text style={styles.mainText}>Top 200 Stars</Text>
			</View>
			<View>
				<Grid style={[ styles.grid, cstyle.py_20 ]}>
					<Col style={[ cstyle.px_5, cstyle.pt_30 ]}>
						<Image
							style={[ styles.smImg, cstyle.selfCenter ]}
							source={{
								uri:
									'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
							}}
						/>
						<Text style={[ styles.secondryColor, styles.number, cstyle.selfCenter ]}>2</Text>
						<Text style={[ styles.subTitle, cstyle.selfCenter ]}>Larry Porter</Text>
						<Text style={[ cstyle.selfCenter, styles.percent ]}>85%</Text>
					</Col>
					<Col style={[ cstyle.px_5 ]}>
						<Image
							style={[ styles.lgImg ]}
							source={{
								uri:
									'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
							}}
						/>
						<Text style={[ styles.secondryColor, styles.number, cstyle.selfCenter ]}>1</Text>
						<Text style={[ styles.subTitle2, cstyle.selfCenter ]}>Flora T. Chapel</Text>
						<Text style={[ cstyle.selfCenter, styles.percent ]}>90%</Text>
					</Col>
					<Col style={[ cstyle.px_5, cstyle.pt_30 ]}>
						<Image
							style={[ styles.smImg, cstyle.selfCenter ]}
							source={{
								uri:
									'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
							}}
						/>
						<Text style={[ styles.secondryColor, styles.number, cstyle.selfCenter ]}>3</Text>
						<Text style={[ styles.subTitle, cstyle.selfCenter ]}>Bette Beach</Text>
						<Text style={[ cstyle.selfCenter, styles.percent ]}>85%</Text>
					</Col>
				</Grid>
			</View>
			<View>{dummyData.map((l, index) => <StarsList key={l} index={index} />)}</View>
		</Fragment>
	);
}

export default TopStars;
