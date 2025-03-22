
const body = document.querySelector("body");
const table = document.createElement("table");

body.appendChild(table);

body.style.padding = "10px";
body.style.width = "100vw";
body.style.height = "100vh";
body.style.border = "2px dashed fuchsia";

for (let i = 0; i < 2; i++) {
  const row = document.createElement('tr');
  table.appendChild(row);
  row.style.border = "2px solid green";

  for (let j = 0; j < 2; j++) {
    const cell = document.createElement('td')
    row.appendChild(cell);
    cell.style.border = "1px dashed blue";
  }
}



/*** Code Works ***/
// for (let i = 0; i < 2; i++) {
//   const row = document.createElement('tr');
//   table.appendChild(row);
//   row.style.border = "2px solid green";
// }

//  for (let j = 0; j < 2; j++) {
//   const cell = document.createElement('td');
//   row.appendChild(cell);
//   cell.style.border = "1px dashed blue";
// }
