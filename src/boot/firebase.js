// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'awesome-todo-c0ed4.firebaseapp.com',
  databaseURL: 'https://awesome-todo-c0ed4.firebaseio.com',
  projectId: 'awesome-todo-c0ed4',
  storageBucket: '',
  messagingSenderId: '559347097665',
  appId: '1:559347097665:web:8e504873c5ba3a54c8e6c0',
  measurementId: 'G-NT52TSJ4FV'
}

let firebaseApp = firebase.initializeApp(firebaseConfig);

let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export {
  firebaseAuth,
  firebaseDb
}
