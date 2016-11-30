/**
 * Created by Leo on 29/11/2016.
 */

// <editor-fold defaultstate="collapsed" desc="Dependencias">
var express= require('express');
var router= express.Router();

// </editor-fold>
// <editor-fold defaultstate="collapsed" desc="Modelos">
var Establecimientos = require('../models/establecimientoModel');

// </editor-fold>
// <editor-fold defaultstate="collapsed" desc="Obtener Productos">
/*router.get('/productos',function(req,res){
 res.send("ingresa api");
 });*/


Establecimientos.methods(['get','put','post','delete','search']);
Establecimientos.register(router,'/establecimiento');



// </editor-fold>

//Return route
module.exports=router;
