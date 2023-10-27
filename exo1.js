// const changeFontWeihgt = () => {
//     var text = document.getElementById("text");
//     if (text.style.fontWeight == "bold") {
//         text.style.fontWeight = "normal";
//     } else {
//         text.style.fontWeight = "bold";
//     }

// }
// var btn1 = document.getElementById("btn1");
// btn1.addEventListener("click", changeFontWeihgt);

// const changeFontStyle = () => {
//     var text = document.getElementById("text");
//     if (text.style.fontStyle == "italic") {
//         text.style.fontStyle = "normal";
//     } else {
//         text.style.fontStyle = "italic";
//     }
// }
// var btn2 = document.getElementById("btn2");
// btn2.addEventListener("click", changeFontStyle);

// const changeFontUnderline = () => {
//     var text = document.getElementById("text");
//     if (text.style.textDecoration == "underline") {
//         text.style.textDecoration = "none";
//     } else {
//         text.style.textDecoration = "underline";
//     }
// }
// var btn3 = document.getElementById("btn3");
// btn3.addEventListener("click", changeFontUnderline);

// const cleanStyleText = () => {
//     var text = document.getElementById("text");
//     text.style.fontWeight = "normal";
//     text.style.fontStyle = "normal";
//     text.style.textDecoration = "none";
// }
// var btn4 = document.getElementById("btn4");
// btn4.addEventListener("click", cleanStyleText);

const toggleFontStyle = (style) => {
    var text = document.getElementById("text");
    switch (style) {
        case "bold":
            text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
            break;
        case "italic":
            text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
            break;
        case "underline":
            text.style.textDecoration = text.style.textDecoration === "underline" ? "none" : "underline";
            break;
        default:
            break;
    }
}

const cleanStyleText = () => {
    var text = document.getElementById("text");
    text.style.fontWeight = "normal";
    text.style.fontStyle = "normal";
    text.style.textDecoration = "none";
}

var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => toggleFontStyle("bold"));

var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => toggleFontStyle("italic"));

var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => toggleFontStyle("underline"));

var btn4 = document.getElementById("btn4");
btn4.addEventListener("click", cleanStyleText);