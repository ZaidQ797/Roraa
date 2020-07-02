import React, { Fragment } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import cstyles from '../../constants/cstyles';
import { MaterialIcons, FontAwesome5, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Visitor from '../Visitors/NewVistor';
import InfluanceBoard from './InfluanceBoard';
import ProfilePic from '../../assets/images/profile.png';

function World() {
	return (
		<Fragment>
			<SafeAreaView style={[ cstyles.container, cstyles.bg_white ]}>
				<ScrollView style={[ cstyles.container, cstyles.padder ]}>
					<View style={[ cstyles.row, cstyles.flexBetweeen ]}>
						<TouchableOpacity>
							<Text style={[ styles.buttonText ]}>IDENTITY</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={[ styles.buttonText ]}>LIFE</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={[ styles.buttonText, styles.activeButton ]}>WORLD</Text>
						</TouchableOpacity>
					</View>
					<View
						style={[ cstyles.row, cstyles.flexBetweeen, cstyles.itemsCenter, cstyles.my_15, cstyles.mt_25 ]}
					>
						<Text style={styles.font_18}>Mohammed Ramadan</Text>
						<View style={[ cstyles.row, cstyles.itemsCenter ]}>
							<TouchableOpacity style={styles.buttonStyle}>
								<Text style={styles.butnText}>Follow</Text>
							</TouchableOpacity>
							<TouchableOpacity style={[ styles.iconButton, cstyles.mx_10 ]}>
								<FontAwesome5 name="ellipsis-v" size={10} color="white" />
							</TouchableOpacity>
						</View>
					</View>
					<View style={[ cstyles.row, cstyles.my_15 ]}>
						<View>
							<Image source={ProfilePic} />
						</View>
						<View style={[ cstyles.flexCenter, cstyles.itemsCenter, cstyles.container ]}>
							<View style={[ cstyles.itemsCenter, cstyles.flexCenter, cstyles.my_5 ]}>
								<Text style={styles.textGrey}>Subscribers</Text>
								<Text style={[ styles.textGrey, { fontWeight: 'bold' } ]}>5432</Text>
							</View>
							<View style={[ cstyles.flexCenter, cstyles.itemsCenter, cstyles.my_5 ]}>
								<Text style={styles.textGrey}>Following</Text>
								<Text style={[ styles.textGrey, { fontWeight: 'bold' } ]}>5321</Text>
							</View>
							<View style={(cstyles.itemsCenter, cstyles.flexCenter, cstyles.my_5)}>
								<Text style={styles.textGrey}>Score</Text>
								<Text style={[ styles.textGrey, { fontWeight: 'bold' } ]}>103</Text>
							</View>
						</View>
					</View>

					<View>
						<InfluanceBoard />
					</View>

					<View
						style={[
							cstyles.boxShadow,
							cstyles.row,
							cstyles.flexBetweeen,
							cstyles.itemsCenter,
							cstyles.my_15,
							cstyles.padder,
							styles.br_10
						]}
					>
						<View>
							<Text style={styles.mainText}>5000</Text>
							<Text style={{ fontSize: 11 }}>Number of people evaluated my account</Text>
						</View>
						<View>
							<TouchableOpacity style={styles.buttonStyle}>
								<Text style={styles.butnText}>Rate me</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={[ cstyles.boxShadow, cstyles.padder, styles.br_10 ]}>
						<View style={[ cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen ]}>
							<Text style={styles.font_18}>My Story</Text>
							<TouchableOpacity style={styles.iconButton}>
								<MaterialIcons name="edit" size={15} color="white" />
							</TouchableOpacity>
						</View>
						<View style={[ cstyles.boxShadow, cstyles.my_10, styles.br_10, cstyles.px_10, cstyles.py_20 ]}>
							<View style={[ cstyles.row, cstyles.flexBetweeen, cstyles.itemsCenter, cstyles.py_10 ]}>
								<Text style={styles.storyHeader}>It's my life</Text>
								<TouchableOpacity style={styles.iconButton_sm}>
									<FontAwesome5 name="ellipsis-v" size={10} color="white" />
								</TouchableOpacity>
							</View>
							<View>
								<Text style={styles.storyText}>
									My name is Mohammed. I am a senior in high school. Everyone can agree that I am a
									good student and that I like to study. My favorite subjects are chemistry…
								</Text>
							</View>
						</View>
						<View style={[ cstyles.boxShadow, cstyles.my_10, styles.br_10, cstyles.px_10, cstyles.py_20 ]}>
							<View style={[ cstyles.row, cstyles.flexBetweeen, cstyles.itemsCenter, cstyles.py_10 ]}>
								<Text style={styles.storyHeader}>My Childhood</Text>
								<TouchableOpacity style={styles.iconButton_sm}>
									<FontAwesome5 name="ellipsis-v" size={10} color="white" />
								</TouchableOpacity>
							</View>
							<View>
								<Text style={styles.storyText}>
									Childhood is a time when everybody is affected by incidents which remain with them
									during their entire lives. There were many events in my childhood, and some of them
									left no impact…
								</Text>
							</View>
						</View>
						<View style={[ cstyles.boxShadow, cstyles.my_10, styles.br_10, cstyles.px_10, cstyles.py_20 ]}>
							<View style={[ cstyles.row, cstyles.flexBetweeen, cstyles.itemsCenter, cstyles.py_10 ]}>
								<Text style={styles.storyHeader}>Finding My Desk</Text>
								<TouchableOpacity style={styles.iconButton_sm}>
									<FontAwesome5 name="ellipsis-v" size={10} color="white" />
								</TouchableOpacity>
							</View>
							<View>
								<Text style={styles.storyText}>
									It all started in first grade, when it was a normal sunny morning, and I was going
									in Mrs. William’s class. It smelled like peaches and pineapples, and knew it was her
									perfume. It was…
								</Text>
							</View>
						</View>
					</View>
					<View style={[ cstyles.my_15, cstyles.padder, cstyles.boxShadow, styles.br_10 ]}>
						<View>
							<Text style={styles.font_18}>Personality</Text>
						</View>
						<View style={[ cstyles.row, cstyles.flexWrap, cstyles.mt_15 ]}>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_50,
									cstyles.my_5,
									styles.bg_1
								]}
							>
								<Text style={styles.butnText}>More disciplined</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_50,
									cstyles.my_5,
									styles.bg_2
								]}
							>
								<Text style={styles.butnText2}>More casual</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_50,
									cstyles.my_5,
									styles.bg_2
								]}
							>
								<Text style={styles.butnText2}>More abstract</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_50,
									cstyles.my_5,
									styles.bg_3
								]}
							>
								<Text style={styles.butnText}>More concrete</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_50,
									cstyles.my_5,
									styles.bg_2
								]}
							>
								<Text style={styles.butnText2}>More disciplined</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_50,
									cstyles.my_5,
									styles.bg_4
								]}
							>
								<Text style={styles.butnText}>More casual</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_50,
									cstyles.my_5,
									styles.bg_5
								]}
							>
								<Text style={styles.butnText}>More Cooperative</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_50,
									cstyles.my_5,
									styles.bg_2
								]}
							>
								<Text style={styles.butnText2}>More Competitive</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_50,
									cstyles.my_5,
									styles.bg_2
								]}
							>
								<Text style={styles.butnText2}>Security</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_50,
									cstyles.my_5,
									styles.bg_6
								]}
							>
								<Text style={styles.butnText}>Belonging</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_65,
									cstyles.my_5,
									styles.bg_7
								]}
							>
								<Text style={styles.butnText}>Empowerment</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_35,
									cstyles.my_5,
									styles.bg_2
								]}
							>
								<Text style={styles.butnText2}>Engagement</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_33,
									cstyles.my_5,
									styles.bg_2
								]}
							>
								<Text style={styles.butnText2}>Identity</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_33,
									cstyles.my_5,
									styles.bg_2
								]}
							>
								<Text style={styles.butnText2}>Nurturance</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_33,
									cstyles.my_5,
									styles.bg_2
								]}
							>
								<Text style={styles.butnText2}>Esteem</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_65,
									cstyles.my_5,
									styles.bg_8
								]}
							>
								<Text style={styles.butnText}>Achievement</Text>
							</View>
							<View
								style={[
									cstyles.itemsCenter,
									cstyles.flexCenter,
									cstyles.boxShadow,
									styles.br_10,
									cstyles.px_15,
									cstyles.py_10,
									styles.w_35,
									cstyles.my_5,
									styles.bg_2
								]}
							>
								<Text style={styles.butnText2}>Mastery</Text>
							</View>
						</View>
					</View>
					<View style={cstyles.my_15}>
						<View style={[ cstyles.padder, cstyles.boxShadow, styles.br_10 ]}>
							<View style={[ cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen ]}>
								<View style={cstyles.row}>
									<AntDesign name="heart" size={20} color="#f5656b" />
									<Text style={[ styles.font_18, cstyles.ml_10 ]}>Interest</Text>
								</View>
								<TouchableOpacity style={styles.iconButton}>
									<Ionicons name="md-add" size={15} color="white" />
								</TouchableOpacity>
							</View>
							{/* all data will map here */}
							<View style={[ cstyles.row, cstyles.flexWrap, cstyles.mt_15 ]}>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_100,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>Sports</Text>
									<Text style={styles.subtitle}>Barcelona-chelsea</Text>
									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_100,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>Hobbies</Text>
									<Text style={styles.subtitle}>Running-Guitar</Text>
									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_50,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>BOOKS</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_50,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>GAMES</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_50,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>NETFLIX</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_50,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>MUSIC</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_35,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>ABC</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_65,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>LOL</Text>
									<Text style={styles.subtitle}>Gold</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
					<View style={cstyles.my_15}>
						<View style={[ cstyles.padder, cstyles.boxShadow, styles.br_10 ]}>
							<View style={[ cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen ]}>
								<View style={cstyles.row}>
									<MaterialCommunityIcons name="arch" size={20} color="#f5656b" />
									<Text style={[ styles.font_18, cstyles.ml_10 ]}>Goals</Text>
								</View>
								<TouchableOpacity style={styles.iconButton}>
									<Ionicons name="md-add" size={15} color="white" />
								</TouchableOpacity>
							</View>
							{/* all data will map here */}
							<View style={[ cstyles.row, cstyles.flexWrap, cstyles.mt_15 ]}>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_100,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>TRAVEL</Text>
									<Text style={styles.subtitle}>Australia-colombia</Text>
									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_35,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>JOB</Text>
									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_65,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>UNIVERSITY</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_100,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>FAMILY</Text>
									<Text style={styles.subtitle}>Many sons</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_50,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>KNOWLEDGE</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_50,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>GAMES</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_35,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>XYZ</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
					<View style={cstyles.my_15}>
						<View style={[ cstyles.padder, cstyles.boxShadow, styles.br_10 ]}>
							<View style={[ cstyles.row, cstyles.itemsCenter, cstyles.flexBetweeen ]}>
								<View style={cstyles.row}>
									<MaterialIcons name="stars" size={20} color="#f5656b" />
									<Text style={[ styles.font_18, cstyles.ml_10 ]}>Talents</Text>
								</View>
								<TouchableOpacity style={styles.iconButton}>
									<Ionicons name="md-add" size={15} color="white" />
								</TouchableOpacity>
							</View>
							{/* all data will map here */}
							<View style={[ cstyles.row, cstyles.flexWrap, cstyles.mt_15 ]}>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_100,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>PIANO</Text>
									<Text style={styles.subtitle}>Beethoven</Text>
									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_35,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>MNO</Text>
									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_65,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>DRUMS</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_100,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>DANCE</Text>
									<Text style={styles.subtitle}>Salsa songs</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_50,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>KNOWLEDGE</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_50,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>XYZ</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
								<View
									style={[
										cstyles.row,
										cstyles.itemsCenter,
										cstyles.flexBetweeen,
										cstyles.boxShadow,
										styles.br_10,
										cstyles.px_15,
										cstyles.py_10,
										styles.w_35,
										cstyles.my_5
									]}
								>
									<Text style={styles.mainSubtitle}>GAMES</Text>

									<TouchableOpacity style={styles.iconButton_sm}>
										<FontAwesome5 name="ellipsis-v" size={10} color="white" />
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
					<View style={[ cstyles.boxShadow, styles.br_10, cstyles.padder, { marginBottom: 50 } ]}>
						<View>
							<Text style={styles.font_18}>My Profile Visitors</Text>
						</View>
						<View style={[ cstyles.row, cstyles.flexBetweeen, cstyles.itemsCenter, cstyles.mt_15 ]}>
							<Visitor />
							<Visitor />
							<Visitor />
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	);
}

export default World;

const styles = StyleSheet.create({
	mainText: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '800',
		marginHorizontal: 10,
		paddingBottom: 5
	},
	activeButton: {
		color: '#f5656b',
		borderBottomWidth: 4,
		borderRadius: 50,
		borderBottomColor: '#f5656b',
		fontWeight: 'bold'
	},
	buttonStyle: {
		paddingLeft: 20,
		paddingRight: 20,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		backgroundColor: '#f4636a',
		alignSelf: 'center'
	},
	butnText: {
		fontSize: 13,
		color: 'white'
	},
	butnText2: {
		fontSize: 13,
		color: 'black'
	},
	br_10: {
		borderRadius: 10
	},
	iconButton: {
		backgroundColor: '#f5656b',
		width: 23,
		height: 23,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 11
	},
	iconButton_sm: {
		backgroundColor: '#f5656b',
		width: 16,
		height: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8
	},
	font_18: {
		fontSize: 18
	},
	storyHeader: {
		fontSize: 13,
		fontWeight: 'bold'
	},
	storyText: {
		fontSize: 12,
		fontWeight: '100',
		lineHeight: 16,
		paddingHorizontal: 5
	},
	subtitle: {
		fontSize: 12,
		color: 'grey'
	},
	mainSubtitle: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	w_100: {
		width: '100%'
	},
	w_65: {
		width: '65%'
	},
	w_50: {
		width: '50%'
	},
	w_33: {
		width: '33%'
	},
	w_35: {
		width: '35%'
	},
	bg_1: {
		backgroundColor: '#a723c6'
	},
	bg_2: {
		backgroundColor: '#fefefe'
	},
	bg_3: {
		backgroundColor: '#5bb94a'
	},
	bg_4: {
		backgroundColor: '#63a6e9'
	},
	bg_5: {
		backgroundColor: '#f2aa38'
	},
	bg_6: {
		backgroundColor: '#e23d7c'
	},
	bg_7: {
		backgroundColor: '#519d97'
	},
	bg_8: {
		backgroundColor: '#58c2f7'
	},
	textGrey: {
		fontSize: 20,
		fontWeight: '100',
		color: 'grey'
	}
});
