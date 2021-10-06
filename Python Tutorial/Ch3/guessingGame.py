import random
def guessingGame():
    answer = False

    while answer == False:
        guess = input('I am thinking of a number between 1 and 10 ')
        correct_num = random.randint(1,10)
        try:
            guess = int(guess)
            if guess == correct_num and isinstance(guess, int):
                  print(('Correct! My number was %d') % (correct_num))
                  answer = True
            elif guess != correct_num and isinstance(guess, int):
                  print(('Incorrect! My number was %d') % (correct_num))
                  print('Try Again!')
                  answer = False
        except ValueError:    
                  print('You did not enter a number. Try again')
                  answer = False

