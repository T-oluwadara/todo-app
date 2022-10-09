const firebaseConfig = {
  apiKey: "AIzaSyDQp_lNbgaxIU4WYtVav8KLCwm6UUbnvLc",
  authDomain: "todo-app-3a29c.firebaseapp.com",
  projectId: "todo-app-3a29c",
  storageBucket: "todo-app-3a29c.appspot.com",
  messagingSenderId: "981455853408",
  appId: "1:981455853408:web:0a037962339716027ab005",
  measurementId: "G-B1LCD9GGCK",
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
