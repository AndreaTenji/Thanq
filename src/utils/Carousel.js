import React, { Component } from 'react';


function displayNextImage() {

    if (index === images.length - 1) {              // se l'indice è arrivato al suo valor massimo
        index = 0;                              // torna al valore 1
    } else {                                    // altrimenti
        index++;                                // aumenta di uno
    }

    document.getElementById("img").src = images[index];     // cambia l'immagine con l'indice index
}

function startTimer() {
    setInterval(displayNextImage, 3000);        // chiama la funzione displayNextImage ogni 3 secondi
}

var images = [];    // array immagini
var index = -1;     // indice dell'immagine che verrà visualizzata

// popola l'array con le tre immagini contenute nella cartella images
images[0] = "images/background0.jpg";
images[1] = "images/background1.jpg";
images[2] = "images/background2.jpg";
