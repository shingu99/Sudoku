


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
    const selInput = document.querySelectorAll('select');
    if(diff==="easy")
   { 
        for(let i=0; i<81; i++)
        {
            if(inputEasy[i]!=0)
            {
                selInput[i].value = inputEasy[i];
                selInput[i].disabled = true;    
            }
        }
    }
    else{
        for(let i=0; i<81; i++)
        {
            if(inputHard[i]!=0)
            {
                selInput[i].value = inputHard[i];
                selInput[i].disabled = true;    
            }
        }
    }
}
