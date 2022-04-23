const images = ["1.jpg", "2.jpg", "3.jpg"];
const body = document.querySelector("body");

const seletedImage = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");
background.src = `images/backgrounds/${seletedImage}`;

body.appendChild(background);
