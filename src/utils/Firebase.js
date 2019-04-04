import Firebase from 'firebase'

// Initialize Firebase
Firebase.initializeApp({
    apiKey: "AIzaSyBDT1WCYrEu0BmEa1ZXZ4fVtNXhrbq3ahk",
    authDomain: "thanq-c41af.firebaseapp.com",
    databaseURL: "https://thanq-c41af.firebaseio.com",
    projectId: "thanq-c41af",
    storageBucket: "thanq-c41af.appspot.com",
    messagingSenderId: "297767299087"
})

export const firebase = Firebase;

var db = firebase.firestore();

db.collection("chats").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().messages[0].text}`);
    });
});


// db.collection("chats").add({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
// })
//     .then(function (docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function (error) {
//         console.error("Error adding document: ", error);
//     });


export function getChats() {


    //prendere le chat con cui si sta parlando (chatlist)
}
export function getMessages() {
    //prendere i messaggi della chat della persona con cui si sta parlando (chat/messaggi)
}
export function postMessages() {
    //inviare i singoli messaggi
}
export function setMessages() {
    //archiviare un singolo messaggio/intera chat
}
export function getProfile() {
    //prendere i dati del profilo della persona autenticata
}
export function getContacts() {
    //prendere tutti i dati dei contatti della persona autenticata (user)
}
export function dbSearch() {
    //cercare stringa in contatti e messaggi
}
