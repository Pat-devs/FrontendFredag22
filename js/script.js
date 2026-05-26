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
    
    let paragraphElement = document.createElement("p")
    paragraphElement.textContent = text
    paragraphElement.addEventListener("click", removeElement)
    
    textContainer.append(paragraphElement)
    
    // clean up the input field
    inputElement.value = ""
}

// remove element based on given event-argument 
function removeElement(eventInfo) {
    eventInfo.target.remove() // remove the element
}

//////////////////////////////////////////////////////////////////////////////////////////////////

let personName = "Patryk"
let personAge = 46

// same but as an object:

let person = {
    name: "Patryk",
    age: 46
}

console.log(document)


// describe a table as an object

let workingTable = {
    color: "black",
    legs: 2,
    available: true,
}

// CSV - Comma separated values

// første rad: header-names
// alle andre rader: er da data
let tableAsCSV = `
    color, legs, available, 
    black, 2, true",
`












