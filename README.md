String Calculator TDD Kata
Overview
This repository contains a solution for the String Calculator TDD Kata, designed to practice Test-Driven Development (TDD) using JavaScript. The calculator can handle addition of numbers provided in a string format with various delimiter options.

Features
Empty String: Returns 0.
Single Number: Returns the number itself.
Two Numbers: Returns the sum of two numbers separated by a comma.
Multiple Numbers: Handles any number of comma-separated or newline-separated numbers.
Custom Delimiters: Supports custom delimiters specified in the format //[delimiter]\n[numbers…], including special and multi-character delimiters.
Negative Numbers: Throws an exception with a message listing all negative numbers.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/vikashkuma/IncubyteCalculator.git
Navigate to the project directory:

bash
Copy code
cd IncubyteCalculator
Install dependencies:

bash
Copy code
npm install
Usage
To use the add function, you can call it with a string input as described in the features. For example:

javascript
Copy code
const add = require('./calculator');

// Examples
console.log(add("")); // Outputs: 0
console.log(add("1")); // Outputs: 1
console.log(add("1,2")); // Outputs: 3
console.log(add("//;\n1;2")); // Outputs: 3
console.log(add("//[***]\n1***2***3")); // Outputs: 6
Running Tests
To ensure that everything is working correctly, run the test suite using:

bash
Copy code
npx jest
Test Cases
The test cases cover the following scenarios:

Empty string
Single number
Two numbers
Multiple numbers
New lines as delimiters
Custom delimiters
Negative numbers
Contributing
Feel free to fork the repository, make changes, and submit a pull request. If you find any issues or have suggestions, please open an issue.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
TDD and Clean Code Principles - A great resource for understanding TDD.