import firebase from 'firebase'
import "firebase/firestore";



var firebaseApp = firebase.initializeApp ({

  apiKey: "AIzaSyBWnDRC8yy6dm6uDenvt88vwg8RKNg8zSc",
  authDomain: "app-retete.firebaseapp.com",
  databaseURL: "https://app-retete-default-rtdb.firebaseio.com",
  projectId: "app-retete",


  });

  var db = firebaseApp.firestore();

  export { db };
