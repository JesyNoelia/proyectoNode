const router = require('express').Router();
const { getIdCategoria } = require('../../models/categoria.model');

//Obtener de las categorias: Nombre e Id
//GET http://localhost:3000/api/categorias/buscar

router.get('/buscar', async (req, res) => {
    try {
        const rows = await getIdCategoria();
        console.log(rows);
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.json({ error: 'error' });
    }
})



module.exports = router;