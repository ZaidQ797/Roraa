import React, { Component } from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import config from "../../_config";
class VideoPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { uri } = this.props.route.params;

    return (
      <VideoPlayer
        style={{ flex: 1 }}
        showControlsOnLoad={true}
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: uri && `${config.imageUrl}/${uri}`,
          },
        }}
        // inFullscreen={true}
      />
      // <Video
      //   source={{
      //     uri: uri && `${config.imageUrl}/${uri}`,
      //   }}
      //   rate={1.0}
      //   volume={1.0}
      //   isMuted={false}
      //   // resizeMode="cover"
      //   shouldPlay
      //   // isLooping
      //   style={{ width: 300, height: 300, flex: 1 }}
      // />
    );
  }
}

export default VideoPlay;
