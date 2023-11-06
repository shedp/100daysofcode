import math
import random

class Player:
    def __init__(self, letter):
        self.letter = letter

    def geet_move(self,game):

class RandomComputerPlayer(Player):
    def __init__(self, letter);
    super().__init__(letter)

    def get_move(self,game):
        square = random.choice(game.available_moves())
        return square
    
class HumanPlayer(Player):
    def __init__(self,letter):
        super().__init__(letter)

    def get_move(self,game):
        pavalid_square = False
        val = None
        while not valid_square:
            square = input(self.letter + '\'s turn. Input move (0-1):')
            try:
                val = init(square)
                if val not in game.avaiable_moves():
                    raise ValueError
                valid_square = True
                except ValueError:
                    print('Invalid square. Try again')
       return val 

