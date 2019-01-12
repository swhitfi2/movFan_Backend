var express = require('express')

var router = express.Router()

// Getting the MovieFan Controller that we just created

var MovieFanController = require('../../controllers/moviefan.controller.js');


// Map each API to the Controller Functions

router.get('/', MovieFanController.getMoviefans)

router.post('/', MovieFanController.createMoviefan)

router.put('/', MovieFanController.updateMoviefan)

router.delete('/:id',MovieFanController.removeMoviefan)


// Export the Router

module.exports = router;