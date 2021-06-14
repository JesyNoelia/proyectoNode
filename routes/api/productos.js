const router = require('express').Router();

const { getAllProductos } = require('../../models/producto.model');


//----> Llamada a model para visualizar todos los productos
// GET localhost:3000/api/productos

router.get('/', async (req, rest) => {
    try {
        const rows = await getAllProductos();
        rest.json(rows);
    } catch (err) {
        rest.json({ error: 'error' });
    }
})








module.exports = router;