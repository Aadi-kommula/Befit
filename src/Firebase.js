import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDstsVm5SxkqLXjHtSOsyGmgwMZl28WgY0",
  authDomain: "befit-a1a0c.firebaseapp.com",
  projectId: "befit-a1a0c",
  storageBucket: "befit-a1a0c.firebasestorage.app",
  messagingSenderId: "975223414965",
  appId: "1:975223414965:web:9ea168c716f0deb2179efc",
  measurementId: "G-LTRV6K8R2N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export default app;