

export function isValidSudoku(board)
{
    var N = 9;
    // Stores unique value
    // from 1 to N
    var unique = Array(N+1).fill(false);
 
    // Traverse each row of
    // the given array
    for(var i = 0; i < N; i++)
    {
        unique = Array(N+1).fill(false);
 
        // Traverse each column
        // of current row
        for(var j = 0; j < N; j++) 
        {
 
            // Stores the value
            // of board[i][j]
            var Z = board[i][j];
 
            // Check if current row
            // stores duplicate value
            if (unique[Z])
            {
                return false;
            }
            unique[Z] = true;
        }
    }
 
    // Traverse each column of
    // the given array
    for(var i = 0; i < N; i++)
    {
 
        // Initialize unique[]
        // array to false
        unique = Array(N+1).fill(false);
 
        // Traverse each row
        // of current column
        for(var j = 0; j < N; j++)
        {
 
            // Stores the value
            // of board[j][i]
            var Z = board[j][i];
 
            // Check if current column
            // stores duplicate value
            if (unique[Z])
            {
                return false;
            }
            unique[Z] = true;
        }
    }
 
    // Traverse each block of
    // size 3 * 3 in board[][] array
    for(var i = 0; i < N - 2; i += 3) 
    {
         
        // j stores first column of
        // each 3 * 3 block
        for(var j = 0; j < N - 2; j += 3) 
        {
 
            // Initialize unique[]
            // array to false
            unique = Array(N+1).fill(false);
 
            // Traverse current block
            for(var k = 0; k < 3; k++)
            {
                for(var l = 0; l < 3; l++) 
                {
                     
                    // Stores row number
                    // of current block
                    var X = i + k;
 
                    // Stores column number
                    // of current block
                    var Y = j + l;
 
                    // Stores the value
                    // of board[X][Y]
                    var Z = board[X][Y];
 
                    // Check if current block
                    // stores duplicate value
                    if (unique[Z])
                    {
                        return false;
                    }
                    unique[Z] = true;
                }
            }
        }
    }
 
    // If all conditions satisfied
    return true;
}