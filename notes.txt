## Python Sudoku Solver

- This is a python sudoku solver
- It will use backtracking to solve the puzzle
- Checks whether puzzle is solvable
- if yes, it will mutate puzzle
- puzzle will be a list of lists where inner lists represents each row
- program will try every combination of numbers by filling in the empty slots

- Step 1: find an empty slot ('find_next_empty()')
    - Step 1.1: if no slots are empty, puzzle is solved
- Step 2: if there is an empty slot, make a guess between 1-9
- Step 3: check if guess is valid ('is_valid()')
    - Step 3.1: place the guess
    - Step 3.2: recursivley call function
- Step 4: if guess invalid of is does not solve puzzle, backtrack and start all over
- Step 5: if all combinations are False, the board is not solveable