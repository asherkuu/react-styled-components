const app = require("../server");
const debug = require("debug")("p-netflix:server");
const http = require("http");

const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provied port
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

// normalizePort
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

// error event
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Event listener
function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string" ? "Pipe " + addr : "Port " + addr;
    debug("Listening on " + bind);
}
