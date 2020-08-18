import React, { Fragment, useState, useEffect } from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import cstyles from "../../constants/cstyles";
import MessageList from "./MessageList";
import Avatar from "./Avatar";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { Item, Icon, Input } from "native-base";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getOnlineFriends, getAllMessages, removeMessage } from '../../_actions/messages'
import { useFocusEffect } from '@react-navigation/native'
const Inbox = ({ navigation, getOnlineFriends, user, getAllMessages, removeMessage }) => {
  const [messages, setMessages] = useState(null);
  const [online, setOnline] = useState(null)
  useFocusEffect(
    React.useCallback(() => {
      removeMessage()
      const data = new FormData();
      data.append('u_id', user.u_id)
      new Promise((rsl, rej) => {
        getOnlineFriends(data, rsl, rej)
      }).then((res) => {
        setOnline(res)
      })

      new Promise((rsl, rej) => {
        getAllMessages(data, rsl, rej)
      }).then((res) => {
        setMessages(res)
      }).catch(err => {
        setMessages({ err: err.message })
      })
    }, [])
  )
  return (
    <Fragment>
      <SafeAreaView style={[cstyles.container, cstyles.contentContainer]}>
        <ScrollView style={cstyles.container}>
          <View style={[styles.flexRow, styles.padding]}>
            <Item rounded style={styles.input}>
              <Icon active name="search" />
              <Input placeholder="Search" />
            </Item>
            <TouchableOpacity
              style={styles.HeaderIcon}
              onPress={() => navigation.toggleDrawer()}
            >
              <Ionicons name="ios-menu" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={cstyles.padder}>
            <View style={styles.flexRow}>
              <Text style={styles.mainText}>Messages</Text>
              <TouchableOpacity>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.subtitle}>ONLINE FRIENDS</Text>
          </View>
          <View style={styles.avatarList}>
            {online && <FlatList
              data={online}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Avatar image={item.dp} onPress={() => navigation.navigate("Chat", { chat_id: item.u_id, chat_name: item.fname })} />
              )}
              keyExtractor={(item) => item.u_id}
            />}
          </View>
          <View style={[cstyles.padder]}>
            {messages && messages.length !== undefined &&
              messages.map((item, i) => {
                return (
                  <MessageList
                    item={item}
                    onPress={() => navigation.navigate("Chat", { chat_id: item.recv_id == user.u_id ? item.send_id : item.recv_id, chat_name: item.fname })}
                    key={i}
                  />
                )
              })
            }
            {messages && messages.err &&
              <View style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center' }} >
                <Text>{messages.err}</Text>
              </View>
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.authReducer.user,
    // online: state.messageReducer.online,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    getOnlineFriends, getAllMessages, removeMessage
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
