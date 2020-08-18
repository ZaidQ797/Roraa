import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
export function getPushNotificationToken() {
    return new Promise((resolve, reject) => {

        if (Constants.isDevice) {
            Permissions.getAsync(Permissions.NOTIFICATIONS).then(({ status: existingStatus }) => {
                let finalStatus = existingStatus;
                if (existingStatus !== 'granted') {
                    Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
                        finalStatus = status;
                        PermissionHelper(finalStatus);
                    }).catch(e => {
                        reject({ message: "Error while getting token", status: true });
                        return;

                    });
                } else {
                    PermissionHelper(finalStatus);
                }
                function PermissionHelper(finalStatus) {
                    if (finalStatus !== 'granted') {
                        reject({ message: "Error while getting token", status: true });
                        return;
                    }
                    Notifications.getExpoPushTokenAsync().then(token => {
                        if (Platform.OS === 'android') {
                            Notifications.createChannelAndroidAsync('default', {
                                name: 'default',
                                sound: true,
                                priority: 'max',
                                vibrate: [0, 250, 250, 250],
                            });
                        }
                        resolve(token);
                    });
                }

            });

        } else {
            reject({ message: 'Must use physical device for Push Notifications', status: true });
            alert('Must use physical device for Push Notifications');
        }

    })
}