'use strict';

const log = x => console.log(x); 

const http = require ('http');

const PORT = 7500;

var handleRequest = (request, response) => {
	
	response.end('You done messed up A A Ron!!! :(');

}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
	log('Oh yeah, loads of bacon')
})


const PORT2 = 7000;

var handleRequest2 = (request2, response2) => {
	
	response2.end('You all right.  Have a great day!');

}

const server2 = http.createServer(handleRequest2);

server2.listen(PORT2, () => {
	log('Oh yeah, loads of bacon')
})