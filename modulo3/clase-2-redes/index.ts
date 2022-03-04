import * as net from "net";

function main() {
  const client = net.createConnection({ port: 8124 }, () => {
    // 'connect' listener.
    console.log("conectado al servidor!");
    client.write("world!\r\n");
  });
  client.on("data", (data) => {
    console.log(data.toString());
    client.end();
  });
  client.on("end", () => {
    console.log("desconectado del servidor");
  });
}

main();
