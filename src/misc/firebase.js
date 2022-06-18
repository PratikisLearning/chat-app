import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDQ_YFEoI4hyQO3i2QSofnNcdtmoXJT4Yo",
    authDomain: "chat-app-35187.firebaseapp.com",
    databaseURL: "https://chat-app-35187-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-app-35187",
    storageBucket: "chat-app-35187.appspot.com",
    messagingSenderId: "634970524718",
    appId: "1:634970524718:web:43bf2acfb7143dda1063bf"
  }

  const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();