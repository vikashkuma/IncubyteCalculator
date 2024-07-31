# String Calculator TDD Kata

## Overview

This repository contains a solution for the String Calculator TDD Kata, designed to practice Test-Driven Development (TDD) using JavaScript. The calculator can handle addition of numbers provided in a string format with various delimiter options.

## Features

- **Empty String:** Returns `0`.
- **Single Number:** Returns the number itself.
- **Two Numbers:** Returns the sum of two numbers separated by a comma.
- **Multiple Numbers:** Handles any number of comma-separated or newline-separated numbers.
- **Custom Delimiters:** Supports custom delimiters specified in the format `//[delimiter]\n[numbers…]`, including special and multi-character delimiters.
- **Negative Numbers:** Throws an exception with a message listing all negative numbers.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
   npm install
2. **Navigate to the project directory:**
    cd your-repository
3. **Install dependencies:**
    npm install

## Usage
To use the add function, you can call it with a string input as described in the features. For example:

    const add = require('./calculator');

    // Examples
    console.log(add("")); // Outputs: 0
    console.log(add("1")); // Outputs: 1
    console.log(add("1,2")); // Outputs: 3
    console.log(add("//;\n1;2")); // Outputs: 3
    console.log(add("//[***]\n1***2***3")); // Outputs: 6

## Running Tests
To ensure that everything is working correctly, run the test suite using:

    npx jest

## Test cases
The test cases cover the following scenarios:

    Empty string
    Single number
    Two numbers
    Multiple numbers
    New lines as delimiters
    Custom delimiters
    Negative numbers
