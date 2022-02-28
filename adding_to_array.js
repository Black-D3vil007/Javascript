'use strict';


let fruits = [];

fruits[0] = 'Orange';
fruits[1] = 'Apple';

fruits.push('Banana');

console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits.pop();
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);

console.log("\n*----Using Loop----*\n");

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("\nAnimals\n");

let animals = [];

animals.push(['Dog', 'Cat', 'Cow', 'Goat', 'Rabbit', 'Mouse']);
animals.push(['Tiger', 'Lion', 'Fox', 'Elephant']);

for(let i = 0; i < animals.length; i++){
    console.log(animals[i], "\n");
}