// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "AIzaSyAsWPugKjmGNx55jCfAz9LUvFtkK4n0lPU",
  authDomain: "security-a2d2b.firebaseapp.com",
  databaseURL: "https://security-a2d2b-default-rtdb.firebaseio.com",
  projectId: "security-a2d2b",
  storageBucket: "security-a2d2b.appspot.com",
  messagingSenderId: "848855351997",
  appId: "1:848855351997:web:777651742c9e3458952dd4",
  measurementId: "G-BYWPLDQT2B"
  }
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBfOuo-p4p2d3zDelCgn2tin_kHyDcYLMg",
//   authDomain: "securityroom-cd481.firebaseapp.com",
//   projectId: "securityroom-cd481",
//   storageBucket: "securityroom-cd481.appspot.com",
//   messagingSenderId: "519398570965",
//   appId: "1:519398570965:web:294c5f088d7f3b34089b5c",
//   measurementId: "G-D5L4YCGVCW"
// };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
