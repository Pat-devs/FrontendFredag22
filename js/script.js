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

    textContainer.innerHTML += "<p> " + text + "</p>"
}

// find the paragraph with id "item-1"
let firstParagraphElement = document.getElementById("item-1")

//paragraphElement.remove()

firstParagraphElement.addEventListener("click", removeElement)

// removes any given element from the page
function removeElement(eventInfo) {
    eventInfo.target.remove()
}