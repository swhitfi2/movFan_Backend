var express = require('express');

var router = express.Router();

var moviefans = require('./api/moviefans.route');

//everything that calls this router will have this prefix
router.use('/moviefans', moviefans);


module.exports = router;