import { AsyncStorage } from "react-native";

export function authHeader(contentType) {
    return AsyncStorage.getItem("persist:root")
        .then(res => {
            return JSON.parse(JSON.parse(res).authentication).token;
        }).then(token => {
            if (token) {
                return {
                    'Authorization': token,
                    'secret': 'onemanarmy',
                    //   'Content-Type': 'application/json'
                    'Content-Type': contentType
                };
            } else {
                return authHeader();
            }
        })
}

