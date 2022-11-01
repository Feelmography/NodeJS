const expressHandler = (server) => {
  server.on("listening", () => {
    console.log("Server Listen Wait...");
  });
  server.on("connection", () => {
    console.log("Server Connection");
  });
};

export default expressHandler;
