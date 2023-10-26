var images = ['bowser.png', "luigi.png", "mario.png", "peach.png", "toad.png","toadette.png", "yoshi.png"]
var intervalle

function start() {
    intervalle= setInterval(switchImage, 1000);
}

function stop() {
    clearInterval(intervalle);
}

function switchImage() {
    // var image = document.querySelector("img");
    // var random = Math.floor(Math.random() * 7);
    // image.setAttribute("src", "./images/" + images[random]);
    // image.setAttribute("alt", images[random].replace(".png", ""));

    var image = document.querySelector("img");
    var src = image.getAttribute("src");
    var position = images.indexOf(src.substring(src.lastIndexOf("/") + 1));
    position++;
    if (position == images.length) {
        position = 0;
    }
    image.setAttribute("src",`./images/${images[position]}`);
    image.alt = images[position].substring(0, images[position].indexOf("."));
}