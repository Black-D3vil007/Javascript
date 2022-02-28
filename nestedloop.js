'use strict';

let animalTable = [
    ['Dog', 'Cat'],
    ['Giraffe', 'Elephant', 'Rhino']
];


// for (let i = 0; i < animalTable.length; i++) {
//     let row = animalTable[i];

//     for (let j = 0; j < row.length; j++) {
//         console.log(i, j, "->" ,row[j]);
//     }

// }


for (let i = 0; i < animalTable.length; i++) {
    for (let j = 0; j < animalTable.length; j++) {
        console.log(i, j, "->" ,animalTable[i][j]);
    }

}