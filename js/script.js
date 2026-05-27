
// Data variables
let todolist = [] // create an empty array to store our todos

// localstorage key
let localStorageKey = "todolist"

// Dom elements:
let inputElement = document.getElementById("text-input")
let buttonElementAdd = document.getElementById("add-text")
let textContainer = document.getElementById("text-container")

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

    // update local storage (remove the item)

    // 1. Find the clicked item in the todolist array
    let taskName = eventInfo.target.textContent; // name of the todoitem we removed

    console.log(taskName)
    // 2. find the task in the todolist
    // console.log(todolist)

    // loop through exisiting todolist (in from localStorage)

    for (let index = 0; index < todolist.length; index++) {
        let todoItem = todolist[index];

        console.log(todoItem)
        
    }

    for (let todoItem of todolist) {
        // check if todoItem matches taskName
        if (todoItem.task == taskName) {
        
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

