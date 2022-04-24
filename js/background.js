const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const seletedImage = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");
background.src = `images/backgrounds/${seletedImage}`;
background.classList.add("background");

document.body.prepend(background);
