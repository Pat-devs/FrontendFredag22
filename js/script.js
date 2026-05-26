// Dom elements:
let inputElement = document.getElementById("text-input")
let buttonElementAdd = document.getElementById("add-text")
let textContainer = document.getElementById("text-container")
//

// event & event handler functions
buttonElementAdd.addEventListener("click", addText)

// add text function reads value from the input field and then adds it to the div container
function addText() {
 
    let text = inputElement.value // get the text from the input element

    // textContainer.innerHTML += "<p> " + text + "</p>" // TODO: innerHTML causes events to be removed.

    // recreate the innerHTML line with createElement:

    // 1. Create an element in memory, and store it in a variable:
    let paragraphElement = document.createElement("p")

    console.log(paragraphElement)

}
