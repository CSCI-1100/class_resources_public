import random

# Edit this variable to control how many gamertag suggestions
# are printed when the program runs:
gamertags_to_print = 10

# TODO: Your challenge:
# 1. What about asking the user if they want to include numbers in the tag?
# 2. If yes (y), then maybe you can ask them for 2 or 3 favorite numbers and
#    incorporate one at random upon each tag generation.
# 3. If user says no (or really anything other than yes or y), just don't add numbers
# ** Think about SANITIZING user input:
#    - strip() removes leading/trailing whitespace
#    - response = input("Do you want... (y/n) ?")
#    -   "Yes", "yes", "y", and "Y" are four answers to check;
#    -   response.lower()[0] == 'y' is ONE comparison that would be true for all 4 cases above

adjectives = [
    'auspicious', # 0
    'ferocious',
    'insidious',
    'spicy',
    'vivid',
    'noble',
    'ghostly' # 6
]

nouns = [
    'buccanneer',
    'penguin',
    'mist',
    'haze',
    'echo',
    'koala',
    'microwave',
    'potato',
    'chatbot'
]

num_adjectives = len(adjectives)
num_nouns = len(nouns)

# 1. generate a gamer tag
# 2. check if the gamer tag generated is unique or whether it has already been generated
# 3. if unique, keep it to print for the user, otherwise (else) we need to get a unique one

# This list will store each new gamer tag so we can verify that each newly generated tag is
# not already stored in the list
unique_gamertags = []

gamertags_printed = 0
while gamertags_printed < gamertags_to_print:
    # Store the numbers of adjectives and nouns to variables
    adjective_index = random.randint(0, num_adjectives-1) # outputs a number between 0 and num_adjectives (inclusive)
    adjective = adjectives[adjective_index].capitalize()

    noun_index = random.randint(0, num_nouns-1) # outputs a number between 0 and num_adjectives (inclusive)
    noun = nouns[noun_index].capitalize()

    gamertag = f"{adjective.capitalize()}_{noun.capitalize()}"

    # Check if the gamer tag already exists in the list
    if not gamertag in unique_gamertags:
        unique_gamertags.append(gamertag)

        # Only increments the counter variable when the gamertag was unique
        # which means the while loop must keep running until it has given us
        # *gamertags_to_print* unique gamer tags
        gamertags_printed += 1

# Now output the suggestions in an organized list
print("-"*10, f"Your {gamertags_to_print} gamer tag suggestions", "-"*10 )


for i, item in enumerate(unique_gamertags):
    print(f"{i+1:>2}. {item}")
