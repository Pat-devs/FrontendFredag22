
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
// TODO: make the function be able to print a custom text, not just "hei"
function addText(text) {
    // textContainer = textContainer.textContent + "<h1>" + text
    textContainer.innerHTML += "<p> " + text + "</p>"
}

addText("God morgen")
addText("God ettermiddag")
addText("God ettermiddag")
addText("God ettermiddag")



// Grab the input element: <input type="text" id="text-input"> 
let inputElement = document.getElementById("text-input")
// input fields do not have a textContent property, instead they use .value
inputElement.value = "test"