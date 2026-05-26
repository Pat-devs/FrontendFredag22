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

    // recreate the innerHTML line with createElement:

    // 1. Create an element in memory, and store it in a variable:
    let paragraphElement = document.createElement("p")
    // 2. change its text value
    paragraphElement.textContent = text
    // 3. add the element to the page
    textContainer.append(paragraphElement) // to add elements we must use .append (since we use createElement to create it)
    // 4. add a "click" event listener to the paragraphElement, so it can be removed
    paragraphElement.addEventListener("click", removeElement)

}

// remove element based on given event-argument 
function removeElement(eventInfo) {
    eventInfo.target.remove() // remove the element
}