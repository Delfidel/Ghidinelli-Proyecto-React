import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoOrVAfAJIEdELO6eMNB64hggGuirEl_w",
  authDomain: "coderhouse-pf-react.firebaseapp.com",
  projectId: "coderhouse-pf-react",
  storageBucket: "coderhouse-pf-react.appspot.com",
  messagingSenderId: "447082402044",
  appId: "1:447082402044:web:b29fdd72053a0226598779"
};

// Initialize Firebase
initializeApp(firebaseConfig);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


