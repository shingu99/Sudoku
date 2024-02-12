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
        const arr = [" ",1,2,3,4,5,6,7,8,9];//this can be changed
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

        if(i==3||i==4||i==5||i==12||i==13||i==14||i==21||i==22||i==23||i==27||i==28||i==29||i==36||i==37||i==38||i==45||i==46||i==47||i==33||i==34||
            i==35||i==42||i==43||i==44||i==51||i==52||i==53||i==57||i==58||i==59||i==66||i==67||i==68||i==75||i==76||i==77)
            {
                inputEl.classList.add("colorGrey");
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
           { 
            element.disabled = false;
            element.classList.remove("colorRed");
            }
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