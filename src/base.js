import firebase from 'firebase'; 
import 'firebase/storage'; 

export const appF = firebase.initializeApp({
    "projectId": "presentation-app-5a85a",
    "appId": "1:440100521577:web:92d4c2d2b83a138f8184f8",
    "databaseURL": "https://presentation-app-5a85a-default-rtdb.firebaseio.com",
    "storageBucket": "presentation-app-5a85a.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyAcIrODY90hWOfbd8bfHrRdusqZamZ0CPE",
    "authDomain": "presentation-app-5a85a.firebaseapp.com",
    "messagingSenderId": "440100521577",
    "measurementId": "G-J0XY20XT9P"
  });