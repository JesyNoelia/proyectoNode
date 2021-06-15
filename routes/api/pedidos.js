const router = require('express').Router();
const { getPedidosById } = require('../../models/pedido.model')


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


module.exports = router;