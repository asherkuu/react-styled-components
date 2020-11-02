const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
// const cookieParser = require("cookie-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Cross Origin Resource Sharing

app.use(express.static(path.join(__dirname, "../client/build"))); // build 되어진 데이터를 가져와서 서버에서 뿌려줌

app.get("/api/data", (req, res) => {
    const json = { result: "true" };
    res.send(json);
});

// It must be place below other crud url request
app.get("*", (req, res) => {
    res.send(express.static(path.join(__dirname, "../client/build/index.html")));
});

module.exports = app;
