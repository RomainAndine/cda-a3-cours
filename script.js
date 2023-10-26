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