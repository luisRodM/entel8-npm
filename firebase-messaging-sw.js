importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3gNYGYdfYtgi7tfi_fim-lbO80zH6JVk",
  authDomain: "entel8-npm.firebaseapp.com",
  projectId: "entel8-npm",
  storageBucket: "entel8-npm.appspot.com",
  messagingSenderId: "95520415232",
  appId: "1:95520415232:web:e17b2d071c14089be3c2e5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize FCM
const messaging = firebase.messaging()