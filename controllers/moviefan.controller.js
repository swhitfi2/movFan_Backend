// We need to be able to access the Service 
//that we just created so let's pull that in

var MoviefanService = require('../services/moviefan.service.js');

// Make sure to save the context of 
//this module inside the _this variable

_this = this

//read function
exports.getMoviefans = async function(req, res, next){

    // We're going to use ternary to check 
    //the existence of the query parameters
        
        var page = req.query.page ? req.query.page : 1
        var limit = req.query.limit ? req.query.limit : 10; 
    
        try{
            //var moviefans = await MoviefanService.getMoviefans({}, page, limit)
            var moviefans = await MoviefanService.getMovieFans({}, page, limit)
            
    // Return the list with the appropriate 
    //HTTP Status Code and Message.
            
            return res.status(200).json({status: 200, data: moviefans, message: "Succesfully  Recieved"});
            
        }catch(e){
            
    //Return an Error Response Message 
    //with Code and the Error Message.
            
            return res.status(400).json({status: 400, message: e.message});
            
        }
    }

    //create function
    exports.createMoviefan = async function(req, res, next){

        // Note: Req.Body contains the form submit values.
    
        var moviefan = {
                name: req.body.name,
                email: req.body.email,
                favoriteMovie: req.body.favoritemovie,     
                status: req.body.status
        }
    
        try{
            
    // Calling the Service function 
    //with the new object from the Request Body
        
            var createdMoviefan = await MoviefanService.createMoviefan(moviefan)
            return res.status(201).json({status: 201, data: createdMoviefan, message: "Succesfully Created"})
        }catch(e){
            
    //Return an Error Response Message 
    //with Code and the Error Message.
            
    return res.status(400).json({status: 400, message: "Creation was Unsuccesfull, I am sorry :( "})
        }
    }
//update 
    exports.updateMoviefan = async function(req, res, next){

        // Id is necessary for the update
    
        if(!req.body._id){
            return res.status(400).json({status: 400., message: "Id must be present"})
        }
    
        var id = req.body._id;
    
        console.log(req.body)
    
        var moviefan = {
            id,
            name: req.body.name ? req.body.name : null,
            email: req.body.email ? req.body.email : null,
            favoriteMovie: req.body.favoritemovie ? req.body.favoriteMovie : null,     
            status: req.body.status ? req.body.status : null
        }
    
        try{
            var updatedMoviefan = await MoviefanService.updateMoviefan(moviefan)
            return res.status(200).json({status: 200, data: updatedMoviefan, message: "Succesfully Updated"})
        }catch(e){
            return res.status(400).json({status: 400., message: e.message})
        }
    }

    //new function delete
    exports.removeMoviefan = async function(req, res, next){

        var id = req.params.id;
    
        try{
            var deleted = await MoviefanService.deleteMoviefan(id)
            return res.status(204).json({status:204, message: "Succesfully Deleted"})
        }catch(e){
            return res.status(400).json({status: 400, message: e.message})
        }
    
    }
    
    
