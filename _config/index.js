const config = {
  // baseUrl: 'https://roraa-admin.herokuapp.com',   //production
  baseUrl: "https://rora.coviknow.com/Authentication", //local
  imageUrl: "https://rora.coviknow.com", //local
  // socketHeader: {
  //     timeout: 10000, jsonp: false, transports: ['websocket'], autoConnect: true, agent: '-', pfx: '-', cert: '-', ca: '-', ciphers: '-', rejectUnauthorized: '-', perMessageDeflate: '-'
  // },
  // googleMapsAPIKey: "GOOGLE_MAPS_KEY",
  // facebookId: "FACEBOOK_ID",

  google: {
    iosClientId:
      "326731481223-65rk5i1fbi0c1u827o136cd040h4ckdq.apps.googleusercontent.com",
    androidClientId:
      "326731481223-n5epulcl4h8pl9du42is1pgfjgm8jch7.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  },
};
export default config;
