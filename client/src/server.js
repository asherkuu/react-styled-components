const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 9000;
// app.use(bodyParser.json());
app.use(cors()); // Cross Origin Resource Sharing

app.get("/", (req, res) => {
    console.log(`Wellcome to dpg-server..`);
});

app.get("/api/data", (req, res) => {
    const json = { result: "true" };
    res.send(json);
});

// listen
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});
