const router = require('express').Router();
const { getFavoritosById, createFavorito } = require('../../models/favorito.model')


// --> obtener favoritos por Id de usuario
// GET http://localhost:3000/api/favoritos/1
router.get('/:usuarioId', async (req, res) => {
    try {
        const favoritos = await getFavoritosById(req.params.usuarioId)
        if (favoritos) {
            res.json(favoritos);
        } else {
            res.json({ message: 'el id del producto no existe' });
        }
    } catch (error) {
        res.json({ error: 'no funciona' });
    }

});

// --> CREAR nuevo pedido
/// POST http://localhost:3000/api/favoritos

router.post('/', async (req, res) => {
    const resultFavorito = await createFavorito(req.body);
    res.json(resultFavorito)
});


module.exports = router;