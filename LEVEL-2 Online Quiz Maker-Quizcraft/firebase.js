import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBpLkoEuJO8u-VnEQBKkk_b7hobNDeG_7g",  // your real key
  authDomain: "quizcraft-9e707.firebaseapp.com",
  projectId: "quizcraft-9e707",
  storageBucket: "quizcraft-9e707.appspot.com",
  messagingSenderId: "329511481084",
  appId: "1:329511481084:web:47a35bc2e9eda5c80cb179"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
