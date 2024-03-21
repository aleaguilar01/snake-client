const IP = "localhost";
const PORT = 50541;
const NAME = "Ale";
const ENCODING = "utf8";
const MOVEMENT_COMMANDS = {
  'w': 'up',
  'a': 'left',
  's': 'down',
  'd': 'right'
};
const MESSAGE_COMMANDS = {
  "h": "Hi!",
  "b": "Bye bye!",
  "f": "Fist-bump!",
  "g": "Gaaaaah",
  "u": "whaaaaaas up!",
  "l": "Looooos..ing!",
  "z": "Zzzzzzsnek!",
  "p": "Go pack!"
};

module.exports = {
  IP,
  PORT,
  NAME,
  ENCODING,
  MOVEMENT_COMMANDS,
  MESSAGE_COMMANDS
};