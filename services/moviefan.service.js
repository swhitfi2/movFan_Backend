// Access our newly created Mongoose Model
var MovieFan = require('../models/moviefan.model.js')

// Saving the context of this module inside the _the variable
_this = this

// Let's use an Async function to get the To Do List
exports.getMovieFans = async function(query, page, limit){

    // We also want to set up options for the mongoose paginate

    var options = {
        page,
        limit
    }

//Let's create a Try and Catch function 
//that way we have some error handling set. 
//Waiting for the promise
    
try {
    var moviefans = await MovieFan.paginate(query, options)
    

    return moviefans;

} catch (e) {

//If the try didn't work we're going to 
//go ahead and let the users know what kind of 
//Error 

    throw Error('Oh No! We got an error while Paginating our Movie Fan list task, so sorry!' )
    }
}

//new function create
exports.createMoviefan = async function(moviefan){
    
    // Creating a new Mongoose Object by using the new keyword
    
        var newMoviefan = new MovieFan({
            name: moviefan.name,
            email: moviefan.email,
            favoriteMovie: moviefan.favoriteMovie,
            date: new Date(),
            status: moviefan.status
        })
    
        try{
    
            // Let's go ahead and save 
    
            var savedMoviefan= await newMoviefan.save()
    
            return savedMoviefan;
        }catch(e){
          
            //if we can't create  throw an error 
    
            throw Error("Error while Creating Movie Fan")
        }
    }

    //new function update
    exports.updateMoviefan = async function(moviefan){
        var id = moviefan.id
    
        try{
            //Find the old  Object by the Id
        
            var oldMoviefan = await MovieFan.findById(id);
        }catch(e){
            throw Error("Error occured while Finding the Movie fan")
        }
    
        // If no old Object exists return false
    
        if(!oldMoviefan){
            return false;
        }
    
        console.log(oldMoviefan)
    
        //Edit the  Object
    
       oldMoviefan.name = moviefan.name
       oldMoviefan.email = moviefan.email
       oldMoviefan.favoriteMovie = moviefan.favoriteMovie
       oldMoviefan.status = moviefan.status
       
    
        console.log(oldMoviefan)
    
        try{
            var savedMoviefan = await oldMoviefan.save()
            return savedMoviefan;
        }catch(e){
            throw Error("And Error occured while updating the Movie Fan");
        }
    }

    //new function delete
    exports.deleteMoviefan = async function(id){
    
        // Delete the fan
    
        try{
            var deleted = await MovieFan.deleteOne({_id: id})
            if(deleted.n === 0){
                throw Error("Fan could not be deleted")
            }
            return deleted
        }catch(e){
            throw Error("Error Occured while Deleting the Movie fan")
        }
    }
