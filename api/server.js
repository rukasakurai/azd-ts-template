"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var app = (0, express_1.default)();
var port = Number(process.env.PORT) || 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Simple GET endpoint
app.get('/api/message', function (req, res) {
    res.json({ message: 'Hello from the backend API!' });
});
app.get('/', function (req, res) {
    res.send('API is running');
});
app.listen(port, '0.0.0.0', function () {
    console.log("API server listening at http://localhost:".concat(port));
});
