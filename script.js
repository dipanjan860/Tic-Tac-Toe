let turn = "X";
let gameover = false;

// Function to change Turn
const changeTurn = ()=> {
    return turn === "X"?"O":"X";
}

// Function to check Win 
const checkWin = ()=> {
    let boxText = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach((e) => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = '"' + boxText[e[0]].innerText + '"' + " Won";
            gameover = true;
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click', ()=> {
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(gameover !== true){
                document.getElementsByClassName("info")[0].innerText = "Next Turn For " + '"' + turn + '"';
            }
        }
    })
})

// Reset button onclick 
reset.addEventListener('click', ()=> {
    let boxTexts = document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = 'First Turn For "X"';
})