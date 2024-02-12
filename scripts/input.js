import { generate } from "./generate.js"

export function insertValues(diff)
{
   
let inputEasy = [
    0,0,0,0,1,7,2,0,0,
    0,0,0,4,0,0,0,0,0,
    0,0,9,0,0,3,0,0,0,
    4,0,0,7,8,0,5,0,0,
    0,2,5,0,0,0,8,0,0,
    0,0,0,6,0,0,0,0,0,
    6,0,1,5,0,0,0,0,0,
    0,0,0,0,0,6,0,3,0,
    2,0,0,0,0,1,7,0,4
]

let inputHard = [
    0,3,0,6,0,0,8,9,0,
    0,0,0,0,4,0,0,0,0,
    0,0,0,8,0,0,5,0,7,
    0,9,0,0,0,0,0,0,0,
    0,0,0,0,0,6,4,0,5,
    3,0,0,0,0,4,0,1,0,
    0,6,0,0,1,0,0,3,0,
    0,0,1,0,0,0,2,0,0,
    4,0,0,0,2,0,0,0,0
]
    let sudBoard = generate(diff, true);
    console.log(sudBoard);
    const selInput = document.querySelectorAll('select');

        for(let i=0; i<81; i++)
        {
            if(sudBoard[i]!='.')
            {
                selInput[i].value = sudBoard[i];
                selInput[i].disabled = true;    
                selInput[i].classList.add("colorRed");
            }
        }
    
    // else{
    //     for(let i=0; i<81; i++)
    //     {
    //         if(inputHard[i]!=0)
    //         {
    //             selInput[i].value = inputHard[i];
    //             selInput[i].disabled = true;    
    //         }
    //     }
    // }
}
