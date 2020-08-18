import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Loader = () => {
    return (
        <View style={{
            position: 'absolute', 
            flex: 1,
            justifyContent: 'center',
            width:'100%',
            height:'100%',
            backgroundColor:'rgba(0,0,0,0.01)'
        }} >
            <ActivityIndicator
                size={50}
                color="#ed1c44"
            />
        </View>
    )
}

export default Loader
