'use strict';

document.addEventListener('DMContentLoaded', function () {
    console.log('Content Loaded');
    const myList = document.querySelector('#myList');


    generateList.addEventListener('click', function () {
        const inputItems = document.querySelector('input');
        const listElement = document.createElement('ul');

        inputItems.forEach(function (inputItem) {
            const listItem = document.createElement('li');
            listItem.innerText = inputItem.value;
            listElements.append(listItem);
        });

    });
});
