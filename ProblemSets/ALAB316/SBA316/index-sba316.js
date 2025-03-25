/*****(************************/
/******* Rainikka Corprew *****/
/********* JAVASCRIPT *********/
/********** SBA 316  **********/
/******************************/

/******************************/
/****** DOM Manipulation ******/
/****** with JavaScript *******/
/******** 21-MAR-2025 *********/


/************ Window Prompt On-Load *************/
let prePrompt = prompt(
  "PRE-TEST: KNOWLEDGE SELF-CHECK: How confident are you in your knowledge of Box & Whisker Plots?  (On a scale with 1 being the least confident and 5 being the most confident)"
);

window.addEventListener("load", function () {
  prePrompt;
});
window.addEventListener("load", function () {
  document.querySelector("#task1Box");
  task1Box.style.display = "none";
  document.querySelector("#btn1Task");
  btn1Task.textContent = "Click for Task 1";
  btn1Task.style.fontFamily = "times";
  btn1Task.style.fontWeight = "bolder";
  btn1Task.style.fontStyle = "italic";
  document.querySelector("#task2Box");
  task2Box.style.display = "none";
  document.querySelector("#btn2Task");
  btn2Task.textContent = "Click for Task 2";
  btn2Task.style.fontFamily = "times";
  btn2Task.style.fontWeight = "bolder";
  btn2Task.style.fontStyle = "italic";
});
/**************** Body Dressing    ****************/
const body = document.querySelector("body");

/************* Create Containers ****************/
const main = document.createElement("main");
const fieldset = document.createElement("fieldset");
const header = document.createElement("header");
const details = document.createElement("details");
const descriptBox = document.createElement("section");
const btn1Task = document.createElement("button");
const task1Box = document.createElement("section");
const btn2Task = document.createElement("button");
const task2Box = document.createElement("section");
const footer = document.createElement("footer");

/******* Append Containers to Body *********/
document.body.appendChild(main);
main.appendChild(fieldset);
main.appendChild(header);
main.appendChild(details);
main.appendChild(descriptBox);
main.appendChild(btn1Task);
main.appendChild(task1Box);
main.appendChild(btn2Task);
main.appendChild(task2Box);
main.appendChild(footer);

/************* Create Elements ****************/
/** Fieldset - Form Elements **/
const legend = document.createElement("legend");
const form = document.createElement("form");
const nameBox = document.createElement("div");
const nameLabel = document.createElement("label");
const nameInput = document.createElement("input");
const emailBox = document.createElement("div");
const emailLabel = document.createElement("label");
const emailInput = document.createElement("input");
const dateBox = document.createElement("div");
const dateLabel = document.createElement("label");
const dateInput = document.createElement("input");
const submit = document.createElement("input");
/** Header Elements **/
const title = document.createElement("h1");
const thickLine = document.createElement("hr");
const subtitle = document.createElement("p");
/** Reference - Details Elements **/
const summary = document.createElement("summary");
const figure = document.createElement("figure");
const refImage = document.createElement("img");
const figcaption = document.createElement("figcaption");
/**Task Activity Elements **/
const taskTitle = document.createElement("h2");
const descript = document.createElement("p");
const graph = document.createElement("img");
/** Task 1 **/
const quest1 = document.createElement("p");
const tableBox = document.createElement("div");
const tableLeft = document.createElement("table");
const tableRight = document.createElement("table");
/** Task 2 **/
const quest2 = document.createElement("p");
const textArea = document.createElement("textarea");
/** Footer Elements ***/
const endNote = document.createElement("p");
const btnPrint = document.createElement("input");

/******* Form Attributes *********/
/** Name Input **/
nameLabel.for = "fullName";
nameLabel.name = "fullName";
nameLabel.class = "labels";
nameLabel.textContent = "Name";
nameInput.type = "text";
nameInput.name = "fullName";
nameInput.class = "inputs";
nameInput.placeholder = "Enter Your Full Name";
nameInput.pattern = "^[a-zA-Z]+";
nameInput.title =
  "Please type your full name with first name first and last name last.";
nameInput.required = "true";
nameInput.style.width = "325px";

/** Email Input **/
emailLabel.for = "email";
emailLabel.name = "email";
emailLabel.class = "labels";
emailLabel.textContent = "Email";
emailInput.type = "text";
emailInput.name = "email";
emailInput.class = "inputs";
emailInput.placeholder = "Enter Your Email";
emailInput.pattern = "^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$";
emailInput.title = "Please type your email address.";
emailInput.required = "true";
emailInput.style.width = "330px";

/** Date Input **/
dateLabel.for = "date";
dateLabel.name = "date";
dateLabel.class = "labels";
dateLabel.textContent = "Select Date";
dateInput.type = "date";
dateInput.name = "date";
dateInput.class = "inputs";
dateInput.placeholder = "Select Date";
dateInput.title = "Please type your email address.";
dateInput.required = "true";
dateLabel.style.alignItems = "end";

let postPrompt = prompt(
  "POST-TEST: KNOWLEDGE SELF-CHECK: How confident are you in your knowledge of Box & Whisker Plots?  (On a scale with 1 being the least confident and 5 being the most confident)"
);

submit.type = "submit";
submit.name = "submit";
submit.class = "inputs";
submit.value = "SUBMIT";
submit.onClick = "postPrompt";

/**** Form Box Styling ****/
nameBox.style.margin = "8px";
nameBox.style.display = "flex";
nameBox.style.justifyContent = "start";
emailBox.style.margin = "8px";
emailBox.style.display = "flex";
emailBox.style.justifyContent = "start";
dateBox.style.margin = "0 5px";
dateBox.style.display = "flex";
dateBox.style.justifyContent = "start";

/******* Append Sub-Elements to Main Elements *********/
/** Form Appends **/
fieldset.appendChild(legend);
fieldset.appendChild(form);
form.appendChild(nameBox);
form.appendChild(emailBox);
form.appendChild(dateBox);
nameBox.appendChild(nameLabel);
nameBox.appendChild(nameInput);
emailBox.appendChild(emailLabel);
emailBox.appendChild(emailInput);
dateBox.appendChild(dateLabel);
dateBox.appendChild(dateInput);
dateBox.appendChild(submit);
/** Header Appends **/
header.appendChild(title);
header.appendChild(thickLine);
header.appendChild(subtitle);
details.appendChild(summary);
details.appendChild(figure);
figure.appendChild(figcaption);
figcaption.insertAdjacentElement("beforeBegin", refImage);
/** Task Descript Appends **/
descriptBox.appendChild(taskTitle);
descriptBox.appendChild(descript);
descriptBox.appendChild(graph);
/** Task 1 Section Appends **/
task1Box.appendChild(quest1);
task1Box.appendChild(tableBox);
tableBox.appendChild(tableLeft);
tableBox.appendChild(tableRight);
/** Task 2 Section Appends **/
task2Box.appendChild(quest2);
task2Box.appendChild(textArea);
/** Footer Appends **/
footer.appendChild(endNote);
footer.appendChild(btnPrint);

/******* Answer Tables*********/
/*** Left Table Headers: Create, Append, & Style***/
tableBox.style.display = "flex";
tableBox.style.flexFlow = "row wrap";
/** Left Table: 1st Row **/
const tabRow1Left = document.createElement("tr");
tableLeft.appendChild(tabRow1Left);
tabRow1Left.id = "tabRow1Left";
tabRow1Left.appendChild(document.createElement("th")).id = "summaryByFive";
// numberFive.colspan = "5";
summaryByFive.textContent = "5-Number Summary";
summaryByFive.style.fontWeight = "bold";

tabRow1Left.appendChild(document.createElement("th")).id = "classLeft";
classLeft.setAttribute("colSpan", "3");
classLeft.textContent = "Classes";
classLeft.style.fontWeight = "bold";

/** Left Table: 2nd Row **/
const tabRow2Left = document.createElement("tr");
tableLeft.appendChild(tabRow2Left);
tabRow2Left.id = "tabRow2Left";

tabRow2Left.appendChild(document.createElement("th")).id = "class0Left";
class0Left.textContent = "Measures";
tabRow2Left.appendChild(document.createElement("th")).id = "class1Left";
class1Left.textContent = "X";
tabRow2Left.appendChild(document.createElement("th")).id = "class2Left";
class2Left.textContent = "Y";
tabRow2Left.appendChild(document.createElement("th")).id = "class3Left";
class3Left.textContent = " Z";
// tabRow2Left.appendChild(document.createElement('th')).id = 'class4Left';
// class4Left.textContent = 'Avg';

/*** Left Table: Worksheet Rows & Data Cells ***/
for (let i = 0; i < 5; i++) {
  const rowLeft = document.createElement("tr");
  tableLeft.appendChild(rowLeft);
  rowLeft.classList.add("rows");

  for (let j = 0; j < 4; j++) {
    const cellLeft = document.createElement("td");
    rowLeft.appendChild(cellLeft);
    cellLeft.classList.add("cells");

    for (let k = 0; k < 1; k++) {
      const numInput = document.createElement("input");
      numInput.setAttribute("type", "text");
      cellLeft.appendChild(numInput);
      numInput.style.width = "20px";
    }
  }
}
/** For-Loop Knowledge Inspiration:  Andrew Waterman **
 * 
 * Courtesy of screenshot taken on 3/10/2025
 * of coursework example Andrew Waterman
 * shared with class on zoom. ** See in images: "codeAndrew" ***
 * 
 ***/

/*** Right Table Headers: Create, Append, & Style***/
/** Right Table: 1st Row **/
const tabRow1Right = document.createElement("tr");
tableRight.appendChild(tabRow1Right);
tabRow1Right.id = "tabRow1Right";

tabRow1Right.appendChild(document.createElement("th")).id = "centralTend";
centralTend.textContent = "Central Tendency & Spread";
centralTend.style.fontWeight = "bold";

tabRow1Right.appendChild(document.createElement("th")).id = "classRight";
classRight.setAttribute("colSpan", "3");
classRight.textContent = "Classes";
classRight.style.fontWeight = "bold";

/** Right Table: 2nd Row **/
const tabRow2Right = document.createElement("tr");
tableRight.appendChild(tabRow2Right);
tabRow2Right.id = "tabRow2Right";
tabRow2Right.style.fontWeight = "normal";

tabRow2Right.appendChild(document.createElement("th")).id = "class0Right";
class0Right.textContent = "Measures";
tabRow2Right.appendChild(document.createElement("th")).id = "class1Right";
class1Right.textContent = "X";
tabRow2Right.appendChild(document.createElement("th")).id = "class2Right";
class2Right.textContent = "Y";
tabRow2Right.appendChild(document.createElement("th")).id = "class3Right";
class3Right.textContent = "Z";
// tabRow2Right.appendChild(document.createElement('th')).id = 'class4Right';
// class4Right.textContent = 'Avg';

/*** Right Table: Worksheet Rows & Data Cells ***/
for (let i = 0; i < 5; i++) {
  const rowRight = document.createElement("tr");
  tableRight.appendChild(rowRight);
  rowRight.classList.add("rows");

  for (let j = 0; j < 4; j++) {
    const cellRight = document.createElement("td");
    rowRight.appendChild(cellRight);
    cellRight.classList.add("cells");

    for (let k = 0; k < 1; k++) {
      const numInput = document.createElement("input");
      numInput.setAttribute("type", "text");
      cellRight.appendChild(numInput);
      numInput.style.width = "20px";
    }
  }
}

/******* Assign IDs to 1st Column *********/
const rowLeft = tableLeft.getElementsByTagName("tr");
for (let i = 0; i < 7; i++) {
  rowLeft[i].id = `rowLeft${i}`;
}

/******* Assign IDs to 1st Column *********/
const rowRight = tableRight.getElementsByTagName("tr");
for (let i = 0; i < 7; i++) {
  rowRight[i].id = `rowRight${i}`;
}

/** Left First Column Text Content **/
const row2L = (rowLeft[2].firstChild.id = "row2L");
document.getElementById(row2L).textContent = "Minimum";
const row3L = (rowLeft[3].firstChild.id = "row3L");
document.getElementById(row3L).textContent = "Quartile 1";
const row4L = (rowLeft[4].firstChild.id = "row4L");
document.getElementById(row4L).textContent = "QuartiLe 2";
const row5L = (rowLeft[5].firstChild.id = "row5L");
document.getElementById(row5L).textContent = "Quartile 3";
const row6L = (rowLeft[6].firstChild.id = "row6L");
document.getElementById(row6L).textContent = "Maximum";
/** Right First Column Text Content**/
const row2R = (rowRight[2].firstChild.id = "row2R");
document.getElementById(row2R).textContent = "Range";
const row3R = (rowRight[3].firstChild.id = "row3R");
document.getElementById(row3R).textContent = "Interquartile Range";
const row4R = (rowRight[4].firstChild.id = "row4R");
document.getElementById(row4R).textContent = "Mean";
const row5R = (rowRight[5].firstChild.id = "row5R");
document.getElementById(row5R).textContent = "Median";
const row6R = (rowRight[6].firstChild.id = "row6R");
document.getElementById(row6R).textContent = "Mode";

/******* Assign Element Ids *********/
main.id = "main";
fieldset.id = "fieldset";
header.id = "header";
details.id = "details";
footer.id = "footer";
form.id = "form";
legend.id = "legend";
nameBox.id = "nameBox";
emailBox.id = "emailBox";
dateBox.id = "dateBox";
nameLabel.id = "nameLabel";
nameInput.id = "nameInput";
emailLabel.id = "emailLabel";
emailInput.id = "emailInput";
dateLabel.id = "dateLabel";
dateInput.id = "dateInput";
submit.id = "submit";
title.id = "title";
thickLine.id = "thickLine";
subtitle.id = "subtitle";
summary.id = "summary";
figure.id = "figure";
refImage.id = "refImage";
figcaption.id = "figcaption";
descriptBox.id = "descriptBox";
descript.id = "descript";
taskTitle.id = "taskTitle";
graph.id = "graph";
task1Box.id = "task1Box";
btn1Task.id = "btn1Task";
quest1.id = "quest1";
tableBox.id = "tableBox";
tableLeft.id = "tableLeft";
tableRight.id = "tableRight";
task2Box.id = "task2Box";
btn2Task.id = "btnTask";
quest2.id = "quest2";
textArea.id = "textArea";
endNote.id = "endNote";
btnPrint.id = "btnPrint";

/******* Image Sources  *********/
document.getElementById("refImage");
refImage.src = "./images/refImage.png";
refImage.style.width = "400px";
refImage.style.height = "150px";
refImage.style.border = "1.5px solid skyBlue";
refImage.style.margin = "5px auto";

document.getElementById("graph");
graph.setAttribute("src", "./images/graphImage.png");
graph.style.width = "450px";
graph.style.height = "250px";
graph.style.border = "1.5px solid lightGray";
graph.style.margin = "5px auto";
// 'img'.classList.add("images");

/********* Task Buttons **********/
/** Task 1 Button **/
btn1Task.setAttribute("onClick", "task1HideSeek()");
function task1HideSeek() {
  document.getElementById("task1Box");
  if (task1Box.style.display === "none") {
    task1Box.style.display = "block";
    btn1Task.textContent = "Task 1";
    btn1Task.style.fontFamily = "Roboto";
    btn1Task.style.fontStyle = "bold";
  } else {
    task1Box.style.display = "none";
    btn1Task.textContent = "Click for Task 1";
    btn1Task.style.fontFamily = "times";
    btn1Task.style.fontWeight = "bolder";
    btn1Task.style.fontStyle = "italic";
  }
}
/** Task 1 Button **/
btn2Task.setAttribute("onClick", "task2HideSeek()");
function task2HideSeek() {
  document.getElementById("task2Box");
  if (task2Box.style.display === "none") {
    task2Box.style.display = "block";
    btn2Task.textContent = "Task 2";
    btn2Task.style.fontFamily = "Roboto";
    btn2Task.style.fontStyle = "bold";
  } else {
    task2Box.style.display = "none";
    btn2Task.textContent = "Click for Task 2";
    btn2Task.style.fontFamily = "times";
    btn2Task.style.fontWeight = "bolder";
    btn2Task.style.fontStyle = "italic";
  }
}

document.getElementById(btnPrint);
btnPrint.setAttribute("type", "button");
btnPrint.setAttribute("value", "Print Page");
btnPrint.setAttribute("onClick", "window.Print()");
btnPrint.setAttribute(
  "onClick",
  'window.location.assign("https://perscholas.com")'
);

/******* Text Content *********/
legend.innerHTML = `<i>Fill In Your Information</i>`;
title.innerHTML = "Box <span>&</span> Whisker Plots";
subtitle.textContent =
  "Box & Whisker Plots are a Graphical Representation of the Five-Number Summary.";
summary.textContent = "Review: Five-Number Summary";
summary.style.color = "steelblue";
summary.style.textAlign = "center";
figcaption.textContent = "5-Number Summary As Box Plot";
figcaption.style.fontSize = "10px";

taskTitle.textContent = "Task Activity";
taskTitle.style.color = "steelblue";

descript.textContent =
  "The three classes -- X, Y, & Z -- are all Psychology 101 classes taught by different teachers at the same school. The three box and whisker plots below represent the distribution of grades earned for each class of 30 students.";

quest1.textContent =
  "Based on the box plots, fill in the table with the requested information for each of the three classes.";
quest1.style.textAlign = "left";

quest2.textContent =
  "Based on three box and whisker plots above, explain which class provides the highest probability of receiving a high grade. Be Mindful: In your explanation, cite for each class a measure of center and a measure of spread and two class number grades that are most relevant to your answer.";
quest2.style.textAlign = "left";

endNote.textContent =
  "Before submitting your assignment for grading,bBe sure to check your work and print a copy for your records.";
