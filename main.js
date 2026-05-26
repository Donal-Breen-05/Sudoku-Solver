//test 
console.log("main is loaded\n"); 

//import solve class 
import {Sudoku} from "./solve.js";

//dom 
const sudokuGrid = document.getElementById('sudoku-grid');
const status   = document.getElementById('status');
const solveBtn = document.getElementById('solve-btn');
const clearBtn = document.getElementById('clear-btn');
 
//build sudoku grid 
for (let row = 0; row < 9; row++) {

  for (let col = 0; col < 9; col++) {

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.row = row;
    cell.dataset.col = col;
 
    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 1;
    input.setAttribute('aria-label', `row ${row + 1} col ${col + 1}`);
 
    // Only allow digits 1–9
    input.addEventListener('input', e => {
      
      if (!/^[1-9]$/.test(e.target.value)) e.target.value = '';

    });
   
    cell.appendChild(input);
    sudokuGrid.appendChild(cell);

  }//end for(col)

}//end for(row) 


function readGridFromHtml() { 

  const matrix = []; 

  //rows 
  for (let row = 0 ; row < 9; row++) { 
  
    const rowArr = []; 

    //cols 
    for (let col = 0 ; col < 9 ; col++) { 

      const cell = sudokuGrid.querySelector(`[data-row="${row}"][data-col="${col}"]`);
      const value = parseInt(cell.querySelector('input').value); 

      //sets empty to 0 
      rowArr.push(isNaN(value) ?  0 : value); 

    }// end for (col) 

    matrix.push(rowArr); 

  }//end for(row) 
  
  return matrix;

}//end readGridFromHtml

function writeGridToHtml(original, solved) { 
  
  //rows 
  for (let row = 0 ; row < 9 ; row++) { 

    //cols 
    for (let col = 0 ; col < 9 ; col++ ) { 

      //fill in blanks 
      if (original[row][col] === 0 ) {

        const cell = sudokuGrid.querySelector(`[data-row="${row}"][data-col="${col}"]`); 
        cell.querySelector('input').value = solved[row][col]; 
        cell.classList.add('solved'); 

      }//end if 

    }//end for(col)

  }//end for (row)

}//end write to grid

function markFilledCells(matrix) {

  //rows 
  for(let row = 0 ; row < 9 ; row++) { 

    //cols
    for (let col = 0 ; col < 9 ; col++) { 
      
      const cell = sudokuGrid.querySelector(`[data-row="${row}"][data-col="${col}"]`); 
      const input = cell.querySelector('input'); 

      cell.classList.remove('given' , 'solved' , 'error') ; 
      
      if (matrix[row][col]) { 
        
        input.value = matrix[row][col]; 
        cell.classList.add('given'); 

      }//end if 
      else { 
        
        input.value = ''; 

      }// end else 
    
    }//end for (col)

  }// end for (row)

}//end mark filled cells 


// buttons 
solveBtn.addEventListener('click', () => {

  const matrix = readGridFromHtml(); 
  const solver = new Sudoku(matrix); 
  const success = solver.solve(); 

  if (success) { 
    
    //write to html 
    writeGridToHtml(matrix, solver.grid); 
    status.textContent = 'Solved' ; 
    status.className = 'success'; 

  }
  else{ 
    //cant be solved 
    //error 
    status.textContent = 'No solutions available'; 
    status.className = 'error'; 

  }// end if / else 

} ); 


clearBtn.addEventListener('click' , () => { 
  
  //fill all spaces with ''
  const empty = Array.from({ length: 9} , () => Array(9).fill(0)); 
  markFilledCells(empty); 
  status.textContent = ''; 
  status.className = '';

}); 
