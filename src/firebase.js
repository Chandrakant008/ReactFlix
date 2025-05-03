// import { initializeApp } from "firebase/app";
// import { 
//     createUserWithEmailAndPassword, 
//     getAuth,
//     signInWithEmailAndPassword, 
//     signOut} from "firebase/auth";
// import {
//     addDoc, 
//     collection, 
//     getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyDu4DhxS0-wMt0Giyi_TStSj8pm_ue7eSE",
//   authDomain: "netflix-clone-9d527.firebaseapp.com",
//   projectId: "netflix-clone-9d527",
//   storageBucket: "netflix-clone-9d527.firebasestorage.app",
//   messagingSenderId: "532451643349",
//   appId: "1:532451643349:web:60c6634e25cdc2e1b8b75c"
// };


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app );
// const db = getFirestore(app );

// const signup = async (name, email, password)=>{
//     try{
//         const res =  await createUserWithEmailAndPassword(auth, email, password);
//         const user = res.user;
//         await addDoc(collection(db, "user"),{
//             uid: user.uid,
//             name,
//             authProvider: "local",
//             email,
//         });

//     } catch (error) {
//         console.log(error);
//         alert(error);
        
//     }
// }

// const login = async( email,password)=>{
//     try {
//        await signInWithEmailAndPassword(auth,email,password)


//     } catch (error){
//         console.log(error);
//         alert (error);

//     }
// }

// const logout =()=>{
//     signOut(auth);
// }

// export {auth, db, login, signup, logout};





import { initializeApp } from "firebase/app";
import { 
  createUserWithEmailAndPassword, 
  getAuth,
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  setDoc 
} from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDu4DhxS0-wMt0Giyi_TStSj8pm_ue7eSE",
  authDomain: "netflix-clone-9d527.firebaseapp.com",
  projectId: "netflix-clone-9d527",
  storageBucket: "netflix-clone-9d527.appspot.com",
  messagingSenderId: "532451643349",
  appId: "1:532451643349:web:60c6634e25cdc2e1b8b75c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//  Signup function (updated with setDoc)
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Store user data using setDoc and UID as document ID
    await setDoc(doc(db, "user", user.uid), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    if (error.code === "auth/email-alredy-in-use") {
        alert ("This email is aledy in use . please try signing in instead.");

    } else{
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(""));
        // alert(error.message);
        
    }
  } 
};

//  Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(""));
    // alert(error.message);
  }
};

//  Logout function
const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };


