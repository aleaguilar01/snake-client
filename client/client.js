const net = require("net");
const {IP, PORT, NAME, ENCODING} = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    // Configuring the connection details: host and port
    host: IP,
    port: PORT
  });

  conn.setEncoding(ENCODING);

  // Event listener for data received from the server
  conn.on("data", (data) => {
    // Logging the data received from the server
    console.log("Server says: ", data);
  });

  // sending name of the player to the server
  conn.on("connect", () => {
    conn.write(`Name: ${NAME}`);
    conn.write("A new snake has joined the game!");
  });

  return conn;
};

module.exports = connect;
