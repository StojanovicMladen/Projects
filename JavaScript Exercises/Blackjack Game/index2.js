
let hasBlackJack = false
let isAlive = true


function random() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10;
    }
    else if (randomNumber === 1) {
        return 11;
    }
    else {
        return randomNumber;
    }
}


document.getElementById("draw").style.display = "none";

document.getElementById("play").addEventListener("click", play);
let count = 0;

function play() {
    let isAlive = true
    let firstCard = random()
    let secondCard = random()

    count = firstCard + secondCard;
    document.getElementById("result").innerHTML = "Sum: " + count;
    document.getElementById("first-card").innerHTML = firstCard;
    document.getElementById("second-card").innerHTML = secondCard;

    if (count < 21) {
        document.getElementById("text").innerHTML = "Do you want to draw a new card? 🙂";
    } else if (count === 21) {
        document.getElementById("text").innerHTML = "Congrats! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        document.getElementById("text").innerHTML = "You're out of the game! 😭";
        isAlive = false
    }

    document.getElementById("play").style.display = "none";
    document.getElementById("draw").style.display = "";
}


document.getElementById("draw").addEventListener("click", draw);

function draw() {
    let thirdCard = random()

    if (isAlive === true && hasBlackJack === false) {
        count = count + thirdCard;
        document.getElementById("result").innerHTML = "Sum: " + count;
        document.getElementById("third-card").innerHTML = thirdCard;

        thirdCard = random()
    }


    if (count < 21) {
        document.getElementById("text").innerHTML = "Do you want to draw a new card? 🙂";
    } else if (count === 21) {
        document.getElementById("text").innerHTML = "Congrats! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        document.getElementById("text").innerHTML = "You're out of the game! 😭";
        isAlive = false
    }
}


document.getElementById("reset").addEventListener("click", reset);

function reset() {
    count = 0;
    firstCard = 0;
    secondCard = 0;
    thirdCard = "";
    document.getElementById("result").innerHTML = "Sum: " + count;
    document.getElementById("first-card").innerHTML = firstCard;
    document.getElementById("second-card").innerHTML = secondCard;
    document.getElementById("third-card").innerHTML = thirdCard;
    firstCard = random()
    secondCard = random()
    thirdCard = random()
    document.getElementById("text").innerHTML = "Press play";
    document.getElementById("play").style.display = "";
    document.getElementById("draw").style.display = "none";
    isAlive = true
    hasBlackJack = false
}
