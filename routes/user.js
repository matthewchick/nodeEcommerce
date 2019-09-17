// Create express router
const express = require('express');
const router = express.Router();
const { sayHi } = require('../controllers/userController');   //destruct

// set the routes to the function inside the controller like php laravel or spring Boot getParam()
router.get("/", sayHi);    

module.exports = router;   // allow the other file to import