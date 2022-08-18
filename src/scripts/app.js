import * as burger from 'burger.js';

fetch('../donnes.json')
.then(
    (response) => {
        console.log(response.json());
    },
    (response) => {
        console.log("une erreur est survenue.");
    }
);


