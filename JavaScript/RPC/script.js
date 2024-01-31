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

const drawGame = () => {
    msg.innerText = "Game is drawn";
    msg.style.backgroundColor = "#081b31";
};

const winGame = () => {
    userScore++;
    msg.innerText = "You win";
    msg.style.backgroundColor = "green";
};

const loseGame = () => {
    compScore++;
    msg.innerText = "You lose";
    msg.style.backgroundColor = "red";
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
}

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
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})