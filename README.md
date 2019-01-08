# Javascript-Quiz-App

A project I did after Makers: a simple James Bond quiz app written in Javascript, with Cypress feature testing

## Goal

I wanted a project where I could:
- Experiment with using Cypress to feature test Javascript, as previously I did not know how to feature test Javascript. 
- Practise Javascript in general
- Finally put the encyclopic knowledge left over from my childhood obsession with James Bond to good use.

## Architecture

- The Answers.js "class" holds all the answers, the questions are written in the index.html file.  

## Approach

- I initially had the answer selection as a drop down list, so that I could experient with different Cypress features. Ultimately I changed these to radio buttons to make it more visually appealing.  
- I used Jasmine to unit test rather than Cypress, as I already knew how to unit test with Jasmine, so it didn't seem a top priority to learn to unit test with Cypress. 

## What I learnt

- How to use Cypress, so now I can finally feature test Javascript! 
- How to use eslint to lint my code. 

## Future improvements

- I didn't add a scoring element, because this wouldn't add anything to my Cypress knowledge and as a result it's probably best for me to focus on learning something new. However, I might return to this project in the future. 
- It might be better to have the questions in a database, which would make growth of the app easier. 
- I realised at the end that I had forgotten to write a lot of my names in camel case, which goes against the usual Javascript convention. Too much Ruby for me..

## To run locally

- Clone the repo and: 
```
$ bundle install
```

## Tests

- To run the unit tests, copy the full path of the SpecRunner file into the browser, or: 

```
$ open SpecRunner.html 
```

- To run all the feature tests:
```
$ npx Cypress run
```

...will print out the tests in the terminal. Or:

```
$ npx Cypress open
```
will allow you to view each feature test individually, with images. It's really great! 

## Technologies used 

- Javascript
- Jquery
- Jasmine
- Cypress
- ESlint


