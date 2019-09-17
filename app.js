const express = require('express');
const app = express();
require('dotenv').config()

app.get("/", (req, res) => {
    res.send("hello from node");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`A nodejs server is listening on port: ${port}`)
});