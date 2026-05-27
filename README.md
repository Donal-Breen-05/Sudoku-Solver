# Sudoku-Solver
a simple website to solve a sudoku puzzle using backtracking 


--- 

## try it out 
click [here](https://donal-breen-05.github.io/Sudoku-Solver/) to try the website on github pages 

---- 

## for self host / github pages not working 

```bash 
git clone https://github.com/Donal-Breen-05/Sudoku-Solver.git
cd Sudoku-Solver
```

### build the docker image 
```bash
docker build -t sudoku-solver .
```

### run (port 8080) 
```bash
docker run -p 8080:80 sudoku-solver:latest
```
