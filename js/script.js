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

// objekter kan ha flere ting, men key må være unik
// f.eks:
let person = {
    name: "Patryk",
    age: 46
}
let person2 = {
    name: "John",
    age: 2
}
// arrays

let colors = ["black", "white", "blue", "green", "green"]
// console.log(colors)

let luckyNumbers = [8532,1325,13,991,9,0]
// console.log(luckyNumbers)


// todoliste as array

let todolist = [
    person, 
    person2
]

console.log(todolist)
