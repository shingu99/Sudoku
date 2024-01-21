import { insertValues } from "./input.js"
import { isValidSudoku } from "./check.js";

function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    });
}

// function icons(e)
// {
//     const icon = document.createElement("i");
//     icon.setAttribute("class", e);
//     return icon
// }

export function boardDraw()
{
        const attributes = {
        class: 'bline line'
    };

    const board = document.querySelector("#board");
    
    for(let i=0; i<81; i++)
    {   
        let k=0;
        const inputEl = document.createElement("select");
        inputEl.setAttribute("style", "font-family: 'FontAwesome'");
        const arr = [" ","&#xf004","&#xf534","&#x3f","&#xf005","&#x3d","&#xf118","&#xf185","&#xf186","&#xf00c"];//this can be changed
            arr.forEach(element => {
            const opt = document.createElement("option");
            opt.innerHTML = element;
            opt.setAttribute("value", k);
            k=k+1;
            inputEl.appendChild(opt); 
            });
        
        if((i>=18 && i<27) || (i>=45 && i<54))
        {
            inputEl.setAttribute("class", "bline");
        }
        if((i+1)%3===0 && (i+1)%9!=0)
        {
            inputEl.setAttribute("class", "line");
        }
    if(i===20 || i===23 || i===47 || i===50)
        {
            setAttributes(inputEl, attributes);
        }
        board.appendChild(inputEl);

    }
    
}

export function clear()
{
    const clrSelInput = document.querySelectorAll('select');
    clrSelInput.forEach(element => {
        element.value = 0;
        if(element.disabled===true)
            element.disabled = false;
    });
}

export function insert1(diff)
{
    insertValues(diff)
}

export function isBoardFilled()
{
    const ansInput = document.querySelectorAll('select');
    for(let k=0; k<81; k++)
    {
        if(ansInput[k].value === "0"){
            alert("Please Fill out the board");
            return false;
        }
    }
    return true;
}

export function checkSudoku()
{
    const ansInput = document.querySelectorAll('select');
    let filledBoard = [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]
      ];
    let i=0,j=0;
    ansInput.forEach(element => {
        filledBoard[i][j] = element.value;
        j=j+1;
        if(j===9)
        {
            j=0; i=i+1;
        }
    });
    console.log(filledBoard);
    if(isValidSudoku(filledBoard))
        alert("The Sudoku Solution is valid");
    else
        alert("The solution is wrong");
}