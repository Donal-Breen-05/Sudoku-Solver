
class Sudoku { 
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
      if(this.grid[i][col] === num) return flase; 

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

}// Sudoku


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
solver.printMatrix();

class Sudoku { 
   constructor(grid) { 
    //copy grid 
    this.grid = grid.map(row => [...row]); 
  }
  
  printMatrix() { 
   this.grid.forEach(row => console.log(row.join(" ")));
  }//printMatix

}// Sudoku


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
solver.printMatrix();
