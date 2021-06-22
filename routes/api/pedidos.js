const router = require('express').Router();
const { getPedidosById, createPedido } = require('../../models/pedido.model');
const { controlToken } = require('../middlewares');


// --> obtener pedidos por Id de usuario
// GET http://localhost:3000/api/pedidos/1
router.get('/:usuarioId', async (req, res) => {
    try {
        const pedidos = await getPedidosById(req.params.usuarioId)
        if (pedidos) {
            res.json(pedidos);
        } else {
            res.json({ message: 'el id del producto no existe' });
        }

    } catch (error) {
        res.json({ error: 'no funciona' });
    }

});

// --> CREAR nuevo pedido
/// POST http://localhost:3000/api/pedidos

router.post('/', controlToken, async (req, res) => {
    console.log('body', req.body);

    req.body.fk_usuario = (req.user.id);
    try {
        const resultPedido = await createPedido(req.body);
        console.log(resultPedido);
        if (resultPedido) {
            res.json({ 'message': 'pedido realizado' });
        }
    } catch (error) {
        res.json({ error: 'Hay un error en el id token' })
    }

});


module.exports = router;