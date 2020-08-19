import React from "react";
import { Image } from "react-native";
import { View, Text } from "native-base";
import cstyles from "../../constants/cstyles";
import Avatar from "./Avatar";
import styles from "./styles";
import config from "../../_config";
function SentMessage({ image, message, time, showTime }) {
  return (
    <View>
      <View style={[cstyles.row, cstyles.itemsCenter]}>
        <Text style={styles.sMessage}>{message}</Text>
        <Image
          source={{ uri: `${config.imageUrl}/${image}` }}
          style={styles.avatar}
        />
      </View>
      <Text
        style={[
          styles.dividerText,
          !showTime
            ? styles.hideTime
            : { alignSelf: "flex-start", marginLeft: 10 },
        ]}
      >
        {time}
      </Text>
    </View>
  );
}

export default SentMessage;
