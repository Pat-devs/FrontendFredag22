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
    age: 46,
    greet() {
        console.log("Hi")
    }
}

let jsonTest = JSON.stringify(person) // JSON.stringify converts a javascript object to json

console.log(jsonTest)
console.log(jsonTest.name) // json is a string

// to use a json object, as a real object....

let backToObject = JSON.parse(jsonTest)

console.log(backToObject)

backToObject.age += 5

console.log(backToObject.age)


