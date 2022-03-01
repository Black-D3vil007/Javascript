'use strict';

console.log(Math.pow(7, 2));

let number = process.argv[2];

function square(number){

    let square = number*number;

    return square;
}

console.log(square(number));


function greet(name){
    let greeting = 'Hello' +" "+ name;

    return greeting;
}

console.log(greet('D3vil'));