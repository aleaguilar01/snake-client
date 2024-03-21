const moveSnakeUp = (snake) => {
  setInterval(() => snake.write("Move: up"), 1000);
};

module.exports = moveSnakeUp;