'use strict'

let temperature = process.argv[2];

// console.log(temperature);

if (temperature < 20.0) {
    console.log("Activating Heating on temperature", temperature);
}