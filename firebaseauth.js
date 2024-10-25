import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB0IaQI4JMnlvFJMgWFRQDLovQRBcKULQU",
    authDomain: "gdsc-web-dev-7d04c.firebaseapp.com",
    projectId: "gdsc-web-dev-7d04c",
    storageBucket: "gdsc-web-dev-7d04c.appspot.com",
    messagingSenderId: "1053529772770",
    appId: "1:1053529772770:web:1d28b7c1da589252e844bb",
    measurementId: "G-WFPGZNJBBG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function signUp() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Sign up successful!');
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Login successful!');
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
}




