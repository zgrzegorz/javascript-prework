let randomNumber = Math.floor(Math.random() * 3 + 1); //losowanie liczby od 1 do 3
console.log("Wylosowana liczba przez komputer to: " + randomNumber);
let computerMove = getMoveName(randomNumber);
/*if (randomNumber == 1) {
    computerMove = "kamień";
} else if (randomNumber == 2) {
    computerMove = "papier";
} else {
    computerMove = "nożyce";
}*/

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("Gracz wpisał: " + playerInput);
let playerMove = getMoveName(playerInput);
/*if (playerInput == "1") {
    playerMove = "kamień";
} else if (playerInput == "2") {
    playerMove = "papier";
} else if (playerInput == "3") {
    playerMove = "nożyce";
}*/
function getMoveName(argMoveId) {
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

function printMessage(msg) {
    let div = document.createElement("div");
    div.innerHTML = msg;
    document.getElementById("messages").appendChild(div);
}

function clearMessages() {
    document.getElementById("messages").innerHTML = "";
}

function displayResult(argComputerMove, argPlayerMove) {
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
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

let result = displayResult(computerMove, playerMove);
printMessage(result);


