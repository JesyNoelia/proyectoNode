var express = require('express');
var router = express.Router();




const apiProductosRouter = require('./api/productos');
const apiPedidosRouter = require('./api/pedidos')
const apiColegiosRouter = require('./api/colegios');
const apiUsuariosRouter = require('./api/usuarios')


router.use('/productos', apiProductosRouter);
router.use('/pedidos', apiPedidosRouter);
router.use('/colegios', apiColegiosRouter);
router.use('/usuarios', apiUsuariosRouter);



module.exports = router;