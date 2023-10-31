
const saveBtn = document.getElementById("save-btn")
const saveTabBtn = document.getElementById("save-tab")
const deleteBtn = document.getElementById("delete-btn")
const input = document.getElementById("input")
const list = document.getElementById("list")
let savedInputs = []

input.focus() // Keep the cursor active in the input field

let inputsFromLocalStorage = JSON.parse(localStorage.getItem("savedInputs"))

if (inputsFromLocalStorage) {
    savedInputs = inputsFromLocalStorage
    renderItems()
}


saveBtn.addEventListener("click", save)
saveTabBtn.addEventListener("click", tabSave)
deleteBtn.addEventListener("click", clear)
document.addEventListener("keypress", handleKeyPress)
document.addEventListener("keydown", handleKeyDown)


function save() {
    savedInputs.push(input.value)
    input.value = ""

    localStorage.setItem("savedInputs", JSON.stringify(savedInputs))

    renderItems()
    input.focus()
}


function tabSave() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        savedInputs.push(tabs[0].url)


        localStorage.setItem("savedInputs", JSON.stringify(savedInputs))

        renderItems()
        input.focus()
    })
}


function handleKeyPress(event) {
    if (event.key === "Enter") {
        save()
    }
}

function handleKeyDown(event) {
    if (event.key === "Delete") {
        clear()
    }
}


function renderItems() {
    let listItems = ""
    for (let i = 0; i < savedInputs.length; i++) {
        // listItems += "<li><a target='_blank' href='" + savedInputs[i] + "'>" + savedInputs[i] + "</a></li>"
        listItems += `
        <li>
            <a target='_blank' href='${savedInputs[i]}'>
                ${savedInputs[i]}
            </a>
        </li>
        <hr>
        `
    }

    list.innerHTML = listItems
}


function clearInputs() {
    savedInputs.pop(); // Remove the last added value from the array
    localStorage.setItem("savedInputs", JSON.stringify(savedInputs)); // Update the local storage
    renderItems(); // Update the list on the page
}


function clear() {
    clearInputs()
    input.focus()
}


/* //Remove The whole array from local storage
function clearInputs() {
    savedInputs = []
    localStorage.removeItem("savedInputs")
    renderItems()
}

clearInputs()

//pop function - removes the last item from the array
//shift function - removes the first item from the array
*/


