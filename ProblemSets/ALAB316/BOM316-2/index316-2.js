/*****(************************/
/******* Rainikka Corprew *****/
/********* JAVASCRIPT *********/
/********* BOM 316.1 **********/
/******************************/

/******************************/
/****** BOM Manipulation ******/
/****** with JavaScript *******/
/******** 24-MAR-2025 *********/


/************ Body Dressing *************/
const body = document.querySelector("body");

/************* Elements Created ****************/
const main = document.createElement("main");
const header = document.createElement("header");
const title = document.createElement("h1");
const subtitle = document.createElement("h1");
const playSection = document.createElement("section");
const table = document.createElement("table");

/******* Append Elements *********/
document.body.appendChild(main);
main.appendChild(header);
header.appendChild(title);
header.appendChild(subtitle);
main.appendChild(playSection);
playSection.appendChild(table);

/********* Adding Id to Elements *********/
main.id = "main";
header.id = "header";
title.id = "title";
subtitle.id = "subtitle";
playSection.id = "playSection";
table.id = "table";

/*** Append to Table Row 0, Header, & Image Frames, ***/
for (let i = 0; i < 1; i++) {
  const headerRow = document.createElement("tr");
  table.appendChild(headerRow);
  headerRow.classList.add("rows");
  headerRow.style.border = "2px solid green";

  for (let j = 0; j < 2; j++) {
    const frame = document.createElement("th");
    headerRow.appendChild(frame);
    frame.classList.add("frames");

    for (let k = 0; k < 1; k++) {
      const image = document.createElement("img");
      frame.appendChild(image);
      image.classList.add("images");
    }
  }
}
/*** Append to Table Row 1, Header & Cells ***/
for (let l = 0; l < 1; l++) {
  const row = document.createElement("tr");
  table.appendChild(row);
  row.classList.add("rows");
  row.style.border = "2px solid purple";

  for (let m = 0; m < 2; m++) {
    const cell = document.createElement("td");
    row.appendChild(cell);
    cell.classList.add("cells");
  }
}

/******* Assign IDs to Game Elements *********/
/*** Row Ids ***/
const row0 = table.firstChild.id = "row0";
const row1 = table.lastChild.id = "row1";
/*** Frame Ids ***/
const frameA = document.getElementById(row0).firstChild.id = "frameA";
const frameB = document.getElementById(row0).lastChild.id = "frameB";
/*** Cell Ids ***/
const cellA = document.getElementById(row1).firstChild.id = "cellA";
document.getElementById(cellA).textContent = "A"
const cellB = document.getElementById(row1).lastChild.id = "cellB";
document.getElementById(cellB).textContent = "B"
/*** Image Ids ***/
let imageA = document.getElementById(frameA).firstChild.id = "imageA";
let imageB = document.getElementById(frameB).firstChild.id = "imageB";

/****************** TESTING *******************/
/********** Set Image Attributes ***********/
// let imgA = document.createElement('img');
// imgA.id = 'imgA';
// document.getElementById(frameA).appendChild('imgA');


// imgA = "./images/2.png";
// main.appendChild(playSection);

// document.getElementById('imageA').setAttribute("src", "./images/*.png");

// document.getElementById(imageA).src = "imgA";

var array = ["dog.jpg", "fox.jpg", "mouse.jpg", "alligator.jpg", "fish.jpg", "parrot.jpg", "cat.jpg"];

function displayImage() {
  var num = Math.floor(Math.random() * array.length + 1);
  document.canvas.src = 'images/array[num]';
}


/****************** THIS WORKS *******************/
// document.getElementById('imageA').setAttribute("src", "./images/2.png");
// document.getElementById('imageB').setAttribute("src", "./images/4.png");

/****************** THIS WORKS TOO *******************/
document.getElementById(imageA).src = "./images/4.png";
document.getElementById(imageB).src = "./images/5.png";


/************* Random Number Generator Photo ***********/
// let boxA = Math.floor(Math.random() * 51);
// console.log(boxA);
// let boxB;

// if (boxA <= 25) {
//   boxB = Math.floor(Math.random() * (51 - 27 + 1) + 26);
// } else {
//   boxB = Math.floor(Math.random() * (26 - 0 + 1) + 0);
// }

// Random number tutorial from w3schools
// console.log(boxA);
// console.log(boxB);

// let imageX = `"./images/${boxA}.png"`;
// console.log(imageX);

// let imageY = `./ images / ${ boxB }.png;
// console.log(imageY)`;

// let demo = document.getElementById("demo");
// demo.setAttribute("src", "imageX");

/*********** Heading Element ************/
/*
let userInput = prompt("Which Photo Is REAL?", "A or B");
 
let A =
 
if (userInput < 26) {
  gameOutput = "CORRECT -- YOU ARE SMARTER THAN AI!"
 frameA =  style.border
}
*/

/*********** User Prompt ************/
// function myFunction() {
//   let person = prompt("Please enter your selection", "A or Br");
//   if (person != null) {
//     document.getElementById("demo").innerHTML =
//     "Hello " + person + "! How are you today?";
//   }
// }

/******** Style: Container Flex ********/
main.style.margin = "auto";
main.style.alignItems = "padding";
main.style.display = "flex";
main.style.flexFlow = "column wrap";
main.style.justifyContent = "center";
main.style.alignItems = "center";

/*********** Style: Game Title **********/
title.innerHTML = "<h1> AI <span> or </span> Nawh? </h1>";
title.style.textAlign = "center";
title.style.color = "#33333";
title.style.letterSpacing = "4px";

/******** Style: Game Subtitle  ********/
subtitle.textContent = "Can You Tell Which Image Is AI-Generated & Which Is Real";
subtitle.style.textAlign = "center";
subtitle.style.fontSize = "16px";
// subtitle.style.fontStyle = "italic";
subtitle.style.fontWeight = "normal";
subtitle.style.color = "blue";

/*********** Style: Cells **********/
// cells.style.width = "auto";
// cells.style.height = "auto";
// cells.style.textAlign = "center"
// cells.style.fontSize = "20px";
// cells.style.border = "1px dashed blue";

/** For-Loop Knowledge Inspiration:  Andrew Waterman **
 * 
 * Courtesy of screenshot taken on 3/10/2025
 * of coursework example Andrew Waterman
 * shared with class on zoom. ** See in images: "codeAndrew" ***
 * 
 ***/
