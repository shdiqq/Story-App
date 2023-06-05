// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA_2ZmTH9aT62CZpwMpKJek_tTJKJq4KrM',
  authDomain: 'story-app-f2ae3.firebaseapp.com',
  projectId: 'story-app-f2ae3',
  storageBucket: 'story-app-f2ae3.appspot.com',
  messagingSenderId: '100982035233',
  appId: '1:100982035233:web:05a5ba0b1ad2e886ee6460',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
