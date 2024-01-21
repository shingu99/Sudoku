import { boardDraw, insert1, clear, checkSudoku, isBoardFilled } from "./board.js"

boardDraw()

const easySudBtn = document.getElementById("easySud");
const hardSudBtn = document.getElementById("hardSud");
const checkSudBtn = document.getElementById("checkSud");

easySudBtn.addEventListener('click', () => {
    clear()
    insert1("easy")
});

hardSudBtn.addEventListener('click', () => {
    clear()
    insert1("hard")
});

checkSudBtn.addEventListener('click', () => {
    if(isBoardFilled())
        checkSudoku()
});



