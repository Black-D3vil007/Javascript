'use strict';

// 3! 3*2*1

let value = process.argv[2];

function factorial1(value) {

    let factorial = 1;

    for(let i = 2; i <= value; i++){
        factorial *= i;
    }

    return factorial;
}


console.log(factorial1(value));



// 

let factorial2 = function(value) {
    let factorial = 1;

    for(let i = 2; i <= value; i++){
        factorial *= i;
    }

    return factorial;
}

console.log(factorial2(value));



// 



let factorial3 = () => {
    let factorial = 1;

    for(let i = 2; i <= value; i++){
        factorial *= i;
    }

    return factorial;
}

console.log(factorial3(value));