
// Data variables
let todolist = [] // create an empty array to store our todos

// add item to an array
// todolist.push("ny ting")
// todolist.push(1234)

// remove an item from an array
// todolist.splice()

// reset (clear) an array
// todolist = []


console.log(todolist)



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

    // add the item to the todolist array
    todolist.push(text)

    // update localStorage:
    localStorage.setItem("todolist", todolist)

    console.log(todolist)
}

// remove element based on given event-argument 
function removeElement(eventInfo) {
    eventInfo.target.remove() // remove the element
}

// objekter kan ha flere ting, men key må være unik
// f.eks:

// single todolist item object:
let todoItem = {
    task: ""
}



//console.log(todolist)
