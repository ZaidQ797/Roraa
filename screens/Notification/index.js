import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View, Alert
} from "react-native";
import { Header, Left, Body, Right } from "native-base";
import { Entypo, Ionicons } from "@expo/vector-icons";
import cstyles from "../../constants/cstyles";
import { ScrollView } from "react-native-gesture-handler";
import ConnectionCard from "./ConnectionCard";
import NotificationCard from "./NotificationCard";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getNotificatoins } from '../../_actions/notification'

import { useFocusEffect } from '@react-navigation/native'

import Loader from '../../components/Loader'

const dummyConnection = ["a", "b", "c", "d", "e", "f"];

function Notification({ navigation, user, getNotificatoins }) {
  const [notification, setNotification] = useState(null)
  const [requests, setRequests] = useState(null)
  const [loader, setLoader] = useState(true)
  useFocusEffect(
    React.useCallback(() => {
      const data = new FormData();
      data.append('u_id', user.u_id)
      new Promise((rsl, rej) => {
        getNotificatoins(data, rsl, rej)
      }).then(res => {
        setNotification(res.data)
        setRequests(res.connection_request)
      }).catch(err => {
        Alert.alert('Roraa', err.message)
      }).finally(() => {
        setLoader(false)
      })
    }, [])
  )
  return (
    <SafeAreaView style={[cstyles.container]}>
      <Header
        noShadow
        style={{ backgroundColor: "transparent", borderBottomWidth: 0 }}
      >
        <Left>
          <TouchableOpacity>
            <Entypo name="chevron-small-left" size={24} color="black" />
          </TouchableOpacity>
        </Left>
        <Body>
          <Text style={styles.mainText}>Notifications</Text>
        </Body>
        <Right>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Ionicons name="ios-menu" size={24} color="black" />
          </TouchableOpacity>
        </Right>
      </Header>
      <ScrollView style={cstyles.container}>
        {notification && <View
          style={[
            cstyles.row,
            cstyles.flexBetweeen,
            cstyles.itemsCenter,
            cstyles.px_20,
            cstyles.my_10,
          ]}
        >
          <Text style={styles.headerTextlg}>Profile Notification</Text>
          {/* <TouchableOpacity>
            <Text style={styles.headerTextsm}> View All </Text>
          </TouchableOpacity> */}
        </View>}
        <View>
          {notification && notification.map((item, i) => {
            if (item.noti_status == "Location") {
              return (
                <NotificationCard image={item.dp} name={item.fname} time={item.noti_date} noti_id={item.noti_id} key={i} type="location" />
              )
            }
            else if (item.noti_status == "Download") {
              return (
                <NotificationCard image={item.dp} name={item.fname} time={item.noti_date} noti_id={item.noti_id} key={i} type="download" />
              )
            }
            else if (item.noti_status == "Like_Views") {
              return (
                <NotificationCard image={item.dp} name={item.fname} time={item.noti_date} noti_id={item.noti_id} key={i} type="like" />
              )
            }
            else {
              return (
                <NotificationCard image={item.dp} name={item.fname} time={item.noti_date} noti_id={item.noti_id} key={i} type="regular" />
              )
            }
          })}
        </View>
        {requests && <View
          style={[
            cstyles.row,
            cstyles.flexBetweeen,
            cstyles.itemsCenter,
            cstyles.px_20,
            cstyles.my_10,
          ]}
        >
          <Text style={styles.headerTextlg}>Connection Request</Text>
          {/* <TouchableOpacity>
            <Text style={styles.headerTextsm}> View All </Text>
          </TouchableOpacity> */}
        </View>}
        <View style={cstyles.padder}>
          {requests && requests.map((item, i) => (
            <ConnectionCard key={i} image={item.dp} name={item.fname} connection={item.mutual_conection} />
          ))}
        </View>
      </ScrollView>
      {loader && <Loader />}
    </SafeAreaView>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.authReducer.user,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    getNotificatoins,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

const styles = StyleSheet.create({
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerTextlg: {
    fontSize: 18,
    fontWeight: "600",
  },
  headerTextsm: {
    fontSize: 13,
    color: "gray",
  },
});
