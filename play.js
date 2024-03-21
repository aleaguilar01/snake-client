const connect = require("./client.js");
const moveSnakeUp = require("./inputs.js");

console.log("Connecting ...");

// Creating an instance
const snake1 = connect();

//moveSnakeUp(snake1);

const snake2 = connect();

//setInterval(() => snake2.write("Move: down"), 1000);
