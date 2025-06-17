# Python Basics Glossary

## Table of Contents
* 1. [🔢 Basic Data Types](#BasicDataTypes)
	* 1.1. [int](#int)
	* 1.2. [float](#float)
	* 1.3. [str](#str)
	* 1.4. [bool](#bool)
	* 1.5. [list](#list)
* 2. [🛠 Built-in Methods/Functions](#Built-inMethodsFunctions)
	* 2.1. [append()](#append)
	* 2.2. [remove()](#remove)
	* 2.3. [print()](#print)
	* 2.4. [input()](#input)
	* 2.5. [split()](#split)
	* 2.6. [len()](#len)
	* 2.7. [sum()](#sum)
	* 2.8. [range()](#range)
* 3. [🧾 Formatting & Accessing Data](#FormattingAccessingData)
	* 3.1. [Printing with f-strings](#Printingwithf-strings)
	* 3.2. [Indexing Lists](#IndexingLists)
* 4. [🔁 Loops](#Loops)
	* 4.1. [for loops](#forloops)
	* 4.2. [while loops](#whileloops)
* 5. [🔢 Indexing in Loops](#IndexinginLoops)
* 6. [🔀 Decision Structures](#DecisionStructures)
	* 6.1. [if, elif, else](#ifelifelse)

##  1. <a name='BasicDataTypes'></a>🔢 Basic Data Types

###  1.1. <a name='int'></a>int
- **Definition**: Represents whole numbers (integers).
- **Example**: `x = 5`

###  1.2. <a name='float'></a>float
- **Definition**: Represents decimal (floating-point) numbers.
- **Example**: `pi = 3.14`

###  1.3. <a name='str'></a>str
- **Definition**: A string, or a sequence of characters.
- **Example**: `name = "Alice"`

###  1.4. <a name='bool'></a>bool
- **Definition**: A Boolean value, either True or False.
- **Example**: `is_valid = True`

###  1.5. <a name='list'></a>list
- **Definition**: A collection of items, ordered and changeable.
- **Example**: `numbers = [1, 2, 3]`

##  2. <a name='Built-inMethodsFunctions'></a>🛠 Built-in Methods/Functions

###  2.1. <a name='append'></a>append()
- **Definition**: Adds an item to the end of a list.
- **Example**:
  ```python
  numbers = [1, 2, 3]
  numbers.append(4)  # → [1, 2, 3, 4]
  ```

###  2.2. <a name='remove'></a>remove()
- **Definition**: Removes an item from a list.
- **Example**:
  ```python
  numbers = [1, 2, 3]
  numbers.remove(2)  # → [1, 3]
  ```

###  2.3. <a name='print'></a>print()
- **Definition**: Displays output on the screen.
- **Example**: `print("Hello, world!")`

###  2.4. <a name='input'></a>input()
- **Definition**: Reads input from the user as a string.
- **Example**: `name = input("Enter your name: ")`

###  2.5. <a name='split'></a>split()
- **Definition**: Splits a string into a list by a delimiter (default is space).
- **Example**: `"a b c".split()  # → ['a', 'b', 'c']`

###  2.6. <a name='len'></a>len()
- **Definition**: Returns the number of items in a container (e.g., string, list).
- **Example**: `len("hello")  # → 5`

###  2.7. <a name='sum'></a>sum()
- **Definition**: Returns the total sum of items in a numeric list.
- **Example**: `sum([1, 2, 3])  # → 6`

###  2.8. <a name='range'></a>range()
- **Definition**: Generates a sequence of numbers.
- **Example**: `range(5)  # → 0, 1, 2, 3, 4`

##  3. <a name='FormattingAccessingData'></a>🧾 Formatting & Accessing Data

###  3.1. <a name='Printingwithf-strings'></a>Printing with f-strings
- **Definition**: A way to embed expressions inside string literals.
- **Syntax**: `f"text {variable} text"`
- **Example**:
  ```python
  name = "Alice"
  age = 30
  print(f"{name} is {age} years old.")
  ```

###  3.2. <a name='IndexingLists'></a>Indexing Lists
- **Definition**: Accessing elements using position (starting at 0).
- **Example**:
  ```python
  fruits = ["apple", "banana", "cherry"]
  print(fruits[1])  # Output: banana
  ```

##  4. <a name='Loops'></a>🔁 Loops

###  4.1. <a name='forloops'></a>for loops
- **Definition**: Repeats code for each item in a sequence.
- **Example**:
  ```python
  for x in range(3):
      print(x)  # Output: 0 1 2
  ```

###  4.2. <a name='whileloops'></a>while loops
- **Definition**: Repeats code while a condition is true.
- **Example**:
  ```python
  count = 0
  while count < 3:
      print(count)
      count += 1
  ```

##  5. <a name='IndexinginLoops'></a>🔢 Indexing in Loops
- **Definition**: Accessing list elements inside a loop using their index.
- **Example**:
  ```python
  fruits = ["apple", "banana", "cherry"]
  for i in range(len(fruits)):
      print(f"Index {i}: {fruits[i]}")
  ```

##  6. <a name='DecisionStructures'></a>🔀 Decision Structures

###  6.1. <a name='ifelifelse'></a>if, elif, else
- **Definition**: Executes different code depending on conditions.
- **Example**:
  ```python
  age = 20
  if age < 18:
      print("Minor")
  elif age == 18:
      print("Just became adult")
  else:
      print("Adult")
  ```