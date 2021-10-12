var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log("Server running at port 3000");
});

app.get("/api/v1/getHelloWorld", (req, res, next) => {
    res.json([
        "Hello World!!!"
    ]);
});