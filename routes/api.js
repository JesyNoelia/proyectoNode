var express = require('express');
var router = express.Router();




const apiProductosRouter = require('./api/productos');
const apiPedidosRouter = require('./api/pedidos');
const apiColegiosRouter = require('./api/colegios');
const apiUsuariosRouter = require('./api/usuarios');
const apiCategoriasRouter = require('./api/categorias');
const apiFavoritosRouter = require('./api/favoritos');


router.use('/productos', apiProductosRouter);
router.use('/pedidos', apiPedidosRouter);
router.use('/colegios', apiColegiosRouter);
router.use('/usuarios', apiUsuariosRouter);
router.use('/categorias', apiCategoriasRouter);
router.use('/favoritos', apiFavoritosRouter);



module.exports = router;