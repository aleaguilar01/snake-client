const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    // Configuring the connection details: host and port
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8");

  // Event listener for data received from the server
  conn.on("data", (data) => {
    // Logging the data received from the server
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = connect;