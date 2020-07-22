const config = {
    // baseUrl: 'https://roraa-admin.herokuapp.com',   //production
    baseUrl: 'http://192.168.6.4:5000',   //local 
    socketHeader: {
        timeout: 10000, jsonp: false, transports: ['websocket'], autoConnect: true, agent: '-', pfx: '-', cert: '-', ca: '-', ciphers: '-', rejectUnauthorized: '-', perMessageDeflate: '-'
    },
    googleMapsAPIKey: "GOOGLE_MAPS_KEY",
    facebookId: "FACEBOOK_ID",

    google: {
        iosClientId: "GOOGLE_IOS_CLIENT_ID",
        androidClientId: "ANDROID_CLIENT_ID"
    }
}
export default config;