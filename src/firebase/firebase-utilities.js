import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCYSgCu9YsmHKXhaYRnd3XwIp9QRO-Axyo",
    authDomain: "dressing-shop-2c438.firebaseapp.com",
    databaseURL: "https://dressing-shop-2c438.firebaseio.com",
    projectId: "dressing-shop-2c438",
    storageBucket: "",
    messagingSenderId: "781161430150",
    appId: "1:781161430150:web:cf74ddb610574e1e"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
export const createUserProfileDocument = async(userAuth, otherData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({displayName, email, createdAt, ...otherData});
        } catch(error){
            console.log('error in adding user to db', error.message);
        }
    }
    return userRef;
}
export default firebase;


