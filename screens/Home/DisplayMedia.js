import React, { useEffect, useState } from 'react'
import {
    StyleSheet, Text, View, ScrollView, Image,
    ActivityIndicator, TouchableOpacity
} from 'react-native'
import { Video } from "expo-av";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import config from '../../_config'
const DisplayMedia = ({ navigation, route }) => {
    const [files, setFiles] = useState([])
    useEffect(() => {
        const media = route.params.files
        setFiles(media)
    }, [])
    showImage = (image, main, widthPercentage) => {
        return (
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: widthPercentage,
                    marginBottom: 10,
                }}
            >
                <Image
                    // resizeMode={"contain"}
                    style={{
                        width: '100%',
                        height: main ? 300 : 100,
                        zIndex: 1000,
                    }}
                    source={{ uri: `${config.imageUrl}/${image.file}` }}
                />
                <ActivityIndicator style={{ position: "absolute" }} />
            </View>
        )
    }
    showVideo = (video, main, widthPercentage) => {
        return (
            <TouchableOpacity
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: widthPercentage,

                }}
                onPress={() => {
                    setLoader(true)
                    video.file !== ""
                        ? handleVideoClick(video.file, id)
                        : alert("Video not found");
                }}
            >
                <Video
                    source={{ uri: `${config.imageUrl}/${video.file}` }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    // shouldPlay
                    style={{ width: '100%', height: main ? 300 : 100, zIndex: 1000 }}
                />
                <ActivityIndicator style={{ position: "absolute" }} />
                <AntDesign name="playcircleo" size={24} color="white" style={{ position: 'absolute', zIndex: 1000000 }} />
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <ScrollView>
                <View style={{ padding: 5 }} >
                    {files.map((item, i) => {
                        return (
                            <View key={i} >
                                {item.type == "image" && showImage(item, true, '100%')}
                                {item.type == "video" && showVideo(item, true, '100%')}
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default DisplayMedia

const styles = StyleSheet.create({})
