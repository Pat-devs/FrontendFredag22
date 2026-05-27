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
/*
1. reads input
2. creates a paragraph (and uses input from #1)
3. appens the paragraph to textContainer
4. cleans input
5. creates "Data-transfer" object (to store input-text properly)
6. adds the object (from #5) to the todolist array
7. Converts the todolist to a JSON string
8. Updates localstorage with new JSON string

*/
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

    updateLocalStorage() // kjør updateLocalStorage

    console.log(todolist)
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

    // update local storage to sync it with our todolist array
    localStorage.setItem(localStorageKey, JSON.stringify(todolist))


    console.log(todolist)

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