const connect = require("./client.js");
//const moveSnakeUp = require("./input.js");
const setupInput = require("./input.js");

console.log("Connecting ...");

// Creating an instance
const snake1 = connect();

//moveSnakeUp(snake1);

//const snake2 = connect();

//setInterval(() => snake2.write("Move: down"), 1000);


//Passing the connect object into the setUpInput
setupInput(snake1);