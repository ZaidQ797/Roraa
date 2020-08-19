import React, { useEffect, useState } from "react";
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
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import cstyles from "../../constants/cstyles";
import styles from "./styles";
import { Alert } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import config from "../../_config";
import { View } from "react-native";
// import { getDiscovers } from '../../_actions/home'

function DiscoverList({ item, navigation, user }) {
  const [loader, setLoader] = useState(true);
  // useEffect(() => {
  // 	const formData = new FormData()
  // 	formData.append("u_id", user.u_id)
  // 	new Promise((rsl, rej) => {
  // 		getDiscovers(formData, rsl, rej)
  // 	}).then(res => {
  // 		setLoader(false)
  // 	})
  // 		.catch(err => {
  // 			Alert.alert("Roraa", err.message)
  // 		})
  // }, [])
  return (
    <TouchableOpacity onPress={() => {
      if (item.u_id == user.u_id) {
        navigation.navigate("World", { tab: 0 })

      }
      else {
        navigation.navigate("VisitorProfile", { visitorId: item.u_id })
      }
    }}>
      <List style={styles.listContainer}>
        <ListItem avatar style={styles.noBorder}>
          <Left>
            {item.dp ? (
              <Thumbnail
                style={styles.image}
                source={{
                  uri: `${config.imageUrl}/${item.dp}`,
                }}
              />
            ) : (
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: "gray",
                    borderRadius: 50,
                  }}
                />
              )}
          </Left>
          <Body style={styles.noBorder}>
            <Text style={styles.messageHeader}>
              {item.fname ? item.fname : "..."}
            </Text>
            <Text note style={styles.message}>
              {item.username || "..."}
            </Text>
          </Body>
        </ListItem>
      </List>
    </TouchableOpacity>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    user: state.authReducer.user,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      // getDiscovers
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverList);
