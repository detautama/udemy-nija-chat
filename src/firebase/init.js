import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyCJ0RymudEd6s5EEeUzhl2NTu3nXhQXp8A",
  authDomain: "udemy-ninja-chat-3bfc3.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-3bfc3.firebaseio.com",
  projectId: "udemy-ninja-chat-3bfc3",
  storageBucket: "udemy-ninja-chat-3bfc3.appspot.com",
  messagingSenderId: "947117565154"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots:true })

export default firebaseApp.firestore()