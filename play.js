const connect = require("./client.js");
const moveSnakeUp = require("./inputs.js");

console.log("Connecting ...");

// Creating an instance
const snake1 = connect();

//moveSnakeUp(snake1);

const snake2 = connect();

//setInterval(() => snake2.write("Move: down"), 1000);

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);


  return stdin;
};

setupInput();