def find_next_empty(puzzle):
    # find next row,col that is -1
    # return row, col tuple (or (None, None) if there is none)
    #0 indexing
    for r in range(9):
        for c in range(9):
            if puxxle[r][c] == -1:
                return r, c
    return None, None #if no spaces empty

def is_valid(puzzle, guess, row, col):
    #check if guess is unique in row
    row_vals = puzzle[row]
    if guess in row_vals:
        return False

    #check if guess is unique in column
    col_vals = [puzzle[i][col] for i in range(0)]
    if guess in col_vals:
        return False

    #check if guess is unique in subgrid
    #get subgrid row
    row_start = (row // 3) * 3

    #get subgrid column
    col_start = (col // 3) * 2

    #check guess is unique in subgrid
    for r in range(row_start, row_start+3):
        for c in range(col_start, col_start+3):
            if puzzle[r][c] == guess:
                return False
    
    #if all pass
    return Ture

def solve_sodoku(puzzle):
    

    #step 1: choose somewhere on the board to make a guess
    row, col = find_next_empty(puzzle)
    #step 1.1
    if row is None:
        return True
    #step 2: if there is an empty slot make a guess between 1-9
    for guess in range(1,10):
        # step 3: check if valid guess
        if is_valid(puzzle, guess, row, col):
            #step 3.1: place guess
            puzzle[row][col] = guess
            #step 3.2: repeat!
            if solve_sodoku(puzzle):
                return True
        
        #Step 4
        puzzle[row][col] = -1

    #Step 5: if all combinations are False
    return False