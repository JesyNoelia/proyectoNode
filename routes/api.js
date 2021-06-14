var express = require('express');
var router = express.Router();




const apiProductosRouter = require('./api/productos');



router.use('/productos', apiProductosRouter);



module.exports = router;