# Javascript-Quiz-App

A project I did after Makers: a simple James Bond quiz written in Javascript, with Cypress feature testing

## Goal

I wanted a project where I could:
- Experiment with using Cypress to feature test Javascript, as previously I did not know how to feature test Javascript.
- Practise Javascript in general
- Learn how to use a Javascript linter
- Finally put the encyclopedic knowledge leftover from my childhood obsession with James Bond to good use.

## Features

![screen shot 2019-01-09 at 20 03 01](https://user-images.githubusercontent.com/42243785/50925709-0de93200-144b-11e9-8b08-4d8dd63ea179.png)


The app is very simple. The user answers the questions and then the answers appear beneath. Please don't play if you've had a bad day, as wrong answers are greeted quite rudely.  


## Architecture

- The Answers.js "class" holds all the answers and the questions are written in the index.html file.  

## Approach

- I initially had the answer selection as a drop down list, so that I could experiment with different Cypress features. Ultimately I changed these to radio buttons to make them more visually appealing.  
- I used Jasmine to unit test rather than Cypress, as I already knew how to unit test with Jasmine, so it didn't seem a top priority to learn to unit test with Cypress.

## What I learnt

- How to use Cypress, so now I can finally feature test Javascript!
- How to use ESlint to lint my code.

## Future Improvements

- I didn't add a scoring element, because this wouldn't add anything to my Cypress knowledge, and as a result it's probably best for me to focus on learning something different. However, I might return to this project in the future.
- It might be better to have the questions in a database, which would make growth of the app easier.
- I realised at the end that I had forgotten to write a lot of my names in camel case, which goes against the usual Javascript convention. Too much Ruby for me...

## To run locally

Clone the repo and:
```
$ bundle install
```

To view the app at localhost:8080:

```
$ node node_modules/http-server/bin/http-server
```

## Tests

To run the unit tests, copy the full path of the SpecRunner file into the browser, or:

```
$ open SpecRunner.html
```
![screen shot 2019-01-08 at 15 06 34](https://user-images.githubusercontent.com/42243785/50924133-9f09da00-1446-11e9-94fa-c46a31880688.png)

To run all the feature tests:

First, keep the server running. Then:
```
$ npx Cypress run
```

...will print out the tests in the terminal. Or:

```
$ npx Cypress open
```
and then click on each test, or on 'Run all Specs'. This will allow you to see the tests with images. It's really great!

![screen shot 2019-01-09 at 19 43 57](https://user-images.githubusercontent.com/42243785/50924259-f60faf00-1446-11e9-9108-99c2fb659540.png)

## Technologies used

- Javascript
- jquery
- Jasmine
- Cypress
- ESlint
