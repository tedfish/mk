import firebase from "firebase/app"
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyD6Co-6n9-eKVy5DEQRRTen_yzcQqPnOkQ",
  authDomain: "menu-kitty.firebaseapp.com",
  projectId: "menu-kitty",
  storageBucket: "menu-kitty.appspot.com",
  messagingSenderId: "149969380126",
  appId: "1:149969380126:web:0aa7f8216bcef2ac5c9f0f",
  measurementId: "G-RBNBFF4YTS"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
//firebase.analytics()
export default firebase