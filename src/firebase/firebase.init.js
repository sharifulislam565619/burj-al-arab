import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confic";



const initializationFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializationFirebase;