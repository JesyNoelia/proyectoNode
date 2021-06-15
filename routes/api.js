var express = require('express');
var router = express.Router();




const apiProductosRouter = require('./api/productos');
const apiPedidosRouter = require('./api/pedidos')



router.use('/productos', apiProductosRouter);
router.use('/pedidos', apiPedidosRouter);



module.exports = router;