let connection;


//Creating a function to send commands to the server
const handleUserInput = function(key) {

  switch (key) {
  case '\u0003':
    process.exit();
    break;
  
  case 'w':
    connection.write("Move: up");
    break;
  
  case 's':
    connection.write("Move: down");
    break;

  case 'a':
    connection.write("Move: left");
    break;

  case 'd':
    connection.write("Move: right");
    break;
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