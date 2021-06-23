const router = require('express').Router();
const { getFavoritosById, createFavorito } = require('../../models/favorito.model');
const { controlToken } = require('../middlewares');


// --> obtener favoritos por Id de usuario
// GET http://localhost:3000/api/favoritos
router.get('/', controlToken, async (req, res) => {
    try {
        const favoritos = await getFavoritosById(req.user.id)
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

router.post('/', controlToken, async (req, res) => {
    req.body.fk_usuario = (req.user.id);
    try {
        const resultFavorito = await createFavorito(req.body);
        res.json(resultFavorito)
    } catch (error) {
        console.log(error)
    };
});


module.exports = router;