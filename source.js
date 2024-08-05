const choices = ['rock', 'paper', 'scissors']
const playerdisplay = document.getElementById('playerdisplay');
const computerdisplay = document.getElementById('Computerdisplay');
const resultdisplay = document.getElementById('resultdisplay');
const playerscoerdisplay = document.getElementById('playerscoreDisplay');
const computerscoredisplay = document.getElementById('ComputerscoreDisplay');

let playerscore = 0;
let computerscore = 0;

//--------------------------------------------- Logic

function Playgame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    let result = "";
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }

    }
    
    playerdisplay.textContent = `PLAYER: ${playerChoice}`;
    computerdisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultdisplay.textContent = result;
    resultdisplay.classList.remove('greentext', 'redtext');

    switch (result) {
        case "YOU WIN!":
            resultdisplay.classList.add('greentext');
            playerscore++;
            playerscoerdisplay.textContent = playerscore;
            break;
        case "YOU LOSE!":
            resultdisplay.classList.add('redtext');
            computerscore++;
            computerscoredisplay.textContent = computerscore;
            break;


    }
}

