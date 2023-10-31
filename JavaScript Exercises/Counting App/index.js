
// ctrl+k+c

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    //console.log(count)
    let saveElCount = " " + count + " - "
    saveEl.innerText += saveElCount
    count = 0
    countEl.textContent = count 
}

