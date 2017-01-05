/**
 * Created by Leo on 03/11/2016.
 */
var restful= require('node-restful');
var mongoose= restful.mongoose;

var userSchema = new mongoose.Schema({

    nombre : String,
    apellido: String,
    pass: String,
    mail: String,
    establecimientoV: Array


});

module.exports= restful.model('usuarios',userSchema);