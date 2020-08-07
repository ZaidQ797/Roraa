import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import {
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native-gesture-handler";
import cstyles from "../../constants/cstyles";
import Logo from "../../assets/images/logo_text.png";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";
import ButtonGradient from "../../components/ButtonGradient";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Thumbnail } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { getWorlds } from "../../_actions/world";
import { BASE_URL } from "../../_config/base_url";

function World({ navigation }) {
  const dispatch = useDispatch();
  const { myWorlds, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.world
  );
  useEffect(() => {
    const params = new FormData();
    params.append("u_id", "473");
    dispatch(getWorlds(params));
    if (isSuccess) {
      console.log(myWorlds);
    } else {
      console.log(JSON.stringify(errMsg));
    }
  }, []);

  return (
    <ScrollView style={[cstyles.container, { paddingBottom: 50 }]}>
      <View style={[cstyles.container, styles.logoContainer, cstyles.padder]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddWorld")}
        >
          <Text style={styles.butnText}>Add World</Text>
        </TouchableOpacity>
      </View>
      <View style={[cstyles.py_20]}>
        <FlatList
          data={myWorlds}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index.toString()}
          snapToAlignment="end"
          decelerationRate={"fast"}
          renderItem={({ item }) => (
            <ImageBackground
              imageStyle={{ borderRadius: 20 }}
              source={{
                uri: `${BASE_URL}${item.dp}`,
              }}
              style={[styles.imgCard]}
            >
              <View
                style={[styles.imageBottom, cstyles.row, cstyles.itemsCenter]}
              >
                <Thumbnail
                  small
                  source={{
                    uri: `${BASE_URL}${item.file}`,
                  }}
                />
                <Text style={styles.iconText}>{item.title}</Text>
              </View>
            </ImageBackground>
          )}
        />
      </View>
      <View
        style={[
          cstyles.row,
          cstyles.flexBetweeen,
          cstyles.px_20,
          styles.iconContainer,
        ]}
      >
        <TouchableOpacity style={[cstyles.row, cstyles.itemsCenter]}>
          <Ionicons name="logo-octocat" size={24} color="white" />
          <Text style={styles.iconText}>300</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[cstyles.row, cstyles.itemsCenter]}>
          <Ionicons name="md-eye" size={24} color="white" />
          <Text style={styles.iconText}>2310</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default World;

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#52514f",
  },
  imgCard: {
    width: Layout.window.width - 120,
    height: 320,
    justifyContent: "flex-end",
    borderRadius: 20,
    marginHorizontal: 15,
  },
  iconContainer: {
    width: Layout.window.width - 120,
    height: 40,
    backgroundColor: Colors.secondryGradient,
    borderRadius: 10,
    alignSelf: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondryGradient,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 100,
  },
  butnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  imageBottom: {
    width: "100%",
    height: "20%",
    backgroundColor: "#52514f",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 20,
  },
  iconText: {
    color: "white",
    fontSize: 13,
    marginLeft: 10,
  },
});
