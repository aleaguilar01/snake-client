const { MOVEMENT_COMMANDS, MESSAGE_COMMANDS } = require("./constants");

let connection;


//Creating a function to send commands to the server
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (MOVEMENT_COMMANDS[key]) {
    connection.write(`Move: ${MOVEMENT_COMMANDS[key]}`);
  }
  if (MESSAGE_COMMANDS[key]) {
    connection.write(`Say: ${MESSAGE_COMMANDS[key]}`);
  }
};

//Function to stablish the parameters of the inputs.
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

/* const moveSnakeUp = (snake) => {
  setInterval(() => snake.write("Move: up"), 1000);
};

module.exports = moveSnakeUp; */

module.exports = setupInput;