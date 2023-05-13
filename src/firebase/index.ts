import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAH3kmMjab3SosKu3MyHAMiujn8wTH9pEU",
  authDomain: "jobiz-c95b8.firebaseapp.com",
  projectId: "jobiz-c95b8",
  storageBucket: "jobiz-c95b8.appspot.com",
  messagingSenderId: "225907929999",
  appId: "1:225907929999:web:59767484c40e285cc8d1fa",
  measurementId: "G-CB1MEQ625T",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
