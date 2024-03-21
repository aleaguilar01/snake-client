//Creating a function to close the conection using user input: ctrl + c
const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
};

//Function to stablish the parameters of the inputs.
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);


  return stdin;
};

const moveSnakeUp = (snake) => {
  setInterval(() => snake.write("Move: up"), 1000);
};

module.exports = moveSnakeUp;

module.exports = setupInput;