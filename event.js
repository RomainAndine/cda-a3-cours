var text = document.querySelector("#texte");
text.addEventListener("keypress", (event) => {
  var value = event.key;
  if (value < "a" || value > "z") {
    event.preventDefault();
    alert("NON");
  }
});
