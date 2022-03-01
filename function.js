'use strict';


let n = process.argv[2];

function greet(n){
    for(let i = 1; i <= n; i++){
        console.log("Black-D3vil", i);
    }
}

greet(n);