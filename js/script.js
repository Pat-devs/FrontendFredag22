
// Data variables
let todolist = [] // create an empty array to store our todos

// localstorage key
let localStorageKey = "todolist"


// add item to an array
// todolist.push("ny ting")
// todolist.push(1234)

// remove an item from an array
// todolist.splice()

// reset (clear) an array
// todolist = []


//console.log(todolist)



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
    
    // create html element for the todoitem:
    let paragraphElement = document.createElement("p")
    paragraphElement.textContent = text
    paragraphElement.addEventListener("click", removeElement)
    
    textContainer.append(paragraphElement)
    
    // clean up the input field
    inputElement.value = ""
 
    // single todolist item object:
    let todoItem = {
        task: text
    }

    // add the item to the todolist array
    todolist.push(todoItem)

    // update localStorage:
    // 1. convert the javascript array to JSON
    let todoListJSON = JSON.stringify(todolist)
    // 2. store the JSON representation in local storage
    localStorage.setItem(localStorageKey, todoListJSON)

    console.log(todolist)
}

// remove element based on given event-argument 
function removeElement(eventInfo) {
    eventInfo.target.remove() // remove the element
}


// on page load 
// 1. read todolist from localStorage
// 2. convert it from JSON to javascript (update the array variable as well)
// 3. display each item on the page


let todoData = localStorage.getItem(localStorageKey)
// || symbol means "or"; in other words: if  JSON.parse(todoData) is empty it will then try the value following the || symbol (in this case an empty array)
todolist = JSON.parse(todoData) || [] 


// create todo elements on the page based on todolist from localstorage


// creates todo element with click event attached to it.
// takes a text as argument, and appends it to textContainer
function createTodoElement(text) {

    console.log(text)
    // create html element for the todoitem:
    let paragraphElement = document.createElement("p")
    paragraphElement.textContent = text
    paragraphElement.addEventListener("click", removeElement)

    textContainer.append(paragraphElement)
}

let cities = ["Oslo", "Bergen", "Trondheim", "Porsgrunn", "Skien", "Haugesund"]

// createTodoElement(cities[0])
// createTodoElement(cities[1])
// createTodoElement(cities[2])
// createTodoElement(cities[3])
// createTodoElement(cities[4])
// createTodoElement(cities[5])
// createTodoElement(cities[6])
// call createElement with data from the array
// createTodoElement(todolist[0].task)
// createTodoElement(todolist[1].task)
// createTodoElement(todolist[2].task) // this one fails here because i have less than 3 items

// Loops

// needs a counter (to stop, or break the loop)

// for loop 

// loop 5 times
for (
        let counter = 0; // create a counter variable and initilize it at 0
        counter < 5; // condition 
        counter = counter + 1 // increcrement 
    ) {
    
        // code that runs whole loop condition is "truthy"
        // console.log("Counter is now ", counter)
}


// count from 10 to 0 (inclusive)
for (let counter = 10; counter >= 0; counter = counter - 1) {
    // console.log("counter is now ", counter)
}

// While loops:

// count 0 to 5 (inclusive)

let counter = 0;

while (counter <= 5) {
    // console.log("counter is now ", counter)

    // adjust counter:
    counter = counter + 1
}


// while loop practical example

let enemies = ["grognak", "cat", "crocodile", "snake"]

// check length of an array?

// enemies.pop()
// console.log(enemies.length)


while(enemies.length > 0) {

    // kill an enemy
    let currentEnemy = enemies.pop()
    console.log("Omg you killed ", currentEnemy)
}

console.log(enemies)

