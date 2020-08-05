import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDWI6xCeGdNEh0nlCacAkefIJW32KUSD5M",
        authDomain: "instagram-clone-9ed23.firebaseapp.com",
        databaseURL: "https://instagram-clone-9ed23.firebaseio.com",
        projectId: "instagram-clone-9ed23",
        storageBucket: "instagram-clone-9ed23.appspot.com",
        messagingSenderId: "4756426483",
        appId: "1:4756426483:web:82292dd4f2c32ecb9b3186",
        measurementId: "G-DG0EJ928V7"
      
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage};