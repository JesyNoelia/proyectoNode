const router = require('express').Router();
const { getPedidosById } = require('../../models/pedido.model')


// --> obtener pedidos por Id
// GET http://localhost:3000/api/pedidos/1
router.get('/:pedidosId', async (req, res) => {
    try {
        const producto = await getPedidosById(req.params.productoId)
        if (producto) {
            res.json(producto);
        } else {
            res.json({ message: 'el id del producto no existe' });
        }

    } catch (error) {
        res.json({ error: 'no funciona' });
    }

});


module.exports = router;