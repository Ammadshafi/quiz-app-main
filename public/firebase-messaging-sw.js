importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js')
const firebaseConfig = {
  apiKey: "AIzaSyAW4j4EjLsqdoy12S2fKPjrK2nALYdjcDk",
  authDomain: "quiz-app-pwa-d87c4.firebaseapp.com",
  projectId: "quiz-app-pwa-d87c4",
  storageBucket: "quiz-app-pwa-d87c4.appspot.com",
  messagingSenderId: "100149397563",
  appId: "1:100149397563:web:2df122a9e90cf5cfae341e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
firebase.messaging()
