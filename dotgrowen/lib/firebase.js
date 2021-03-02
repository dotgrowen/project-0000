import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/functions'

const firebaseConfig = {
    apiKey: "AIzaSyBpD-bjh8etqjfpBQLvr6Qnt49n35CN8TY",
    authDomain: "project-0001-1fb81.firebaseapp.com",
    projectId: "project-0001-1fb81",
    storageBucket: "project-0001-1fb81.appspot.com",
    messagingSenderId: "514059315490",
    appId: "1:514059315490:web:95143bed3b456eaae85d7b",
    measurementId: "G-5CKSF2X9N8"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const analytics = firebase.analytics();

if (location.hostname === "localhost") {
    firebase.firestore().settings({
        host: "localhost:8080",
        ssl: false,
        experimentalForceLongPolling: true,
    });

    firebase.functions().useFunctionsEmulator("https://localhost:5001")

}