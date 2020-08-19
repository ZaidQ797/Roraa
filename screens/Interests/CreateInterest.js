import React, { Fragment, useState } from "react";
import { View, Text, Row } from "native-base";
import cstyles from "../../constants/cstyles";
import { TextInput, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function CreateInterest() {
  const [categories, setCategories] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
  ]);
  return (
    <Fragment>
      <View style={cstyles.container}>
        <TouchableOpacity>
          <View
            style={[
              styles.photoContainer,
              cstyles.selfCenter,
              styles.boxShadow,
              cstyles.my_15,
              cstyles.mt_25,
            ]}
          >
            <Text style={styles.textStyle}>Upload Photo</Text>
          </View>
        </TouchableOpacity>
        <TextInput
          style={[styles.boxShadow, styles.inputText, cstyles.my_15]}
          placeholder="Title"
        />
        <View>
          <Text style={styles.textStyle}>categories</Text>

          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.boxShadow,
                  styles.categoryBox,
                  cstyles.my_15,
                  cstyles.mr_10,
                ]}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
        <View style={(cstyles.my_20, { marginBottom: 30 })}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.butnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
}

export default CreateInterest;

const styles = StyleSheet.create({
  photoContainer: {
    width: "98%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 3,
  },
  textStyle: {
    color: "grey",
    fontSize: 17,
  },
  inputText: {
    borderRadius: 40,
    height: 40,
    paddingLeft: 25,
    width: "98%",
    elevation: 1.5,
  },
  categoryBox: {
    width: 120,
    height: 100,
    borderRadius: 20,
    elevation: 1.5,
  },
  buttonStyle: {
    width: "60%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#f4636a",
    alignSelf: "center",
  },
  butnText: {
    fontSize: 19,
    color: "white",
    textTransform: "uppercase",
  },
});
