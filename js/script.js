let randomNumber = Math.floor(Math.random() * 3 + 1); //losowanie liczby od 1 do 3
console.log("Wylosowana liczba przez komputer to: " + randomNumber);
let computerMove = "nieznany ruch";
if (randomNumber == 1) {
    computerMove = "kamień";
} else if (randomNumber == 2) {
    computerMove = "papier";
} else {
    computerMove = "nożyce";
}

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("Gracz wpisał: " + playerInput);
let playerMove = "nieznany ruch";
if (playerInput == "1") {
    playerMove = "kamień";
} else if (playerInput == "2") {
    playerMove = "papier";
} else if (playerInput == "3") {
    playerMove = "nożyce";
}

function printMessage(msg) {
    let div = document.createElement("div");
    div.innerHTML = msg;
    document.getElementById("messages").appendChild(div);
}

function clearMessages() {
    document.getElementById("messages").innerHTML = "";
}
if (playerMove == "nieznany ruch") {
    printMessage("Nie prawidłowy wybór");
}
if (computerMove == "kamień" && playerMove == "papier") {
    printMessage("Ty wygrywasz!");
} else if (computerMove == "papier" && playerMove == "kamień") {
    printMessage("Komputer wygrywa!");
}
if (computerMove == "kamień" && playerMove == "nożyce") {
    printMessage("Komputer wygrywa!");
} else if (computerMove == "nożyce" && playerMove == "kamień") {
    printMessage("Ty wygrywasz!");
} if (computerMove == "papier" && playerMove == "nożyce") {
    printMessage("Ty wygrywasz!");
} else if (computerMove == "nożyce" && playerMove == "papier") {
    printMessage("Komputer wygrywa!");
}
if (computerMove == "kamień" && playerMove == "kamień") {
    printMessage("Remis!");
}
if (computerMove == "papier" && playerMove == "papier") {
    printMessage("Remis!");
}
if (computerMove == "nożyce" && playerMove == "nożyce") {
    printMessage("Remis!");
}




