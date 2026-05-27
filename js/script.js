// Data variables
let todolist = [] // create an empty array to store our todos

// localstorage key
let localStorageKey = "todolist"

// Dom elements:
let inputElement = document.getElementById("text-input")
let buttonElementAdd = document.getElementById("add-text")
let textContainer = document.getElementById("text-container")

// event & event handler functions
buttonElementAdd.addEventListener("click", addTodo)


function addTodo() {
    let text = inputElement.value // get the text from the input element
    
    createTodoElement(text)
    
    // clean up the input field
    inputElement.value = ""
 
    createTodoObject(text) // call createTodo function with text as argument
    updateLocalStorage() // kjør updateLocalStorage

    console.log(todolist)
}

// creates single todoitem element
function createTodoElement(text) {
    // create html element for the todoitem:
    let paragraphElement = document.createElement("p")
    paragraphElement.textContent = text
    paragraphElement.addEventListener("click", removeElement)
    
    textContainer.append(paragraphElement)
}

// createTodoObject (in javascript array)
function createTodoObject(text) {
    // single todolist item object:
    let todoItem = {
        task: text
    }

    // add the item to the todolist array
    todolist.push(todoItem)
}

// update local storage
function updateLocalStorage() {
    // update localStorage:
    // 1. convert the javascript array to JSON
    let todoListJSON = JSON.stringify(todolist)
    // 2. store the JSON representation in local storage
    localStorage.setItem(localStorageKey, todoListJSON)
}


// remove element based on given event-argument 
function removeElement(eventInfo) {
    eventInfo.target.remove() // remove the element

    // update local storage (remove the item)

    // 1. Find the clicked item in the todolist array
    let taskName = eventInfo.target.textContent; // name of the todoitem we removed

    console.log(taskName)
    // 2. find the task in the todolist
    // console.log(todolist)

    removeTodoByName(taskName)

    updateLocalStorage()


    console.log(todolist)
}

function removeTodoByName(taskName) {

    // loop through exisiting todolist (in from localStorage)
    for (let index = 0; index < todolist.length; index++) {
        let todoItem = todolist[index];

        // if taskName (we clicked) matches todoItem.task: then remove it from the localStorage
        if (todoItem.task == taskName) {
            console.log("Yes! we have found " + taskName + " to be matching " + todoItem.task) 
            // use the index value
            // console.log(" which is at index " + index)
            console.log(todoItem)
            
            todolist.splice(index, 1)
        }
        
    }
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

    // create html element for the todoitem:
    let paragraphElement = document.createElement("p")
    paragraphElement.textContent = text
    paragraphElement.addEventListener("click", removeElement)

    textContainer.append(paragraphElement)
}


// console.log(todolist)

// print all todo items in the console
for (let todo of todolist) {
    // console.log(todo)
    createTodoElement(todo.task)
}