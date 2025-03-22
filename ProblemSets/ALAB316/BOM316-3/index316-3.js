
const body = document.querySelector("body");

/************* Elements Created ****************/
const container = document.createElement("div");
const header = document.createElement("header");
const title = document.createElement("p");
const instruct = document.createElement("p");
const main = document.createElement("main");
const table = document.createElement("table");

/******* Append Elements *********/
document.body.appendChild(container);
container.appendChild(header);
header.appendChild(title);
header.appendChild(instruct);
container.appendChild(main);
main.appendChild(table);

/*** Append Table Rows, Cells, & Pic Frames ***/
for (let i = 0; i < 2; i++) {
  const row = document.createElement('tr');
  table.appendChild(row);
  row.classList.add("rows");
  // row.style.border = "2px solid green";

  for (let j = 0; j < 2; j++) {
    const cell = document.createElement('td');
    row.appendChild(cell);
    cell.classList.add("cells");

 /*** Append Image Container in Cells ***/
    // for (let k = 0; k < 1; k++) {
    //   const img= document.createElement('img');
    //   cell.appendChild(img);
    //   img.classList.add("pics");
    //   img.setAttribute("id", `pic${k}`);
    // pic.id = `pic ${k}`;

      // cell.style.width = "auto";
      // cell.style.height = "auto";
      // cell.style.textAlign = "center"
      // cell.style.border = "1px dashed blue";
    // }
  }
}

/** For-Loop Knowledge Inspiration:  Andrew Waterman **
 * 
 * Courtesy of screenshot taken on 3/10/2025
 * of coursework example Andrew Waterman
 * shared with class on zoom. ** See in images: "codeAndrew" ***
 * 
 ***/

/********* Adding Id to Elements *********/
container.id = "container";
title.id = "title";
instruct.id = "instruct";
main.id = "main"
table.id = "table";

/*** This Works ***/
table.firstChild.id= "row0";
table.lastChild.id = "row1";

/*** This Doesn't Work ***/
row0.firstChild.id = "frameA";
row0.lastChild.id = "frameB";
row1.firstChild.id = "signA";
row1.lastChild.id = "signB";

const frameA = document.querySelector('frameA');
// const imgA = frameA.appendChild(document.createElement('img'));


/************* Random Number Generator Photo ***********/
let boxA = Math.floor(Math.random() * 51);
console.log(boxA);
let boxB;

if (boxA <= 25) {
  boxB = Math.floor(Math.random() * (51 - 27 + 1) + 26);
} else {
  boxB = Math.floor(Math.random() * (26 - 0 + 1) + 0);
}

// Random number tutorial from w3schools
console.log(boxA)
console.log(boxB);

let imageX =`"./images/${boxA}.png"`;
console.log(imageX);

let imageY = ./images/${boxB}.png;
console.log(imageY); 

let demo = document.getElementById('demo');
demo.setAttribute("src",
  "imageX");

/******** Style: Container Flex ********/
container.style.margin = "auto"
container.style.alignItems = "padding";
container.style.display = "flex"
container.style.flexFlow = "column wrap"
container.style.justifyContent = "center";
container.style.alignItems = "center";

/*********** Style: Game Title **********/
title.innerHTML = "<h1> AI <span> or </span> Nawh? </h1>"
title.style.textAlign = "center";
title.style.color = "#33333"
title.style.letterSpacing = "4px"

/*********** Style: Game Instructions **********/
instruct.textContent = 'Can You Tell Which Image Is AI-Generated?';
instruct.style.textAlign = "center";
instruct.style.fontFamily = 'times';
instruct.style.fontSize = '14px';
instruct.style.fontStyle = 'italic';
instruct.style.color = 'blue';

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