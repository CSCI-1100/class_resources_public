# Python Basics

Contents
1. [Variables and Data Types](#Variables-and-Data-Types)
2. [Input and Output](#Input-and-Output)
3. [Strings](#Strings)
4. [Working with Lists](#Working-with-Lists)
5. [Control Flow](#Control-Flow)
6. [Logical Operators](#Logical-Operators)

## Variables and Data Types

### Variables

Variables in Python are used to store data and must follow these rules:
- Must start with a letter or underscore
- Cannot start with a number
- Can contain letters, numbers, and underscores

Examples:
```python
# Valid variable names
age = 25
_temperature = 98.6
user_name = "Alice"

# Invalid variable name
2ndPlace = "Silver"  # Starts with number
```

### Data types

Python has several basic data types:
```python
age = 25        # int (whole numbers)
height = 1.75   # float (decimal numbers)
name = "Alice"  # str (text)
is_valid = True # bool (True/False)
```

And other, more advanced data types, one of which is the `list`:
```python
professors = ['Chelsie', 'Jake', 'Mike', 'Ryan'] # list of strings
scores = [85.7, 98.5, 76.4, 92] # list of numbers (floats and ints)
```
## Input and Output

Python provides built-in functions for input and output:

```python
# Output: print() displays data to screen
print("Hello World")
print(f"The temperature is {_temperature}°F")

# Input: input() gets user data
name = input("Enter your name: ")
age = int(input("Enter your age: "))  # Converts string to integer

# Output, cont'd:
# Formatted strings have a lowercase f before the quotations
# They let you insert variables into the strings using the curly braces { }
print(f"Hello, {name}!") # Another way to write this is "Hello, " + name + "!"
print(f"{name} is {age} years old!")
```

## Strings

Strings are just text. (A string of characters)
Python strings are versatile and can be created in multiple ways:
```python
# Different ways to create strings
text1 = 'Hello'             # Single quotes
text2 = "World"             # Double quotes

# Triple quotes let you write across multiple lines
text3 = """Dessert jelly beans cake toffee donut brownie soufflé wafer.
Gummies carrot cake cheesecake biscuit dragée muffin fruitcake marzipan topping.
Gummies jujubes sesame snaps halvah toffee soufflé candy.
Tart gingerbread pie toffee marshmallow halvah wafer marzipan.""" 

# Common string operations
combined = "Hello" + " World"    # Concatenation: "Hello World"

# TODO: Try rewriting the string concatenations below as formatted (f"") strings!
print("combined variable stores: " + combined)

repeated = "Ha" * 3              # Repetition: "HaHaHa"
print("repeated: " + repeated)
```

## Working with Lists

You can access items in a list by their `index`. Think of an index as an address. It uniquely identifies where each item in the list is located.

Programmers like to start counting at 0 for some reason, so the address or `index` of the first item in any list is always 0. When new to programming, its common to accidentally use the wrong index because of this. Hence a common source of programming *bugs* is the "off-by-one error"!

```python
todo_list = ["Clean room", "Do homework", "Work out"]
# Indexing: "Clean room"
print("The first item in the to-do list is: " + todo_list[0])
# Indexing: "Work out"
print(f"The third item in the to-do list is: {todo_list[2]}") # f-string

shopping_list = "apples,bread,eggs".split(",")      # Creates list: ["apples", "bread", "eggs"]

# TODO: Now you try! Use indexing and the print
# statement to print an item from the shopping list.
```

### A string can be treated like a list of characters

Individual characters in a string can be indexed, just like indexing items in a list!
```python
first_char = "Python"[0]         # Indexing: "P"
second_char = "Python"[1]        # Indexing: "y"

print('The first character in "Python" is ' + first_char)
print('The second character in "Python" is ' + second_char)
```

## Control Flow

### If Statements
Used for making decisions based on conditions:

```python
age = 18 # Change the variable to test the conditions
if age >= 18:
    print("Adult")
else:
    print("Minor")

# Multiple conditions
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")
```

### Loops

Python provides two main types of loops:

```python
# For loop - iterates over a sequence
for i in range(3):
    print(i)        # Prints 0, 1, 2

# While loop - continues while condition is True
x = 5
while x > 0:
    print(x)
    x -= 1         # Prints 5, 4, 3, 2, 1
```

Note: While loops may execute zero times if the initial condition is False.

### Accessing list items in a loop

Loops are not just for counting. We can use them to access items in a list like this:
```python
todo_list = ["Clean room", "Do homework", "Work out"]

print("Your to-do list:")

# This for loop starts at the beginning of the
# list and keeps going until it reaches the end:
for item in todo_list:
	print(item)
```

Remember indexing? `todo_list[0]` gives us the first item, `todo_list[1]` gives us the second item, and so on... Well, we can take advantage of the fact that loops count for us and loop through all the items in the list like this:

```python
# len function counts how many items: 3 in this case
length_of_list = len(todo_list)

print("Your to-do list:")

# This loop starts at 0, and keeps repeating
# while the variable i is less than length_of_list
# Counts 0, 1, 2 and then when i = 3, it stops
for i in range(length_of_list)
	print(f"{i+1}. {todo_list[i]}") # {i+1} is for numbering starting at 1

# TODO: Write your own list.
# Then write a for loop to print your list like this:
#   1. Clean room
#   2. Do homework
#   3. Work out
# Now try adding or removing an item from your list!
# It should still work if you used the len() function
# to stop at the last list item.
```

## Logical Operators

Python uses three main logical operators:

```python
# Scenario: Can you go to the movies?
has_finished_homework = True
is_weekend = False
has_pocket_money = True

# You can go if: 
# - It's the weekend AND you have money, OR
# - You've finished homework AND have money
can_go_to_movies = (is_weekend and has_pocket_money) or (has_finished_homework and has_pocket_money)

if can_go_to_movies:
    print("Yay! Movie time! 🎬")
else:
    print("Sorry, not today 😢")

# Scenario: Should you take an umbrella?
is_raining = True
has_hood = True
is_windy = True

# Don't need umbrella if it's NOT raining
# Or if you have a hood and it's NOT windy
need_umbrella = is_raining and not (has_hood and not is_windy)

if need_umbrella:
    print("Take your umbrella! ☔")
else:
    print("No umbrella needed today! 🌞")
```

These operators are commonly used in conditional statements:

```python
age = 25
has_id = True

if age >= 18 and has_id:
    print("Can enter")
else:
    print("Cannot enter")
```
