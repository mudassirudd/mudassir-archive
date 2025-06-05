let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    // intervalId = setInterval(function () {
    // changed to arrow function
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1500);
    isAutoPlaying = true;
    document.querySelector(`.js-autoplay-btn`).innerHTML = `Stop playing`;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector(`.js-autoplay-btn`).innerHTML = `Auto play`;
  }
}

document.body.addEventListener(`keydown`, (event) => {
  if (event.key === `r`) {
    playGame(`rock`);
  } else if (event.key === `p`) {
    playGame(`paper`);
  } else if (event.key === `s`) {
    playGame(`scissors`);
  } else if (event.key === `a`) {
    autoPlay();
  } else if (event.key === `Backspace`) {
    showResetConfirmation();
  } else if (event.key === `y`) {
    reset();
  } else if (event.key === `n`) {
    hideResetConfirmation();
  }
});

document.querySelector(`.js-rock-btn`).addEventListener(`click`, () => {
  playGame(`rock`);
});
document.querySelector(`.js-paper-btn`).addEventListener(`click`, () => {
  playGame(`paper`);
});
document.querySelector(`.js-scissors-btn`).addEventListener(`click`, () => {
  playGame(`scissors`);
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `You picked-
${playerMove} &
Computer picked-
${computerMove}
`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function showResetConfirmation() {
  document.querySelector(
    `.js-confirmation-div`
  ).innerHTML = `Do you want to reset the score?
  <button class="js-reset-yes" onclick="reset();">Yes</button>
  <button class="js-reset-no" onclick="hideResetConfirmation();">No</button>`;
}

function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScoreElement();
  hideResetConfirmation();
}

function hideResetConfirmation() {
  document.querySelector(`.js-confirmation-div`).innerHTML = ``;
}
