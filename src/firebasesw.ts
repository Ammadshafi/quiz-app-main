import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAW4j4EjLsqdoy12S2fKPjrK2nALYdjcDk",
  authDomain: "quiz-app-pwa-d87c4.firebaseapp.com",
  projectId: "quiz-app-pwa-d87c4",
  storageBucket: "quiz-app-pwa-d87c4.appspot.com",
  messagingSenderId: "100149397563",
  appId: "1:100149397563:web:2df122a9e90cf5cfae341e",
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging();
export const configureStore = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      getToken(messaging, {
        vapidKey:
          "BA_l_Ek2j3LCZqbbGmQqg-w6rD23WBKpNAWCx-1BOCaBl7Q5tOxVWfBj2ne_BeZQU0wuUjVsFHhrtn6qMJwQ14k",
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log(currentToken);
          } else {
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Unable to get permission to notify.");
    }
  });
};
