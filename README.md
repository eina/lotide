# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @thelittleblacksmith/lotide`

**Require it:**

`const _ = require('@thelittleblacksmith/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: *requires an array* as an argument and returns the first item in an array
* `tail`: *requires an array* as an argument and returns all but the first item of the array
* `middle`: *requires an array* as an argument
  - if array has odd length, it will return the middle item in an array
  - if array has even length, it will return the two middle items in an array