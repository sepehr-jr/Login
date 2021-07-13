import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  
    apiKey: "AIzaSyC7_MH0w-ZnbzZ-t2PuWNm_jSPvSb1MXGo",
    authDomain: "project-cbeab.firebaseapp.com",
    projectId: "project-cbeab",
    storageBucket: "project-cbeab.appspot.com",
    messagingSenderId: "687758121405",
    appId: "1:687758121405:web:22500515e882aaa5785ad4"
  });

export const auth = app.auth()
export default app
