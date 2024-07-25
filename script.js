console.log("Welcome to Tic Tac Toe");
let music = new Audio("ting_1-47612.mp3");
let gameoverr = new Audio("gameover-86548.mp3");
let turn = "X";
let gameover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " Won";
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "506px";
            gameoverr.play();
        }
    });
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameover) {
            boxtext.innerText = turn;
            music.play();
            checkWin();
            if (!gameover) {
                turn = changeTurn();  // Update the turn after calling changeTurn
                document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

// Add event listener for the reset button to reset the game
document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = '';
    });
    turn = "X";
    gameover = false;
    document.querySelector('.Info').innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
});
