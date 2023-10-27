var btn = document.getElementById("submit");
btn.addEventListener("click", ajoutText);

function ajoutText() {
    const comments = document.getElementById("comments");
    const newComment = document.getElementById("newComment");
    // comments.innerHTML += "<p>" + newComment.value + "</p>";
    const p = document.createElement("p");
    p.innerHTML = newComment.value;
    comments.appendChild(p);
    newComment.value = "";
}

// var somme = function (a=0, b=0) {
//     return a + b;
// }
// console.log(somme());
// console.log(somme(1));
// console.log(somme(1, 2));

var somme = (a=0, b=0) => a + b;