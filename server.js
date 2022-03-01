'use strict';


let http = require('http');

function requestCallback(req, res) {
    console.log("Hello Mr. Black-D3vil");

    res.write('Hello Mr. Black-D3vil');
    res.end();
}

let server = http.createServer(requestCallback);

server.listen(8000);

console.log('Listening on http://localhost:8000');