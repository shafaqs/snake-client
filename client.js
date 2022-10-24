const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: PORT,
    IP: IP

  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SHF");
    // conn.write("Say: STP");

  });
  conn.on("data", (data) => {
    console.log("server says:", data);
  });

  //stdin.on("data", handleUserInput);

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = { connect };