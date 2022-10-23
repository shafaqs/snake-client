const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541

  });
  conn.on("connect", () => {
    console.log("client connected");
  });
  conn.on("data", (data) => {
    console.log("server says:", data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();