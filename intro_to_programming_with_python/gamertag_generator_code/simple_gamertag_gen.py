import random

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

# Store the numbers of adjectives and nouns to variables
num_adjectives = len(adjectives)
num_nouns = len(nouns)

adjective_index = random.randint(0, num_adjectives-1) # outputs a number between 0 and num_adjectives (inclusive)
adjective = adjectives[adjective_index].capitalize()

noun_index = random.randint(0, num_nouns-1) # outputs a number between 0 and num_adjectives (inclusive)
noun = nouns[noun_index].capitalize()

gamertag = f"{adjective.capitalize()}_{noun.capitalize()}"
print(f"Your recommended gamer tag: {gamertag}")