
class helpers:
    def __init__(self):
        pass

def word_length_multipliers(text):
    word_length = len(text)
    if word_length < 1 or word_length > 3:
        multiplier = 0.1
    elif word_length < 4 or word_length > 7:
        multiplier = 0.2
    elif word_length < 7:
        multiplier = 0.3

    return multiplier

def check_if_third_character_vowel(text):
    vowels = ['a', 'e', 'i', 'o', 'u']
    if text[2] in vowels:
        return 0.3
    else:
        return 0

def check_length_less_than_onehundred(text):
    if len(text) < 100:
        return 5
    else:
        return 0
    
def check_for_unique_word(text):
    words = text.split()
    unique_words = set(words)
    if len(words) == len(unique_words):
        return -2
    else:
        return 0

def check_if_paindrome(text):
        text = ''.join(c.lower() for c in text if c.isalnum())
        if text == text[::-1]:
            return 2
        return 0

def calculate_cost(text):
    base_cost = 1
    character_cost = 0.05
    character_count = len(text)
    multiplier = word_length_multipliers(text)
    third_vowels = check_if_third_character_vowel(text)
    length_penalty = check_length_less_than_onehundred(text)
    unique_word_bonus = check_for_unique_word(text)
    palindromes = check_if_paindrome(text)
    cost = (base_cost + character_count * character_cost + multiplier + third_vowels + length_penalty + unique_word_bonus) * palindromes
    
    # TODO still getting some null values for cost, need to check the logic
    if cost <= 1:
        cost = 1
    return cost
