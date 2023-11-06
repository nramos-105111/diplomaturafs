var express = require('express');
var router = express.Router();


router.get('/',function(req, res,next){
    res.send('Esta es la pagina de Contacto');
});



module.exports = router;