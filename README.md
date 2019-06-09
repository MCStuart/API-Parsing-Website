 # _BetterDoctor API Search_

#### _A program that searches for doctors by name and specialty, 06.7.2019_

#### By _Stuart McKay_

## Description
_This program will allow a user to use the BetterDoctor API to search for Portland Doctors by name (first and last) and by specialty/symptom. It will give their full name, title, address, office phone number, website, and if they are accepting new patients or not._

## Specs

| Behavior | Input | Output |
| ------------- |:-------------:| :-----:|
| User Searches for a doctor by name and returns basic details for all matches including title, address, number, website, and accepting new patients| "Who" | "Alias Who, MD ..." |
| User Searches for a doctor by symptom and returns basic details for all matches including title, address, number, website, and accepting new patients| "Existential Angst" | "Alias Who, MD ..." |
| User Searches for a doctor by name and symptom and returns basic details for all matches including title, address, number, website, and accepting new patients| "Dr. No", "Megalomania" | "Alias Who, MD ..." |
| If a user submits a query which doesn't have any matches, an error is displayed | "iuqflhqweflhqwflhqwlef" | "There are no doctors with the name of 'iuqflhqweflhqwflhqwlef'. Sorry" |
| If a user submits an empty query, an error is displayed | "", "" | "Nothing matches that criteria, please try searching for something else" |


## Setup Instruction 

* Clone project from Github
* run "$ npm install" in terminal
* run "$ npm run start" in termianl

## Known Bugs

* _No known bugs at this moment_

## Support and contact details

_Should any problems occur, or any bugs discovered, please contact Stuart McKay @ stuart51994@gmail.com_

## Technologies Used

_This program was written in JavaScript (ECMA6) with Node Package Manager (Webpack, Babel, ESLint, Jest), Bootstrap, JQuery, and Popper.js_

### License

*This software is licensed under MIT license.*

Copyright (c) 2019 **_Stuart McKay_**
