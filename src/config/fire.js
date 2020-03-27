import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDwHy2HQIl8kchxvcSU0nU-SesIlg714us",
  authDomain: "parkaway-57cb0.firebaseapp.com",
  databaseURL: "https://parkaway-57cb0.firebaseio.com",
  projectId: "parkaway-57cb0",
  storageBucket: "parkaway-57cb0.appspot.com",
  messagingSenderId: "716705622935",
  appId: "1:716705622935:web:5531efe84f446ea5a8b2d2",
  measurementId: "G-L6G50VQCDF"

  };
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
