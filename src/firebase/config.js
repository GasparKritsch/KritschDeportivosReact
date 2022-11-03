import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7gcFF3yRhJriL1LBCpPFF1yvT-Mt2dxE",
  authDomain: "kritschdeportivos.firebaseapp.com",
  projectId: "kritschdeportivos",
  storageBucket: "kritschdeportivos.appspot.com",
  messagingSenderId: "334375992026",
  appId: "1:334375992026:web:03ba0ad1d15fa348a743e3"
};

const app = initializeApp(firebaseConfig);

export const firestoreInit = () => {
    return app
}