import React from "react";
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
import { StyleSheet } from "react-native";
import DefaultImage from "../../assets/images/profile.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
import cstyles from "../../constants/cstyles";
import styles from "./styles";

function StarList({ index, u_id, fname, dp, email }) {
  return (
    <TouchableOpacity onPress={() => console.log("yes")}>
      <List style={styles.listContainer}>
        <ListItem avatar style={styles.noBorder}>
          <Left>
            <Text style={[styles.number, styles.secondryColor, cstyles.mr_20]}>
              {index + 3}
            </Text>
            <Thumbnail
              style={styles.image}
              source={{
                uri:
                  "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              }}
            />
          </Left>
          <Body style={styles.noBorder}>
            <Text style={styles.messageHeader}>{name || "Kumar Pratik"}</Text>
            <Text note style={styles.message}>
              {fname || "@kumarPatric"}
            </Text>
          </Body>
          <Right style={[styles.noBorder, cstyles.selfCenter]}>
            <Text note style={[styles.message]}>
              {percent || "60%"}
            </Text>
          </Right>
        </ListItem>
      </List>
    </TouchableOpacity>
  
  );
}

export default StarList;
