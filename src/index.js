const playerOptions = document.getElementById("playerOptions");
const game = document.getElementById("game");

let playerChoice;
let cpuChoice;

function playerElectionHandler(event) {
  if (event.target.tagName === "BUTTON") {
    playerChoice = event.target.value;
    console.log(playerChoice, cpuChoice);
  }
}

function cpuElectionHandler() {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    cpuChoice = "piedra";
  } else if (random === 2) {
    cpuChoice = "papel";
  } else {
    cpuChoice = "tijeras";
  }
}

function gameResultsHandler() {
  if (playerChoice === null || playerChoice === undefined) {
    console.log("Elije una Opción");
  } else {
    cpuElectionHandler();
    if (playerChoice === cpuChoice) {
      console.log(`"Empate" 
      El Jugador Eligio:"${playerChoice}"
      La CPU Eligio: "${cpuChoice}"`);
    } else if (
      (playerChoice === "piedra" && cpuChoice === "tijeras") ||
      (playerChoice === "papel" && cpuChoice === "piedra") ||
      (playerChoice === "tijeras" && cpuChoice === "papel")
    ) {
      console.log(`"Ganaste" Jugador Eligio: ${playerChoice} La CPU Eligio: ${cpuChoice}`);

    } else {
      console.log(`"Perdiste" Jugador Eligio: ${playerChoice} La CPU Eligio: ${cpuChoice}`);
    }
    playerChoice = null;
    cpuChoice = null;
  }
}

playerOptions.addEventListener("click", playerElectionHandler);
game.addEventListener("click", gameResultsHandler);