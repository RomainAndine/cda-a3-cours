function afficherMessage() {
    alert("Vous avez cliqué sur le bouton");
}

var intro = window.document.getElementById("intro");

// console.log(intro);
// console.log(intro.innerHTML);
// console.log(intro.textContent);

var rouges = document.getElementsByClassName("rouge");
// for (const rouge of rouges) {
//     console.log(rouge.innerHTML);
// }
var paragraphes = document.getElementsByTagName("p");
//  for (const paragraphe of paragraphes) {
//         console.log(paragraphe.innerHTML);
//     }
var notFirstParagraphes = document.querySelectorAll("p:not(:first-child)");
//  for (const paragraphe of notFirstParagraphes) {
//         console.log(paragraphe.innerHTML);
//     }
var notFirstParagraphe = document.querySelector("p:not(:first-child)");
// console.log(notFirstParagraphe.innerHTML);

var lien = document.querySelector("a");
// console.log(lien.getAttribute("href"));



var lien2 = document.querySelector("a");
function switchLink() {
    lien2.setAttribute("href", "https://www.franceinfo.fr");
    lien2.innerHTML = "consulter l'actualité";
}

var premierParagraphe = document.querySelector("p");
premierParagraphe.style.fontStyle = "italic";
// console.log(premierParagraphe.classList);
// console.log(premierParagraphe.className);
// var classes = premierParagraphe.classList;
// // classes.remove("rouge");
// // classes.add("bleu");
// // classes.replace("rouge", "bleu");
// // classes.toggle("rouge");
// // classes.toggle("bleu");
// console.log(classes.contains("rouge"));



function switchColor() {
    // var paragraphes = document.querySelectorAll("p");
    // for (const paragraphe of paragraphes) {
    //     paragraphe.classList.toggle("rouge");
    //     paragraphe.classList.toggle("bleu");
    // }

    var paragraphes = document.getElementsByTagName("p");
    for (const paragraphe of paragraphes) {
        if (paragraphe.classList.contains("rouge")) {
            paragraphe.classList.replace("rouge", "bleu");
        } else if (paragraphe.classList.contains("bleu")) {
            paragraphe.classList.replace("bleu", "rouge");
        }
    }
}