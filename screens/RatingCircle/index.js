// import React, { useState, Fragment } from "react";
// import { StyleSheet, View, Text, SafeAreaView } from "react-native";
// import { Header, Left, Body, Right } from "native-base";
// import cstyles from "../../constants/cstyles";
// import { Entypo } from "@expo/vector-icons";
// import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
// import Colors from "../../constants/Colors";

// function RatingCirle({ navigation }) {
//   return (
//     <Fragment>
//       <SafeAreaView style={[cstyles.container, cstyles.bg_white]}>
//         <Header
//           noShadow
//           style={{ backgroundColor: "transparent", borderBottomWidth: 0 }}
//         >
//           <Left>
//             <TouchableOpacity onPress={() => navigation.goBack()}>
//               <Entypo name="chevron-small-left" size={24} color="black" />
//             </TouchableOpacity>
//           </Left>
//           <Body>
//             <Text style={styles.mainText}>Rating</Text>
//           </Body>
//           <Right />
//         </Header>

//         <ScrollView
//           style={[cstyles.container, cstyles.padder, { paddingTop: 5 }]}
//         >
//           <View style={[cstyles.flexCenter, cstyles.itemsCenter]}>
//             <View style={[styles.circle]}>
//               <Text style={styles.innerText}>65 %</Text>
//             </View>
//           </View>
//           <View style={cstyles.my_20}>
//             <Text style={styles.font_20}>Sub-Evaluation</Text>
//             <View
//               style={[
//                 cstyles.row,
//                 cstyles.itemsCenter,
//                 cstyles.flexBetweeen,
//                 cstyles.my_20,
//               ]}
//             >
//               <View style={cstyles.itemsCenter}>
//                 <View style={[styles.sm_circle50]}>
//                   <Text style={styles.innerText2}>45 %</Text>
//                 </View>
//                 <Text style={[styles.lowerText, cstyles.mt_10]}>
//                   Personal Branding
//                 </Text>
//               </View>
//               <View style={cstyles.itemsCenter}>
//                 <View style={[styles.sm_circle25]}>
//                   <Text style={styles.innerText2}>25 %</Text>
//                 </View>
//                 <Text style={[styles.lowerText, cstyles.mt_10]}>
//                   Activity and Interaction
//                 </Text>
//               </View>
//               <View style={cstyles.itemsCenter}>
//                 <View style={[styles.sm_circle75]}>
//                   <Text style={styles.innerText2}>75 %</Text>
//                 </View>
//                 <Text style={[styles.lowerText, cstyles.mt_10]}>
//                   Content Quality
//                 </Text>
//               </View>
//             </View>
//             <View
//               style={[
//                 cstyles.row,
//                 cstyles.itemsCenter,
//                 cstyles.flexBetweeen,
//                 cstyles.my_20,
//               ]}
//             >
//               <View style={cstyles.itemsCenter}>
//                 <View style={[styles.sm_circle]}>
//                   <Text style={styles.innerText2}>100 %</Text>
//                 </View>
//                 <Text style={[styles.lowerText, cstyles.mt_10]}>World</Text>
//               </View>
//               <View style={cstyles.itemsCenter}>
//                 <View style={[styles.sm_circle75]}>
//                   <Text style={styles.innerText2}>80 %</Text>
//                 </View>
//                 <Text style={[styles.lowerText, cstyles.mt_10]}>World</Text>
//               </View>
//               <View style={cstyles.itemsCenter}>
//                 <View style={[styles.sm_circle25]}>
//                   <Text style={styles.innerText2}>20 %</Text>
//                 </View>
//                 <Text style={[styles.lowerText, cstyles.mt_10]}>
//                   Trustworthy
//                 </Text>
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// }

// export default RatingCirle;

// const styles = StyleSheet.create({
//   mainText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   circle: {
//     width: 200,
//     height: 200,
//     borderWidth: 15,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 100,
//     borderRightColor: "#fe6b6c",
//     borderBottomColor: "#fe6b6c",
//     borderLeftColor: "#fe6b6c",
//     borderTopColor: "#f5f5f5",
//   },
//   sm_circle: {
//     width: 80,
//     height: 80,
//     borderWidth: 3,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 40,
//     borderColor: "#fb7576",
//   },
//   sm_circle75: {
//     width: 80,
//     height: 80,
//     borderWidth: 3,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 40,
//     borderRightColor: "#fb7576",
//     borderBottomColor: "#fb7576",
//     borderLeftColor: "#fb7576",
//     borderTopColor: "#f5f5f5",
//   },
//   sm_circle50: {
//     width: 80,
//     height: 80,
//     borderWidth: 3,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 40,
//     borderRightColor: "#fb7576",
//     borderBottomColor: "#fb7576",
//     borderLeftColor: "#f5f5f5",
//     borderTopColor: "#f5f5f5",
//   },
//   sm_circle25: {
//     width: 80,
//     height: 80,
//     borderWidth: 3,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 40,
//     borderRightColor: "#fb7576",
//     borderBottomColor: "#f5f5f5",
//     borderLeftColor: "#f5f5f5",
//     borderTopColor: "#f5f5f5",
//   },
//   lowerText: {
//     fontSize: 12,
//     color: "grey",
//     fontWeight: "bold",
//   },
//   innerText: {
//     fontSize: 35,
//     fontWeight: "bold",
//   },
//   innerText2: {
//     fontSize: 15,
//     fontWeight: "bold",
//   },
//   font_20: {
//     fontSize: 20,
//     fontWeight: "100",
//     color: "grey",
//   },
// });

import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  View,
} from "native-base";
import { StyleSheet, Image, FlatList, Alert } from "react-native";
import DefaultImage from "../../assets/images/profile.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRating } from "../../_actions/home";
import Loader from "../../components/Loader";
import config from "../../_config";
import { Entypo } from "@expo/vector-icons";

function RatingCirle({ navigation, getRating, rating, profile }) {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const formData = new FormData();
    formData.append("u_id", profile && profile[0].u_id);
    new Promise((rsl, rej) => {
      setLoader(true);
      getRating(formData, rsl, rej);
    })
      .then((res) => {
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        Alert.alert("Roraa", err.message);
      });
  });

  return (
    <View style={{ flex: 1 }}>
      <Header
        noShadow
        style={{ backgroundColor: "transparent", borderBottomWidth: 0 }}
      >
        <Left>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-small-left" size={24} color="black" />
          </TouchableOpacity>
        </Left>
        <Body>
          <Text style={styles.mainText}>Rating</Text>
        </Body>
        <Right />
      </Header>
      {rating && (
        <FlatList
          data={rating}
          keyExtractor={(item) => {
            item.u_id;
          }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() => console.log("yes")} key={index}>
                <View style={styles.listContainer}>
                  <Image
                    style={styles.image}
                    source={{ uri: `${config.imageUrl}/${item.dp}` }}
                  />
                  <Text style={styles.textStyle}>{item.fname}</Text>
                  <Text style={styles.scoreText}>{`${item.score}`}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    rating: state.homeReducer.rating,
    profile: state.authReducer.profile,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      getRating,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingCirle);

const styles = StyleSheet.create({
  listContainer: {
    position: "relative",
    width: "93%",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 5,
    flex: 1,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginVertical: 10,
    minHeight: 70,
  },
  image: {
    width: 55,
    height: 55,
    marginBottom: 12,
    borderRadius: 40,
    position: "absolute",
    left: -8,
    top: 7,
    // backgroundColor: "#e98180",
  },
  textStyle: {
    fontSize: 17,
    marginLeft: 62,
    paddingTop: 8,
  },
  scoreText: {
    fontSize: 17,
    fontWeight: "bold",
    position: "absolute",
    right: 20,
    bottom: 10,
  },
});
