# Python Basics Glossary

- [Python Basics Glossary](#python-basics-glossary)
  - [🔢 Basic Data Types](#-basic-data-types)
    - [int](#int)
    - [float](#float)
    - [str](#str)
    - [bool](#bool)
    - [list](#list)
  - [🛠 Built-in Methods/Functions](#-built-in-methodsfunctions)
    - [append()](#append)
    - [remove()](#remove)
    - [print()](#print)
    - [input()](#input)
    - [split()](#split)
    - [len()](#len)
    - [sum()](#sum)
    - [range()](#range)
  - [🧾 Formatting \& Accessing Data](#-formatting--accessing-data)
    - [Printing with f-strings](#printing-with-f-strings)
    - [Indexing Lists](#indexing-lists)
  - [🔁 Loops](#-loops)
    - [for loops](#for-loops)
    - [while loops](#while-loops)
  - [🔢 Indexing in Loops](#-indexing-in-loops)
  - [🔀 Decision Structures](#-decision-structures)
    - [if, elif, else](#if-elif-else)


## 🔢 Basic Data Types

### int
- **Definition**: Represents whole numbers (integers).
- **Example**: `x = 5`

### float
- **Definition**: Represents decimal (floating-point) numbers.
- **Example**: `pi = 3.14`

### str
- **Definition**: A string, or a sequence of characters.
- **Example**: `name = "Alice"`

### bool
- **Definition**: A Boolean value, either True or False.
- **Example**: `is_valid = True`

### list
- **Definition**: A collection of items, ordered and changeable.
- **Example**: `numbers = [1, 2, 3]`

## 🛠 Built-in Methods/Functions

### append()
- **Definition**: Adds an item to the end of a list.
- **Example**:
  ```python
  numbers = [1, 2, 3]
  numbers.append(4)  # → [1, 2, 3, 4]
  ```

### remove()
- **Definition**: Removes an item from a list.
- **Example**:
  ```python
  numbers = [1, 2, 3]
  numbers.remove(2)  # → [1, 3]
  ```

### print()
- **Definition**: Displays output on the screen.
- **Example**: `print("Hello, world!")`

### input()
- **Definition**: Reads input from the user as a string.
- **Example**: `name = input("Enter your name: ")`

### split()
- **Definition**: Splits a string into a list by a delimiter (default is space).
- **Example**: `"a b c".split()  # → ['a', 'b', 'c']`

### len()
- **Definition**: Returns the number of items in a container (e.g., string, list).
- **Example**: `len("hello")  # → 5`

### sum()
- **Definition**: Returns the total sum of items in a numeric list.
- **Example**: `sum([1, 2, 3])  # → 6`

### range()
- **Definition**: Generates a sequence of numbers.
- **Example**: `range(5)  # → 0, 1, 2, 3, 4`

## 🧾 Formatting & Accessing Data

### Printing with f-strings
- **Definition**: A way to embed expressions inside string literals.
- **Syntax**: `f"text {variable} text"`
- **Example**:
  ```python
  name = "Alice"
  age = 30
  print(f"{name} is {age} years old.")
  ```

### Indexing Lists
- **Definition**: Accessing elements using position (starting at 0).
- **Example**:
  ```python
  fruits = ["apple", "banana", "cherry"]
  print(fruits[1])  # Output: banana
  ```

## 🔁 Loops

### for loops
- **Definition**: Repeats code for each item in a sequence.
- **Example**:
  ```python
  for x in range(3):
      print(x)  # Output: 0 1 2
  ```

### while loops
- **Definition**: Repeats code while a condition is true.
- **Example**:
  ```python
  count = 0
  while count < 3:
      print(count)
      count += 1
  ```

## 🔢 Indexing in Loops
- **Definition**: Accessing list elements inside a loop using their index.
- **Example**:
  ```python
  fruits = ["apple", "banana", "cherry"]
  for i in range(len(fruits)):
      print(f"Index {i}: {fruits[i]}")
  ```

## 🔀 Decision Structures

### if, elif, else
- **Definition**: Executes different code depending on conditions.
- **Example**:
  ```python
temperature_f = 100  # Temperature in Fahrenheit

if temperature_f == 32:    # Equal to
    print("Freezing point")
elif temperature_f >= 100: # Greater than or equal to
    print("Extremely hot")

elif temperature_f < 32:
    print("Below freezing")
elif temperature_f < 50:
    print("Cold")
elif temperature_f < 70:
    print("Warm")
else: # If all previously checked conditions were false
    print("Hot")

  ```