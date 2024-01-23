/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcusa();
  document.querySelector("#excuse-image").src = getRandomImage();

  console.log("Hello Rigo from the console!");
};

let generateExcusa = () => {
  let pronombre = ["A", "El"];
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let proIndex = Math.floor(Math.random() * pronombre.length);
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    pronombre[proIndex] +
    " " +
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};

let getRandomImage = () => {
  let images = [
    "src/assets/img/img1.jpg",
    "src/assets/img/img2.png",
    "src/assets/img/img3.jpg",
    "src/assets/img/img4.png",
    "src/assets/img/img5.png",
    "src/assets/img/img6.jpg",
    "src/assets/img/img7.jpg",
    "src/assets/img/img8.jpg"
  ];

  let randomImageIndex = Math.floor(Math.random() * images.length);
  return images[randomImageIndex];
};
