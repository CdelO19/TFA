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


var question = ["Est-ce qu’épargner de l’argent vous intéresse ?", "Est-ce qu’un site aidant à épargner de l'argent vous intéresserait ?", "Est-ce que vous utilisez déjà un système pour épargner de l’argent, exemple : un bocal, des pochettes, une tirelire ?", "Est-ce que ce système vous aide ?", "Est-ce qu’une méthode informatique  en complément des méthodes ci-dessus vous seraient utiles ?", "Comme méthode informatique, que préférez-vous ?"];
var reponse = [[q1.pi, q1.peui, q1.i, q1.supi],[q2.o, q2.n, q2.pe], [q3.o, q3.n], [q4.o, q4.n], [q5.pu, q5.mu, q5.u, q5.au, q5.tu], [q6.j, q6.c, q6.jc, q6.a]];
var clic = document.querySelector("#btn");
var ques = document.querySelector("#question");
var rep = document.querySelector("#rep");

clic.addEventListener("click", ale);

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

ale();
