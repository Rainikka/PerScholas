/*****************************/
/******* Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/********* BOM 316.2 **********/
/******************************/

/******************************/
/****** BOM Manipulation ******/
/****** with JavaScript *******/
/******** 27-MAR-2025 *********/


/************ Body Dressing *************/
const body = document.querySelector("body");

/************* Elements Created ****************/
const main = document.createElement("main");
const header = document.createElement("header");
const title = document.createElement("h1");
const subtitle = document.createElement("h1");
const answer = document.createElement("h1");
const playSection = document.createElement("section");
const response = document.createElement("h1");
const table = document.createElement("table");
const buttonBox = document.createElement("div");
const button2Play = document.createElement("button");
const button2Reset = document.createElement("button");


/******* Append Elements *********/
document.body.appendChild(main);
main.appendChild(header);
header.appendChild(title);
header.appendChild(subtitle);
main.appendChild(playSection);
playSection.appendChild(response);
playSection.appendChild(table);
playSection.appendChild(buttonBox);
buttonBox.appendChild(button2Play);
buttonBox.appendChild(button2Reset);

/********* Adding Id to Elements *********/
main.id = "main";
header.id = "header";
title.id = "title";
subtitle.id = "subtitle";
playSection.id = "playSection";
response.id = "response";
table.id = "table";
buttonBox.id = 'buttonBox';
button2Play.id = 'button2Play';
button2Reset.id = 'button2Reset';

/*** Append to Table Row 0, Header, & Image Frames, ***/
for (let i = 0; i < 1; i++) {
  const headerRow = document.createElement("tr");
  table.appendChild(headerRow);
  headerRow.classList.add("rows");

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
const frameA = document.getElementById(row0).firstChild.id = 'frameA';
const frameB = document.getElementById(row0).lastChild.id = 'frameB';
/*** Cell Ids ***/
const cellA = document.getElementById(row1).firstChild;
cellA.id = "cellA";
document.querySelector('cellA');
cellA.textContent = "A";
const cellB = document.getElementById(row1).lastChild;
cellB.id = "cellB";
document.querySelector('cellB');
cellB.textContent = "B";


/****************** RANDOMIZATION ********************/
/************** Pic List Array ****************/
const picList = ['./pics/0.png', './pics/1.png', './pics/2.png', './pics/3.png', './pics/4.png', './pics/5.png', './pics/6.png', './pics/7.png', './pics/8.png', './pics/9.png', './pics/10.png', './pics/11.png', './pics/12.png', './pics/13.png', './pics/14.png', './pics/15.png', './pics/16.png', './pics/17.png', './pics/18.png', './pics/19.png', './pics/20.png', './pics/21.png', './pics/22.png', './pics/23.png', './pics/24.png', './pics/25.png', './pics/26.png', './pics/27.png', './pics/28.png', './pics/29.png', './pics/30.png', './pics/31.png', './pics/32.png', './pics/33.png', './pics/34.png', './pics/35.png', './pics/36.png', './pics/37.png', './pics/38.png', './pics/39.png', './pics/40.png', './pics/41.png', './pics/42.png', './pics/43.png', './pics/44.png', './pics/45.png', './pics/46.png', './pics/47.png', './pics/48.png', './pics/49.png', './pics/50.png'];

/**** Knowledge Inspiration: W3Schools: Random Number Generator ****/
/*** Frame Randomization ***/
function randomRandom() {
  const totalChoices = 2;
  const numRandom = Math.floor((Math.random() * totalChoices) + 1);
  return numRandom;
}
/*** Set Minimum & Maximum ***/
let minA;
let maxA;
let minB;
let maxB;

if (randomRandom() % 2) {
  function imageARandom() {
    minA = 0;
    maxA = 24;
    const numARandom = Math.floor(Math.random() * (maxA - minA + 1)) + minA;
    return numARandom;
  }
  function imageBRandom() {
    minB = 25;
    maxB = 50;
    const numBRandom = Math.floor(Math.random() * (maxB - minB + 1)) + minB;
    return numBRandom;
  }
} else {
  function imageARandom() {
    minA = 25;
    maxA = 50;
    const numARandom = Math.floor(Math.random() * (maxA - minA + 1)) + minA;
    return numARandom;
  }
  function imageBRandom() {
    minB = 0;
    maxB = 24;
    const numBRandom = Math.floor(Math.random() * (maxB - minB + 1)) + minB;
    return numBRandom;
  }
}

/************* Set Image Attributes ***********/
const imageA = document.getElementById(frameA).firstChild;
imageA.id = 'imageA';
const picA = picList.splice(imageARandom(), 1);
picA.id = 'picA';
imageA.setAttribute('src', picA);

/*** Image IDs & Attributes ***/
const imageB = document.getElementById(frameB).firstChild;
imageB.id = 'imageB';
const picB = picList.splice(imageBRandom(), 1);
picB.id = 'rightPic';
imageB.setAttribute('src', picB);


document.getElementById('button2Reset').addEventListener('click', function () {
  location.reload();// Knowledge Inspiration : FreeCodeCamp
});


/******************************************************/
/*********** Prompt Element ************/
/*********** User Prompt ************/

console.log("picA:", picA, typeof picA, "picB:", picB, typeof picB);

function responseAI() {
  let userInput = prompt("Which Person Is REAL: A or B ?");

  /*********** Prompt Responses ************/
  if ((userInput === "A" || userInput === "a") && imageARandom() < 26) {
    document.getElementById('response').innerHTML =
      "<em>YOWZAH!</em><br>You Are Smarter Than AI";
    document.getElementById('response').style.color = "green";
    document.getElementById('frameA').style.border = "5px solid seaGreen";
    document.getElementById('cellA').style.background = "seaGreen";
    document.getElementById('cellA').style.border = "5px solid seaGreen";
    document.getElementById('cellA').textContent = "I Am Real";
    document.getElementById('cellA').style.color = "white";

  } else if ((userInput === "A" || userInput === "a") && imageARandom() >= 26) {
    document.getElementById('response').innerHTML =
      "<em>BAMBOOZLED BY AI!</em><br>You Are <u>Not</u> Smarter Than AI";
    document.getElementById('response').style.color = "crimson";
    document.getElementById('frameA').style.border = "5px solid crimson";
    document.getElementById('cellA').style.background = "crimson";
    document.getElementById('cellA').style.border = "5px solid crimson";
    document.getElementById('cellA').textContent = "I Am AI";
    document.getElementById('cellA').style.color = "white";

  } else if ((userInput === "B" || userInput === "b") && imageBRandom() < 26) {
    document.getElementById('response').innerHTML =
      "<em>YOUWZA!</em><br>You Are Smarter Than AI";
    document.getElementById('response').style.color = "green";
    document.getElementById('frameB').style.border = "5px solid seaGreen";
    document.getElementById('cellB').style.background = "seaGreen";
    document.getElementById('cellB').style.border = "5px solid seaGreen";
    document.getElementById('cellB').textContent = "I Am Real";
    document.getElementById('cellB').style.color = "white";

  } else if ((userInput === "B" || userInput === "b") && imageBRandom() >= 26) {
    document.getElementById('response').innerHTML =
      "<em>BAMBOOZLED BY AI!</em><br>You Are <u>Not</u> Smarter Than AI";
    document.getElementById('response').style.color = "crimson";
    document.getElementById('frameB').style.border = "5px solid crimson";
    document.getElementById('cellB').style.background = "crimson";
    document.getElementById('cellB').style.border = "5px solid crimson";
    document.getElementById('cellB').textContent = "I Am AI";
    document.getElementById('cellB').style.color = "white";

  } else if ((userInput === "A" || userInput === "a") && picA <= 25) {
    document.getElementById('response').innerHTML =
      "<em>YOWZAH!</em><br>You Are Smarter Than AI";
    document.getElementById('response').style.color = "green";
    document.getElementById('frameA').style.border = "5px solid seaGreen";
    document.getElementById('cellA').style.background = "seaGreen";
    document.getElementById('cellA').style.border = "5px solid seaGreen";
    document.getElementById('cellA').textContent = "I Am Real";
    document.getElementById('cellA').style.color = "white";

  } else if ((userInput === "A" || userInput === "a") && picA >= 26) {
    document.getElementById('response').innerHTML =
      "<em>BAMBOOZLED BY AI!</em><br>You Are <u>Not</u> Smarter Than AI";
    document.getElementById('response').style.color = "crimson";
    document.getElementById('frameA').style.border = "5px solid crimson";
    document.getElementById('cellA').style.background = "crimson";
    document.getElementById('cellA').style.border = "5px solid crimson";
    document.getElementById('cellA').textContent = "I Am AI";
    document.getElementById('cellA').style.color = "white";

  } else {
    document.getElementById('response').innerHTML =
      "<em>OOPS! Something Is Amiss -- Retry.</em>";
  }
}
button2Play.addEventListener('click', responseAI);


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
subtitle.textContent = "Can You Tell Who Is Real and Who Is AI-Generated?";
subtitle.style.textAlign = "center";
subtitle.style.fontSize = "16px";
subtitle.style.fontWeight = "normal";
subtitle.style.color = "blue";

/*********** Style: Button2Play **********/
button2Play.innerHTML = "<em> Try Your Luck</em>";
button2Play.style.marginTop = "10px";
button2Play.style.width = "0 28px";
button2Play.style.padding = "12px 28px";
button2Play.style.backgroundColor = "steelBlue";
button2Play.style.color = "white";
button2Play.style.fontSize = "16px";
button2Play.style.fontWeight = "bolder";
button2Play.style.border = "2px solid azure";
button2Play.style.borderRadius = "6px";
button2Play.style.cursor = "pointer";

/*********** Style: Button2Reset**********/
button2Reset.innerHTML = "<em> Reset</em>";
button2Reset.style.marginTop = "10px";
button2Reset.style.width = "0 20px";
button2Reset.style.padding = "12px 18px";
button2Reset.style.backgroundColor = "gray";
button2Reset.style.color = "white";
button2Reset.style.fontSize = "16px";
button2Reset.style.fontWeight = "bolder";
button2Reset.style.border = "2px solid azure";
button2Reset.style.borderRadius = "6px";
button2Reset.style.cursor = "pointer";

/*********** Style: Cells **********/
// cells.style.width = "auto";
// cells.style.height = "auto";
// cells.style.textAlign = "center"
// cells.style.fontSize = "32px";
// cells.style.color = "#333333";







