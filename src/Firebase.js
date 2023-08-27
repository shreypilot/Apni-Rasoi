import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCc2uSvb6nHNejeDE4u1m8hRsL_wtN0Q8s",
  authDomain: "swiggy-dba6b.firebaseapp.com",
  projectId: "swiggy-dba6b",
  storageBucket: "swiggy-dba6b.appspot.com",
  messagingSenderId: "910702213212",
  appId: "1:910702213212:web:fbf5e5169dbc3b9aed8e99"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase