import { boardDraw, insert1, clear, checkSudoku, isBoardFilled } from "./board.js"

boardDraw()

const easySudBtn = document.getElementById("easySud");
const medSudBtn = document.getElementById("medSud");
const hardSudBtn = document.getElementById("hardSud");
const vhardSudBtn = document.getElementById("vhardSud");
const insaneSudBtn = document.getElementById("insaneSud");
const extremeSudBtn = document.getElementById("extremeSud");
const checkSudBtn = document.getElementById("checkSud");

easySudBtn.addEventListener('click', () => {
    clear()
    insert1("easy")
});

medSudBtn.addEventListener('click', () => {
    clear()
    insert1("medium")
});

hardSudBtn.addEventListener('click', () => {
    clear()
    insert1("hard")
});

vhardSudBtn.addEventListener('click', () => {
    clear()
    insert1("very-hard")
});

insaneSudBtn.addEventListener('click', () => {
    clear()
    insert1("insane")
});

extremeSudBtn.addEventListener('click', () => {
    clear()
    insert1("inhuman")
});



checkSudBtn.addEventListener('click', () => {
    if(isBoardFilled())
        checkSudoku()
});



