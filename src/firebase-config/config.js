import firebase from 'firebase';
import '@firebase/firestore';

// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
//     messagingSenderId: process.env.SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMENT_ID
//   };

//This file is what connects our game to Firebase, which is our external Database. 
//PLEASE DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING. Any errors here, and it can't connect to the internet at all.
const firebaseConfig = {
    apiKey: "AIzaSyCcnrt25F6KRA0Hr7twmvxrawM4Q_mgLOs",
    authDomain: "scambusters-47d4a.firebaseapp.com",
    databaseURL: "https://scambusters-47d4a-default-rtdb.firebaseio.com",
    projectId: "scambusters-47d4a",
    storageBucket: "scambusters-47d4a.appspot.com",
    messagingSenderId: "742216763175",
    appId: "1:742216763175:web:f02493029cf6db821d8b02",
    measurementId: "G-0K0XP58CTK"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };