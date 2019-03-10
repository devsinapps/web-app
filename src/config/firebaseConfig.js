import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBVKRZLabaYZ3k21Da4STJFGrMcb8bRybU",
    authDomain: "human-resources-2a4e3.firebaseapp.com",
    databaseURL: "https://human-resources-2a4e3.firebaseio.com",
    projectId: "human-resources-2a4e3",
    storageBucket: "human-resources-2a4e3.appspot.com",
    messagingSenderId: "758743820860"
  };
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase