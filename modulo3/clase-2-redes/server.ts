import * as net from "net";

function main() {
  const server = net.createServer((c) => {
    // 'connection' listener.
    console.log("client connected");
    c.on("end", () => {
      console.log("client disconnected");
    });
    c.write("hello\r\n");
    c.pipe(c);
  });
  server.on("error", (err) => {
    throw err;
  });
  server.listen(8124, () => {
    console.log("server iniciado en el puerto 8124");
  });
}

main();
