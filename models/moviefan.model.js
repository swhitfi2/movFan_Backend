var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var MovieFanSchema = new mongoose.Schema({
    name: String,
    email: String,
    favoriteMovie: String,
    date: Date,
    status: String
})

MovieFanSchema.plugin(mongoosePaginate)
const MovieFan = mongoose.model('MovieFan', MovieFanSchema)

module.exports = MovieFan;