
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBR8d5XojAYkqrtwAN9CTRSwXg2Sl_e3Eo",
    authDomain: "rtc-app-d43f4.firebaseapp.com",
    databaseURL: "https://rtc-app-d43f4.firebaseio.com",
    projectId: "rtc-app-d43f4",
    storageBucket: "rtc-app-d43f4.appspot.com",
    messagingSenderId: "111067480312",
    appId: "1:111067480312:web:1599c8d174760733dcfb0d",
    measurementId: "G-7HFZ05G064"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;