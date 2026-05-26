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

    // textContainer = textContainer.textContent + "<h1>" + text
    textContainer.innerHTML += "<p> " + text + "</p>"

    // try to remove someting
    //inputElement.remove()
    //buttonElementAdd.remove()
   
   //textContainer.remove()

   // remove a specific paragraph:

}

/*
    <div id="text-container">

        Text inni divven :)

        <p>mer text inni en p-tag inni divven</p>
        <p>enda mer text inni enda en p-tag inni divven</p>
    </div>
*/


// find the paragraph with id "item-1"
let firstParagraphElement = document.getElementById("item-1")

//paragraphElement.remove()

firstParagraphElement.addEventListener("click", removeElement)

// removes a given element from the page
function removeElement() {
    firstParagraphElement.remove()
}

// make the "item-2" pagarphah have removability as well

// find the paragraph with id "item-2"
let secondParagraphElement = document.getElementById("item-2")

secondParagraphElement.addEventListener("click", removeElementV2)

// removes a given element from the page
function removeElementV2() {
    secondParagraphElement.remove()
}