import React from "react";
import { Image } from "react-native";
import { View, Text } from "native-base";
import cstyles from "../../constants/cstyles";
import Avatar from "./Avatar";
import styles from "./styles";
import config from "../../_config";

function RecievedMessage({ image, message, time, showTime }) {
  return (
    <View>
      <View style={[cstyles.row, cstyles.itemsCenter]}>
        <Image
          source={{ uri: `${config.imageUrl}/${image}` }}
          style={styles.avatar}
        />
        <Text style={styles.message}>{message}</Text>
      </View>
      <Text
        style={[
          styles.dividerText,
          !showTime
            ? styles.hideTime
            : { alignSelf: "flex-end", marginRight: 10 },
        ]}
      >
        {time}
      </Text>
    </View>
  );
}

export default RecievedMessage;
