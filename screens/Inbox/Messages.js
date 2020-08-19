import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Alert, ActivityIndicator } from "react-native";
import cstyles from "../../constants/cstyles";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import {
  Header,
  Left,
  Right,
  Body,
  Item,
  Icon,
  Input,
  View,
} from "native-base";
import {
  Entypo,
  AntDesign,
  MaterialIcons,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import styles from "./styles";
import Divider from "./Divider";
import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";
import { LinearGradient } from "expo-linear-gradient";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getConversation,
  sendMessage,
  get_new_msgs,
} from "../../_actions/messages";

// function Messages({ navigation, user, chat_id,
// 	getConversation, sendMessage, get_new_msgs, conversation,
// })
class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      isSending: false,
    };
  }

  componentDidMount = () => {
    const {
      user,
      chat_id,
      getConversation,
      get_new_msgs,
      conversation,
    } = this.props;
    const interval = setInterval(() => {
      if (conversation && conversation.length > 0) {
        this.getData();
        // const data = new FormData();
        // data.append("u_id", user.u_id);
        // data.append("recv_id", chat_id);
        // data.append("msg_id", conversation[conversation.length - 1].msg_id);
        // new Promise((rsl, rej) => {
        //   get_new_msgs(data, rsl, rej);
        // })
        //   .then((res) => {})
        //   .catch((err) => {});
      }
    }, 1000);
    this.setState({ interval });
    this.getData();
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      this.getData();
    });
  };
  componentWillUnmount() {
    this._unsubscribe();
  }
  getData = () => {
    const {
      user,
      chat_id,
      getConversation,
      get_new_msgs,
      conversation,
    } = this.props;
    const data = new FormData();
    data.append("u_id", user.u_id);
    data.append("recver_id", chat_id);
    new Promise((rsl, rej) => {
      getConversation(data, rsl, rej);
    })
      .then((res) => {
        console.log("Hi there new message");
      })
      .catch((err) => {});
  };
  sendMessageFun = () => {
    const { user, chat_id, sendMessage } = this.props;
    const { content } = this.state;
    if (content.length == 0) {
      return true;
    }
    const data = new FormData();
    data.append("u_id", user.u_id);
    data.append("content", content);
    data.append("recver_id", chat_id);
    this.setState({ content: "" });
    new Promise((rsl, rej) => {
      sendMessage(data, rsl, rej);
    })
      .then((res) => {
        this.setState({ isSending: false }, () => {
          this.getData();
        });
      })
      .catch((err) => {
        this.setState({ isSending: false });
        Alert.alert("Roraa", err.message);
      });
  };

  render() {
    const { conversation, user } = this.props;
    const { content } = this.state;
    return (
      <SafeAreaView style={[cstyles.container]}>
        <Header
          noShadow
          style={[
            { backgroundColor: "transparent" },
            cstyles.row,
            cstyles.itemsCenter,
            cstyles.flexBetweeen,
          ]}
        >
          {/*<TouchableOpacity style={cstyles.mx_10} onPress={() => navigation.goBack()}>*/}
          {/*	<Entypo name="chevron-small-left" size={24} color="black" />*/}
          {/*</TouchableOpacity>*/}
          {/* <Item rounded style={[styles.input]}>
					<Icon active name="search" />
					<Input placeholder="Search" />
				</Item> */}

          {/*<TouchableOpacity style={cstyles.mx_10} onPress={() => navigation.navigate('ChatHighlight')}>*/}
          {/*	<Octicons name="info" size={24} color={Colors.primaryLightColor} />*/}
          {/*</TouchableOpacity>*/}
        </Header>

        <ScrollView
          style={[cstyles.container, cstyles.padder]}
          ref={(ref) => {
            this.scrollView = ref;
          }}
          onContentSizeChange={() =>
            this.scrollView.scrollToEnd({ animated: true })
          }
        >
          {/* <Divider time="Monday, 10:50AM" /> */}
          {/* <RecievedMessage message="Hey Hi Danya Bairstow" /> */}
          {/* <RecievedMessage message="Hi Danya, How's your days going?" time="10:50AM" showAvatar showTime /> */}
          {/* <Divider time="Tuseday, 10:50AM" /> */}

          {conversation &&
            conversation.length !== undefined &&
            conversation.map((item, i) => {
              if (item.send_id != user.u_id) {
                return (
                  <View key={i} style={{ marginBottom: 15 }}>
                    <RecievedMessage
                      message={item.content}
                      time={item.date}
                      image={item.dp}
                      showTime
                    />
                  </View>
                );
              } else {
                return (
                  <View key={i} style={{ marginBottom: 15 }}>
                    <SentMessage
                      message={item.content}
                      time={item.date}
                      image={item.dp}
                      showTime
                    />
                  </View>
                );
              }
            })}
          {/* {conversation && conversation.err &&
					<View style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center' }} >
						<Text>{conversation.err}</Text>
					</View>
				} */}
          {/* <RecievedMessage
					message="Would you like to go to the john's party with me"
					time="05:50PM"
					showAvatar
					showTime
				/>
				<SentMessage message="Thanks all things went well just a little boring at home." /> */}
          {/* <SentMessage message="Ok sure! see you tonight" time="05:50PM" showAvatar showTime /> */}
        </ScrollView>
        <View>
          <LinearGradient
            colors={[Colors.primaryGradient, Colors.secondryGradient]}
            start={[0.1, 0.1]}
            end={[0.5, 0.5]}
            style={styles.messageFooter}
          >
            <View style={[cstyles.row, cstyles.itemsCenter]}>
              <Item rounded style={[styles.input]}>
                <Input
                  style={cstyles.px_10}
                  placeholder="Type here"
                  value={content}
                  onChangeText={(e) => this.setState({ content: e })}
                />
                {/* <MaterialIcons name="attachment" size={24} color="gray" /> */}
              </Item>

              <TouchableOpacity
                style={[cstyles.mx_10, styles.sentButton]}
                onPress={() =>
                  this.setState({ isSending: true }, () => {
                    this.sendMessageFun();
                  })
                }
              >
                {this.state.isSending ? (
                  <ActivityIndicator animated color={"white"} />
                ) : (
                  <Ionicons name="ios-send" size={18} color="white" />
                )}
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.authReducer.user,
    conversation: state.messageReducer.conversation,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      getConversation,
      sendMessage,
      get_new_msgs,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
