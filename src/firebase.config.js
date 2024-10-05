// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC4dUMuMFUQ5t8RvaU89B4c4Tw_2dyGZY",
  authDomain: "jobportal-b7936.firebaseapp.com",
  projectId: "jobportal-b7936",
  storageBucket: "jobportal-b7936.appspot.com",
  messagingSenderId: "155940210849",
  appId: "1:155940210849:web:17644e79945849b46b88e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};