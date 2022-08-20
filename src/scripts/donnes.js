

let question1 = '{"pi" : "3.7%", "peui" : "3.7%", "i" : "51.9%", "supi" :"40.7%"}';

let question2 = '{"o" : "29.6%", "n" : "18.5%", "pe" : "51.9%"}';

let question3 = '{"o" : "59.3%", "n" : "40.7%"}';

let question4 = '{"o" : "61.9%", "n" : "38.1%"}';

let question5 = '{"pu" : "4%", "mu" : "12%", "u" : "48%", "au" : "12%", "tu" : "24%"}';

let question6 = '{"j" : "28%", "c" : "28%", "jc" : "32%", "a" : "12%" }';

let q1 = JSON.parse(question1);
let q2 = JSON.parse(question2);
let q3 = JSON.parse(question3);
let q4 = JSON.parse(question4);
let q5 = JSON.parse(question5);
let q6 = JSON.parse(question6);


var question = ["Est-ce qu’épargner de l’argent vous intéresse\u00a0?", "Est-ce qu’un site aidant à épargner de l'argent vous intéresserait\u00a0?", "Est-ce que vous utilisez déjà un système pour épargner de l’argent, exemple\u00a0: un bocal, des pochettes, une tirelire\u00a0?", "Est-ce que ce système vous aide\u00a0?", "Est-ce qu’une méthode informatique  en complément des méthodes ci-dessus vous seraient utiles\u00a0?", "Comme méthode informatique, que préférez-vous\u00a0?"];
var reponse = [["Pas intéressé : " + q1.pi, " Peu intéressé : " + q1.peui, " Intéressé : " + q1.i, " Super intéressé : " + q1.supi],["Oui : " + q2.o, " Non : " + q2.n, " Peut-être : " + q2.pe], ["Oui : " + q3.o," Non : " + q3.n], ["Oui : " + q4.o, " Non : " + q4.n], ["Pas utile : " + q5.pu, " Moyennement utile : " + q5.mu, " Utile : " + q5.u, " Assez utile : " + q5.au, " Très utile : " + q5.tu], ["Jeu : " + q6.j, " Conseils : " + q6.c, " Jeu et conseils : " + q6.jc, " Autre : " + q6.a]];
var clic = document.querySelector("#btn");
var ques = document.querySelector("#question");
var rep = document.querySelector("#rep");

if (ques){
    clic.addEventListener("click", ale);

    ale();
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function ale (){
    var aleatoire = getRandomIntInclusive (0, question.length-1);
    ques.innerHTML = question[aleatoire];
    rep.innerHTML = reponse[aleatoire];
}


