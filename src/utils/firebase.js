import firebase from 'firebase'
import 'firebase/auth';
import app from './../App'
// Initialize Firebase
const config = {
    apiKey: "AIzaSyBDT1WCYrEu0BmEa1ZXZ4fVtNXhrbq3ahk",
    authDomain: "thanq-c41af.firebaseapp.com",
    databaseURL: "https://thanq-c41af.firebaseio.com",
    projectId: "thanq-c41af",
    storageBucket: "thanq-c41af.appspot.com",
    messagingSenderId: "297767299087"
};
class Fire {
    constructor() {
        app.initializeApp(config);
    }
}
export default firebase;
