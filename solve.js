
export class Sudoku { 
   constructor(grid) { 
    //copy grid 
    this.grid = grid.map(row => [...row]); 
  }
  
  printMatrix() { 
   this.grid.forEach(row => console.log(row.join(" ")));
  }//printMatix

  isSafe(row , col , num) { 
    
    //check row 
    for(let i = 0 ; i < 9 ; i++) { 
      if(this.grid[row][i] === num) return false; 
    }//end for 
  
    //check column 
    for(let i = 0 ; i < 9 ; i++ )
      if(this.grid[i][col] === num) return false; 

    //check 3x3 grid 
    const startRow = row - (row % 3); 
    const startCol = col - (col % 3); 

    for (let i= 0 ; i < 3 ; i++) { 
      
      for (let j = 0 ; j < 3 ; j++) { 
        
        if (this.grid[i + startRow][j + startCol] === num) return false; 
      
      }//end for(j)
    
    }//end for (i)
    
    return true; 
  
  }//end isSafe

  solve(row = 0 , col = 0) { 

    //base case 
    if (row === 8 && col === 9) return true; 
  
    // next row 
    if (col === 9) { row++; col = 0; }
  
    //cell filled 
    if (this.grid[row][col] !== 0) {

      return this.solve(row, col +1); 

    }//end if 
    
    for (let num = 1; num <= 9; num++) { 
      
      if(this.isSafe(row, col, num)) { 

        this.grid[row][col] = num; 

        if (this.solve(row, col + 1)) { 

          return true; 

        }//end if 
        else{ 
        
          //backtrack 
          this.grid[row][col] = 0; 

        }//end else 

      }//end if 
    
    }//end for 

  }//solve

}// Sudoku



/*

// main matrix 
let matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]; 

const solver = new Sudoku(matrix); 
solver.solve();
solver.printMatrix();
*/
