const body = document.getElementsByTagName("body")[0];

// Configuration
// const imageFolder = './imagesFolder/';  // Path to your images folder
// const totalImages = 7;         // Total number of images (1.png to 10.png)
// const fileExtension = '.png';   // Image file extension

// Function to get a random image
// function getRandomImage() {
//   const randomNumber = Math.floor(Math.random() * totalImages) + 1;
//   return `"${imageFolder}${randomNumber}${fileExtension}"`;
// }
// console.log(getRandomImage());


imgElement.src = "./imagesFolder/5.png" /
  // // Function to display the random image
  function displayRandomImage() {
    const imgElement = document.getElementById('random-image');
    // imgElement.id = 'random-image';
    imgElement.src = "./imagesFolder/5.png" /*getRandomImage();*/
    imgElement.alt = 'Randomly selected image';

    // const container = document.getElementById('image-container');
    // container.innerHTML = '';
    // container.appendChild(imgElement);
    return imgElement.src;
  }
console.log(imgElement.src);

const element = document.getElementById("random-btn");
element.addEventListener("click", displayRandomImage);


// Initial display and button click handler
// button.addEventListener('click'() => {
//   document.getElementById('random-btn')
//   displayRandomImage();
// });




/********************************************************************/
/************************* UNTOUCHED CODE **************************/
/********************************************************************/
// const photoArray = ["bear.png, goat.png, dog.png, fox.png, rabbit.png, cat.png, bird.png"];

// // const imageBox = document.querySelector(#imageBox);
// // imageBox.innerHTML = imageBox.appendChild(imgElement);


// // Configuration
// const imageFolder = 'images/';  // Path to your images folder
// const totalImages = 10;         // Total number of images (1.png to 10.png)
// const fileExtension = '.png';   // Image file extension

// // Function to get a random image
// function getRandomImage() {
//   const randomNumber = Math.floor(Math.random() * totalImages) + 1;
//   return `${ imageFolder }${ randomNumber }${ fileExtension } `;
// }

// // Function to display the random image
// function displayRandomImage() {
//   const imgElement = document.getElementById('random-image') || document.createElement('img');
//   imgElement.id = 'random-image';
//   imgElement.src = getRandomImage();
//   imgElement.alt = 'Randomly selected image';

//   const container = document.getElementById('image-container');
//   container.innerHTML = '';
//   container.appendChild(imgElement);
// }

// // Initial display and button click handler
// window.addEventListener('DOMContentLoaded', () => {
//   displayRandomImage();
//   document.getElementById('random-btn').addEventListener('click', displayRandomImage);
// });