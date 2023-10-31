
document.getElementById("play").addEventListener("click", play);

let hands = ["rock", "paper", "scissors"]

function getHand() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}

function play() {
    document.getElementById("text").innerHTML = getHand();
}