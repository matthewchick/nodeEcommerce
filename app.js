const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// import routes
const userRoutes = require('./routes/user');

// app
const app = express();

// db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(()=> console.log('DB Connected'));

mongoose.connection.on("error", err => {
    //using template string in ES6
    console.log(`DB connection error: ${err.message}`);
}); 

// routes middleware
app.use("/api", userRoutes);   //use middleware, router instead of the following codes

/*
app.get("/", (req, res) => {
    res.send("hello from node");
})*/

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`A nodejs server is listening on port: ${port}`)
});