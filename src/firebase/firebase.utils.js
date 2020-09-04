/* eslint-disable no-undef */
import firebase from 'firebase/app';
import 'firebase/firestore'; 
import 'firebase/auth';

// Config firebase 
const config = {
    apiKey: "AIzaSyCH24_wO6yXuEMW5sXXCFPSm9v4mBJmCvE",
    authDomain: "click-fashion-be220.firebaseapp.com",
    databaseURL: "https://click-fashion-be220.firebaseio.com",
    projectId: "click-fashion-be220",
    storageBucket: "click-fashion-be220.appspot.com",
    messagingSenderId: "1052292971956",
    appId: "1:1052292971956:web:c0cdc60eb259aa4da506e1",
    measurementId: "G-YNP0GZ3X0C"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};



export const auth = new firebase.auth();
export const firestore = firebase.firestore();

// Google sign-in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 