
// <button id="add-text">Click me!</button>
 
// Grab the button by id with js

let buttonElementAdd = document.getElementById("add-text")

console.log(buttonElementAdd)


// add a click based event listener to the button
// using the addEventListener method

// addEventListener needs 2 things:
// 1. Type of event (string)
// 2. A function to do something (function)

buttonElementAdd.addEventListener("click", addText)

// <div id="text-container"></div>

// Grab the text container element by its id and store it in a variable

let textContainer = document.getElementById("text-container")

// textContainer.textContent = "hei"

// function adds text to the div on the page:

function addText() {
    textContainer.textContent = "hei"
}
