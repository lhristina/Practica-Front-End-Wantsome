//week 9 CallBacks - Practice 

// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
    setTimeout(function () {
        console.log('1')
    }, 400);
}
const func2 = () => {
    setTimeout(function () {
        console.log('2')
    }, 300);
}
const func3 = () => {
    setTimeout(function () {
        console.log('3')
    }, 100);
}
const func4 = () => {
    setTimeout(function () {
        console.log('4')
    }, 400);
}
const func5 = () => {
    setTimeout(function () {
        console.log('5')
    }, 200);
}

func1();
func2();
func3();
func4();
func5();


// 1

function customMap(array, callback) {
    var arr = [];
    for (var index in array) {
        arr.push(callback(array[index]));
    }
    return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console

const increment = n => (n + 1)

console.log(myMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log(myMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// 2

/*
// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
var filter = function(____, ____) {
  var filteredArray = [];
  for (var ____ = ____; ____ < ____.____; ____++) {
    var ____ = ____[____];
    if (____(____)) {
      filteredArray.push(____);
    }
  }
  return filteredArray;
// }
*/


let filter = function (array, func) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        let arrayItem = array[i]
        if (func(arrayItem)) {
            filteredArray.push(arrayItem)
        }
    }
    return filteredArray;
}

const isOdd = n => (n % 2 === 1);
const isEven = n => (n % 2 === 0);
const divisibleBy5 = n => (n % 5 === 0);
const divisibleBy3 = n => (n % 3 === 0)
const isSquare = n => (Number.isInteger(Math.sqrt(n)))


// Call the filter function in 5 different cases(5 different filtering functions 
//     - example: filters the odd items, filter the items which are divisible by 3, etc... )
//     * /

// 3 

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/

const multipleCallbacks = function (object, funcSucces, funcError) {
    if (object.status === 'succes') {
     return funcSucces();
    }
    else {
     return funcError();
    }
}


let book = {
    status: 'succes',
}
let book2 = {
    status: 'error'
}


const succes = () => {
        return 'This book was awasome'
    }

const error = () => {
        return 'This book was not great!'
    }