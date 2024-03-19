const input = document.getElementsByTagName ("input")
const playerOptions = document.getElementById("playerOptions");

const game = document.getElementById("game");

const messageDiv = document.getElementById("message");

const contadorGanados = document.getElementById("contadorGanados");

const contadorPerdidos = document.getElementById("contadorPerdidos");

const contadorEmpatados = document.getElementById("contadorEmpatados");

const efectContainer = document.getElementById("efect-container");

let playerChoiceId;
let playerChoice;
let cpuChoice;

function playerElectionHandler(event) {
  if (event.target.tagName === "BUTTON" || event.target.tagName === "INPUT") {
    playerChoice = event.target.value;
    playerChoiceId = document.getElementById(`${event.target.id}`);
    playerChoiceId.classList.add("selected")
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
    messageResult("Elije una Opción");
  } else {
    cpuElectionHandler();
    if (playerChoice === cpuChoice) {
      messageResult(`"Empate" 
      El Jugador Elijio:"${playerChoice}"
      La CPU Elijio: "${cpuChoice}"`);
      contadorEmpatados.textContent++
    } else if (
      (playerChoice === "piedra" && cpuChoice === "tijeras") ||
      (playerChoice === "papel" && cpuChoice === "piedra") ||
      (playerChoice === "tijeras" && cpuChoice === "papel")
    ) {
      winEfect();
      messageResult(`"Ganaste" Jugador Elijio: ${playerChoice} La CPU Elijio: ${cpuChoice}`);
      contadorGanados.textContent++

    } else {
      messageResult(`"Perdiste" Jugador Elijio: ${playerChoice} La CPU Elijio: ${cpuChoice}`);
      contadorPerdidos.textContent++
    }
    input.checked = false;
    playerChoiceId.classList.remove("selected")
    playerChoice = null;
    cpuChoice = null;
  }
}

function messageResult(message, prefix = "") {
  messageDiv.removeChild(messageDiv.firstChild);
  const messageElement = document.createElement("p");
  messageElement.textContent = `${prefix} ${message}`;
  messageDiv.appendChild(messageElement)

}

function winEfect() {
  const randomAngle = (min, max) => {
    return Math.random() * (max - min) + min;
  }
  confetti({
    angle: randomAngle(55,125),
    particleCount: randomAngle(50, 100),
    spread: randomAngle(50, 70),
    origin: { y: 0.6 }
  })
}

function looseEfext() {
  
}
playerOptions.addEventListener("click", playerElectionHandler);
game.addEventListener("click", gameResultsHandler);