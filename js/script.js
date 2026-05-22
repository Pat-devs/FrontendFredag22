// Dom elements:
let inputElement = document.getElementById("text-input")
let buttonElementAdd = document.getElementById("add-text")
let textContainer = document.getElementById("text-container")

// event & event handler functions
buttonElementAdd.addEventListener("click", addText)

// add text function reads value from the input field and then adds it to the div container
function addText() {
 
    let text = inputElement.value // get the text from the input element

    // textContainer = textContainer.textContent + "<h1>" + text
    textContainer.innerHTML += "<p> " + text + "</p>"
}