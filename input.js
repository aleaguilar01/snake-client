const { MOVEMENT_COMMANDS, MESSAGE_COMMANDS, ENCODING } = require("./constants");

//Variable that helps us to pass the connection into the setupInput function. 
let connection;

//Creating a function to send commands to the server
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  //Movement key commands, passed to move the snake. Stablished as an object in the constants.
  if (MOVEMENT_COMMANDS[key]) {
    connection.write(`Move: ${MOVEMENT_COMMANDS[key]}`);
  }
  
  //Message key commands, passed to move the snake. Stablished as an object in the constants.
  if (MESSAGE_COMMANDS[key]) {
    connection.write(`Say: ${MESSAGE_COMMANDS[key]}`);
  }
};

//Function to stablish the parameters of the inputs.
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;