import http from "http";

import app from "./app.js";
const server = http.createServer(app);
const hostConfig = {
  host: "localhost",
  port: 3000,
};

server.on("listening", () => {
  console.log("Server Listen Wait...");
});

server.listen(hostConfig);
