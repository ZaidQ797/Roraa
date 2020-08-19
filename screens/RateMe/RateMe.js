// import React, { Component } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import {
//   FontAwesome5,
//   MaterialIcons,
//   AntDesign,
//   Ionicons,
//   SimpleLineIcons,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
// import { Rating, AirbnbRating } from "react-native-elements";

// class RateMe extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   handleRate = () => {
//     const data = new FormData();
//     let visitorId = route.params.visitorId;
//     data.append("u_id", user.u_id);
//     data.append("whom_rating", "8");
//     data.append("personal_branding", parseInt(personal));
//     // data.append("behaviour", behaviour);
//     // data.append("content_quality", content);
//     // data.append("world", world);
//     // data.append("trustworthy", trust);

//     new Promise((rsl, rej) => {
//       rateMe(data, rsl, rej);
//     })
//       .then((res) => {
//         setLoader(false);
//         setIsRate(true);
//       })
//       .catch((err) => {
//         setLoader(false);
//       });
//   };

//   render() {
//     return (
//       <View
//         style={{
//           backgroundColor: "white",
//           borderRadius: 4,
//           flex: 1,
//         }}
//       >
//         <AntDesign
//           name="close"
//           size={24}
//           color={"tomato"}
//           onPress={toggleModal}
//           style={{ padding: 10 }}
//         />
//         <View style={{ margin: 5 }}>
//           <Text
//             style={[{ alignSelf: "center", fontSize: 17, marginBottom: -40 }]}
//           >
//             Personal Branding
//           </Text>
//           <AirbnbRating
//             size={25}
//             reviews={""}
//             defaultRating={0}
//             onFinishRating={(rating) => {
//               setPersonal(rating);
//             }}
//           />
//         </View>
//         <View style={{ margin: 5 }}>
//           <Text
//             style={[{ alignSelf: "center", fontSize: 17, marginBottom: -40 }]}
//           >
//             Behaviour
//           </Text>
//           <AirbnbRating
//             size={25}
//             reviews={""}
//             defaultRating={0}
//             onFinishRating={(rating) => {
//               setBehaviour(rating);
//             }}
//           />
//         </View>
//         <View style={{ margin: 5 }}>
//           <Text
//             style={[{ alignSelf: "center", fontSize: 17, marginBottom: -40 }]}
//           >
//             Activity,Interaction
//           </Text>
//           <AirbnbRating
//             size={25}
//             reviews={""}
//             defaultRating={0}
//             onFinishRating={(rating) => {
//               setInteraction(rating);
//             }}
//           />
//         </View>
//         <View style={{ margin: 5 }}>
//           <Text
//             style={[{ alignSelf: "center", fontSize: 17, marginBottom: -40 }]}
//           >
//             Content Quality
//           </Text>
//           <AirbnbRating
//             size={25}
//             reviews={""}
//             defaultRating={0}
//             onFinishRating={(rating) => {
//               setContent(rating);
//             }}
//           />
//         </View>
//         <View style={{ margin: 5 }}>
//           <Text
//             style={[{ alignSelf: "center", fontSize: 17, marginBottom: -40 }]}
//           >
//             World
//           </Text>
//           <AirbnbRating
//             size={25}
//             reviews={""}
//             defaultRating={0}
//             onFinishRating={(rating) => {
//               setWorld(rating);
//             }}
//           />
//         </View>
//         <View style={{ margin: 5 }}>
//           <Text
//             style={[{ alignSelf: "center", fontSize: 17, marginBottom: -40 }]}
//           >
//             TrustWorthy
//           </Text>
//           <AirbnbRating
//             size={25}
//             reviews={""}
//             defaultRating={0}
//             onFinishRating={(rating) => {
//               setTrust(rating);
//             }}
//           />
//         </View>
//         <TouchableOpacity
//           style={[
//             styles.buttonStyle,
//             { marginTop: 10, padding: 20, width: "40%" },
//           ]}
//           onPress={() => {
//             this.handleRate();
//           }}
//         >
//           <Text style={styles.butnText}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// export default RateMe;
