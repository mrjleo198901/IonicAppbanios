/**
 * Created by Leo on 29/11/2016.
 */

var restful= require('node-restful');
var mongoose= restful.mongoose;

var estSchema = new mongoose.Schema({

    name : String,
    average: Number,
    acum: Number,
    ratingNumber: Number

});

module.exports= restful.model('establecimientos',estSchema);
