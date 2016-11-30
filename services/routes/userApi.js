/**
 * Created by Leo on 03/11/2016.
 */
// <editor-fold defaultstate="collapsed" desc="Dependencias">
var express= require('express');
var router= express.Router();

// </editor-fold>
// <editor-fold defaultstate="collapsed" desc="Modelos">
var Users = require('../models/userModel');

// </editor-fold>
// <editor-fold defaultstate="collapsed" desc="Obtener Productos">
/*router.get('/productos',function(req,res){
 res.send("ingresa api");
 });*/


Users.methods(['get','put','post','delete','search']);
Users.register(router,'/user');



// </editor-fold>

//Return route
module.exports=router;
