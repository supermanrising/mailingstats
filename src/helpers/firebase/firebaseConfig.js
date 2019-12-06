import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCpRANjPXFo-glSMdDswD-WcS_n_foFNi8",
    authDomain: "bm-mailingstats.firebaseapp.com",
    databaseURL: "https://bm-mailingstats.firebaseio.com",
    projectId: "bm-mailingstats",
    storageBucket: "bm-mailingstats.appspot.com",
    messagingSenderId: "864982920087",
    appId: "1:864982920087:web:3d9ec49b9d32925a14b2d2",
    measurementId: "G-Y2WXWC76XZ"
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;