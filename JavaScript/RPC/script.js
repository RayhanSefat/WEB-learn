let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const compChoiceMsg = document.querySelector("#comp-choice-msg");
const msg = document.querySelector("#msg");
const userScoreMsg = document.querySelector("#user-score");
const compScoreMsg = document.querySelector("#comp-score");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const changeDisplayCompChoice = (compChoice) => {
    compChoiceMsg.innerText = `Computer choosed ${compChoice}`;
};

const changeTextAndBackground = (msgElement, text, color) => {
    msgElement.innerText = text;
    msgElement.style.backgroundColor = color;
};

const drawGame = () => {
    changeTextAndBackground(msg, "Game is drawn", "#081b31");
};

const winGame = () => {
    userScore++;
    changeTextAndBackground(msg, "You win", "green");
};

const loseGame = () => {
    compScore++;
    changeTextAndBackground(msg, "You lose", "red");
};

const getUserWin = (userChoice, compChoice) => {
    if(userChoice === "rock") {
        return compChoice === "scissors";
    }
    if(userChoice === "paper") {
        return compChoice === "rock";
    }
    if(userChoice === "scissors") {
        return compChoice === "paper";
    }
};

const updateScore = () => {
    userScoreMsg.innerText = userScore;
    compScoreMsg.innerText = compScore;
};

let matchIsOn = true;
let thresholdScore = 10;

const isMatchOn = () => {
    return (userScore < thresholdScore && compScore < thresholdScore);
};

const showWinMessage = () => {
    let message = "Coungratulations! You have won the match.";
    changeTextAndBackground(msg, message, "green");
};

const showLoseMessage = () => {
    let message = "Sorry! You have lost the match.";
    changeTextAndBackground(msg, message, "red");
};

const endMatch = () => {
    matchIsOn = false;

    if(userScore == thresholdScore) {
        showWinMessage();
    }
    else {
        showLoseMessage();
    }
};

const playGame = (userChoice) => {
    const compChoice = generateComputerChoice();
    changeDisplayCompChoice(compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        userWin = getUserWin(userChoice, compChoice);
        userWin? winGame() : loseGame();
    }

    updateScore();
    if(!isMatchOn()) {
        endMatch();
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if(!matchIsOn) {
            return;
        }
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})