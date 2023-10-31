
let hasBlackJack = false
let isAlive = true
let drawnCards = document.getElementById("drawn-cards")
let result = document.getElementById("result")
let cards = []


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
  cards = [firstCard, secondCard]
  renderGame()

  document.getElementById("play").style.display = "none";
  document.getElementById("draw").style.display = "";
}


function renderGame() {
  drawnCards.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    drawnCards.textContent += cards[i] + " "
  }

  result.textContent = "Sum: " + count

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


document.getElementById("draw").addEventListener("click", draw);

function draw() {
  let thirdCard = random()

  if (isAlive === true && hasBlackJack === false) {
    count = count + thirdCard;
    cards.push(thirdCard)
    renderGame()
  }
}


document.getElementById("reset").addEventListener("click", reset);

function reset() {
  cards = []
  count = 0;
  drawnCards.innerHTML = "Cards: "
  result.innerHTML = "Sum: ";
  firstCard = random()
  secondCard = random()
  thirdCard = random()
  document.getElementById("text").innerHTML = "Press play";
  document.getElementById("play").style.display = "";
  document.getElementById("draw").style.display = "none";
  isAlive = true
  hasBlackJack = false
}
