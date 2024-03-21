const connect = require("./client.js");

//const moveSnakeUp = require("./input.js");
const setupInput = require("./input.js");

console.log("Connecting ...");

// Creating an instance
const snake1 = connect();

//Passing the connect object into the setUpInput
setupInput(snake1);