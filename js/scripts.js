'use strict';

// THIS IS THE BROKEN CODE

// document.addEventListener('DMContentLoaded', function () {
//     console.log('Content Loaded');
//     const myList = document.querySelector('#myList');


//     generateList.addEventListener('click', function () {
//         const inputItems = document.querySelector('input');
//         const listElement = document.createElement('ul');

//         inputItems.forEach(function (inputItem) {
//             const listItem = document.createElement('li');
//             listItem.innerText = inputItem.value;
//             listElements.append(listItem);
//         });

//     });
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// THIS IS THE FIXED CODE

document.addEventListener('DOMContentLoaded', function () {
    console.log('Content Loaded');
    const myList = document.querySelector('#myList');
    const generateList = document.querySelector('#generateList');


    generateList.addEventListener('click', function () {
        const inputItems = document.querySelectorAll('.input');
        const listElement = document.createElement('ul');
        console.log(inputItems);
        myList.append(listElement);
        
        inputItems.forEach(function (inputItems) {
            const listItem = document.createElement('li');
            listItem.innerText = inputItems.value;
            listElement.append(listItem);
        });
    });
});

// THIS IS MY OTHER WAY TO FIX THE CODE ~~~~~~~~~~~~~~~~~~~~~~~~~

// const generateListButton = document.querySelector('#generateList');
// const myList = document.querySelector('#myList');
// const inputs = document.querySelectorAll('.input')


// generateListButton.addEventListener('click', function () {
//     console.log('Content Loaded');
//     inputs.forEach(function (item) {
//         const listItem = document.createElement('ul');
//         listItem.innerText = item.value;
//         myList.append(listItem);
//         });
// })
  

