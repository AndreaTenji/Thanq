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

// db.collection("users").add({
//     currentUser: "robertogreco1101",
//     name: "Roberto",
//     surname: "Greco",
//     job: 'Social Media',
//     profileImageURL: 'image-roberto123456',
// })
//     .then(function (docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function (error) {
//         console.error("Error adding document: ", error);
//     });



export function getChats() {
    //prendere le chat con cui si sta parlando (chatlist)
    let userId = "FvK1BIdy6AToYxfxnzuWJRwkk6y2"
    return db.collection("chats").where("participants", "array-contains", userId).get()
    .then(function(querySnapshot) {
        let chats = {}
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            chats[doc.id] = doc.data();
        });
        console.log(chats);
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
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
export function getProfile(id) {
    //prendere i dati del profilo della persona autenticata
    return db.collection("users").doc(id).get()
        .then((doc) => {
            console.log(doc.data().job)
            return doc.data()
            // var name = `${doc.id} => ${doc.data()}`;
        });
}
export function dbSearch() {
    //cercare stringa in contatti e messaggi
}
