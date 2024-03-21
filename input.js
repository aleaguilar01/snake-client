let connection;


const movementCommands = {
  'w': 'up',
  'a': 'left',
  's': 'down',
  'd': 'right'
};

const messageCommands = {
  "h": "Hi!",
  "b": "Bye bye!",
  "f": "Fist-bump!",
  "g": "Gaaaaah"
};

//Creating a function to send commands to the server
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (movementCommands[key]) {
    connection.write(`Move: ${movementCommands[key]}`);
  }

  if (messageCommands[key]) {
    connection.write(`Say: ${messageCommands[key]}`);
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