const playRock = document.getElementById("play-rock");
const playPaper = document.getElementById("play-paper");
const playScissors = document.getElementById("play-scissors");
playRock.addEventListener("click", function () {
    playGame(1);
});
playPaper.addEventListener("click", function () {
    playGame(2);
});
playScissors.addEventListener("click", function () {
    playGame(3);
});

const playGame = function (argGame) {

    const clearMessages = function () {
        document.getElementById("messages").innerHTML = "";
    }
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1); //losowanie liczby od 1 do 3
    console.log("Wylosowana liczba przez komputer to: " + randomNumber);
    let playerInput = argGame;
    console.log("Gracz wpisał: " + playerInput);

    const getMoveName = function (argMoveId) {
        if (argMoveId == 1) {
            return "kamień";
        }
        if (argMoveId == 2) {
            return "papier";
        }
        if (argMoveId == 3) {
            return "nożyce";
        }

        printMessage("Nie znam ruchu o id " + argMoveId + ".");
        return "nieznany ruch";
    }

    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);

    const displayResult = function (argComputerMove, argPlayerMove) {
        printMessage("Komputer zagrał " + argComputerMove + ", a Ty " + argPlayerMove);
        if (argPlayerMove == "nieznany ruch") {
            return "Nie prawidłowy wybór";
        }
        if (argComputerMove == "kamień" && argPlayerMove == "papier") {
            return "Ty wygrywasz!";
        } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
            return "Komputer wygrywa!";
        }
        if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
            return "Komputer wygrywa!";
        } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
            return "Ty wygrywasz!";
        } if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
            return "Ty wygrywasz!";
        } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
            return "Komputer wygrywa!";
        }
        if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
            return "Remis!";
        }
        if (argComputerMove == "papier" && argPlayerMove == "papier") {
            return "Remis!";
        }
        if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
            return "Remis!";
        }
        console.log('moves:', argComputerMove, argPlayerMove);
    }

    const printMessage = function (msg) {
        const div = document.createElement("div");
        div.innerHTML = msg;
        document.getElementById("messages").appendChild(div);
    }

    let result = displayResult(computerMove, playerMove);
    printMessage(result);

}





