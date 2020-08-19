import React, { Fragment, useState, useEffect } from "react";
import { View, Alert } from "react-native";
import { Item, Input } from "native-base";
import cstyles from "../../constants/cstyles";
import { EvilIcons } from "@expo/vector-icons";
import styles from "./styles";
import DiscoverList from "./DiscoverList";
import { ScrollView } from "react-native-gesture-handler";
import Loader from "../../components/Loader";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDiscovers } from "../../_actions/home";

function HomeDiscover({ user, discovers, getDiscovers, navigation, getUser }) {
  const [loader, setLoader] = useState(true);
  // const [discov, setDiscov] = useState(null);
  const [filterDis, setFilterDis] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoader(true);
    const formData = new FormData();
    formData.append("u_id", user.u_id);
    new Promise((rsl, rej) => {
      getDiscovers(formData, rsl, rej);
    })
      .then((res) => {
        // setDiscov(discovers);
        setLoader(false);
      })
      .catch((err) => {
        Alert.alert("Roraa", err.message);
      });

    // new Promise((rsl, rej) => {
    //   getUser(formData, rsl, rej);
    // })
    //   .then((res) => {
    //     setLoader(false);
    //   })
    //   .catch((err) => {
    //     // Alert.alert("Roraa", err.message);
    //   });
  }, []);
  const handleSearch = (text) => {
    const searchRes = discovers.filter((item) =>
      item.fname.toUpperCase().includes(text.toUpperCase())
    );
    setSearch(text);
    searchRes && setFilterDis(searchRes);
  };
  if (discovers) {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          style={cstyles.container}
          showsVerticalScrollIndicator={false}
        >
          <View style={cstyles.container}>
            <Item
              rounded
              style={[cstyles.boxShadow, styles.inputText, cstyles.my_15]}
            >
              <EvilIcons name="search" size={18} color="grey" />
              <Input
                placeholder="search"
                value={search}
                onChangeText={(text) => handleSearch(text)}
              />
            </Item>
            <View>
              {search !== ""
                ? filterDis &&
                  filterDis.map((item, i) => (
                    <DiscoverList item={item} key={i} navigation={navigation} />
                  ))
                : discovers &&
                  discovers.map((item, i) => (
                    <DiscoverList item={item} key={i} navigation={navigation} />
                  ))}
            </View>
          </View>
        </ScrollView>
        {loader && <Loader />}
      </View>
    );
  } else {
    return <Loader />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.authReducer.user,
    discovers: state.homeReducer.discovers,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      getDiscovers,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeDiscover);
