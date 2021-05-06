import firebase from 'firebase'
import 'firebase/storage'


var firebaseApp = firebase.initializeApp ({

  apiKey: "AIzaSyBWnDRC8yy6dm6uDenvt88vwg8RKNg8zSc",
  authDomain: "app-retete.firebaseapp.com",
  databaseURL: "https://app-retete-default-rtdb.firebaseio.com",
  projectId: "app-retete",
  storageBucket: "app-retete.appspot.com",
  messagingSenderId: "429351159271",
  appId: "1:429351159271:web:9bec696782f4cf027be942",
  measurementId: "G-H5Q8EMWC4L"

  });

  var db = firebaseApp.firestore();

  export { db };
