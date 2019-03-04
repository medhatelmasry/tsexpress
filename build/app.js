"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app/app.ts
var express = require("express");
var port = process.env.PORT || 3000;
// Create a new express application instance
var app = express();
app.get('/', function (req, res) {
    res.send('Hello Good World!');
});
app.listen(port, function () {
    console.log("Example app listening on port " + port + "!");
});
//# sourceMappingURL=app.js.map