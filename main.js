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
